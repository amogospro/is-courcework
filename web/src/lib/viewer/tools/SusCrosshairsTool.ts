/* eslint-disable @typescript-eslint/ban-ts-comment */
import { vec2, vec3 } from 'gl-matrix';
import vtkMath from '@kitware/vtk.js/Common/Core/Math';
import vtkMatrixBuilder from '@kitware/vtk.js/Common/Core/MatrixBuilder';

import type { Types } from '@cornerstonejs/core';

import {
  drawCircle as drawCircleSvg,
  drawHandles as drawHandlesSvg,
  drawLine as drawLineSvg
} from '@cornerstonejs/tools/src/drawingSvg';
import liangBarksyClip from '@cornerstonejs/tools/src/utilities/math/vec2/liangBarksyClip';

import type {
  Annotation,
  Annotations,
  EventTypes,
  SVGDrawingHelper
} from '@cornerstonejs/tools/src/types';
import { isAnnotationLocked } from '@cornerstonejs/tools/src/stateManagement/annotation/annotationLocking';

import { cornerstoneTools } from '../../helpers';

const { CrosshairsTool, utilities } = cornerstoneTools;
const { triggerAnnotationRenderForViewportIds } = utilities;

interface CrosshairsAnnotation extends Annotation {
  data: {
    handles: {
      rotationPoints: any[]; // rotation handles, used for rotation interactions
      slabThicknessPoints: any[]; // slab thickness handles, used for setting the slab thickness
      activeOperation: number | null; // 0 translation, 1 rotation handles, 2 slab thickness handles
      toolCenter: Types.Point3;
    };
    activeViewportIds: string[]; // a list of the viewport ids connected to the reference lines being translated
    viewportId: string;
  };
}

const OPERATION = {
  DRAG: 1,
  ROTATE: 2,
  SLAB: 3
};

const projectPointToLine = (
  p1: Types.Point2,
  p2: Types.Point2,
  p: Types.Point2
): [Types.Point2, number] => {
  // Calculate the coefficients (A, B, C) of the line equation Ax + By = C
  const A = p2[1] - p1[1];
  const B = p1[0] - p2[0];
  const C = A * p1[0] + B * p1[1];

  // Calculate the coefficients of the perpendicular line
  const A_perp = -B;
  const B_perp = A;
  const C_perp = A_perp * p[0] + B_perp * p[1];

  // Solve the system of equations to find the intersection point
  const det = A * B_perp - A_perp * B;
  let x, y;
  if (det === 0) {
    // Lines are parallel, return original point and infinite distance
    x = p[0];
    y = p[1];
  } else {
    x = (B_perp * C - B * C_perp) / det;
    y = (A * C_perp - A_perp * C) / det;
  }

  // Calculate the distance from the point to the line
  const distance = Math.abs(A * p[0] + B * p[1] - C) / Math.sqrt(A * A + B * B);

  return [[x, y], distance];
};

class SusCrosshairsTool extends CrosshairsTool {
  worldCoords: Types.Point3 | undefined = undefined;
  elementsMap = new Set<string>();
  mainElement: Types.IEnabledElement | null = null;

  mouseMoveCallback = (
    evt: EventTypes.MouseMoveEventType,
    filteredToolAnnotations: Annotations
  ): boolean => {
    const { element, currentPoints } = evt.detail;
    const canvasCoords = currentPoints.canvas;
    let imageNeedsUpdate = true;

    for (let i = 0; i < filteredToolAnnotations.length; i++) {
      const annotation = filteredToolAnnotations[i] as CrosshairsAnnotation;

      if (isAnnotationLocked(annotation)) {
        continue;
      }

      const { data, highlighted } = annotation;
      if (!data.handles) {
        continue;
      }

      const previousActiveOperation = data.handles.activeOperation;
      const previousActiveViewportIds =
        data.activeViewportIds && data.activeViewportIds.length > 0
          ? [...data.activeViewportIds]
          : [];

      // This init are necessary, because when we move the mouse they are not cleaned by _endCallback
      data.activeViewportIds = [];
      data.handles.activeOperation = null;

      const handleNearImagePoint = this.getHandleNearImagePoint(
        element,
        annotation,
        canvasCoords,
        6
      );

      let near = false;
      if (handleNearImagePoint) {
        near = true;
      } else {
        near = this._pointNearTool(element, annotation, canvasCoords, 6);
      }

      const nearToolAndNotMarkedActive = near && !highlighted;
      const notNearToolAndMarkedActive = !near && highlighted;
      if (nearToolAndNotMarkedActive || notNearToolAndMarkedActive) {
        annotation.highlighted = !highlighted;
        imageNeedsUpdate = true;
      } else if (
        data.handles.activeOperation !== previousActiveOperation ||
        !this._areViewportIdArraysEqual(data.activeViewportIds, previousActiveViewportIds)
      ) {
        imageNeedsUpdate = true;
      }
    }

    return imageNeedsUpdate;
  };

  /**
   * renders the crosshairs lines and handles in the requestAnimationFrame callback
   *
   * @param enabledElement - The Cornerstone's enabledElement.
   * @param svgDrawingHelper - The svgDrawingHelper providing the context for drawing.
   */
  override renderAnnotation = (
    enabledElement: Types.IEnabledElement,
    svgDrawingHelper: SVGDrawingHelper
  ): boolean => {
    if (!this.elementsMap.has(enabledElement.viewportId)) {
      enabledElement.viewport.element.addEventListener('mousemove', (event) => {
        const canvasCoords: Types.Point2 = [event.offsetX, event.offsetY];
        this.mainElement = enabledElement;
        this.worldCoords = enabledElement.viewport.canvasToWorld(canvasCoords);
        const to_render = [...this.elementsMap].filter(
          (viewportId) => viewportId !== enabledElement.viewportId
        );
        triggerAnnotationRenderForViewportIds(enabledElement.renderingEngine, to_render);
      });
      this.elementsMap.add(enabledElement.viewportId);
    }

    let renderStatus = false;
    const { viewport, renderingEngine } = enabledElement;
    const { element } = viewport;
    const annotations = this._getAnnotations(enabledElement);
    const camera = viewport.getCamera();
    const filteredToolAnnotations = this.filterInteractableAnnotationsForElement(
      element,
      annotations
    );

    // viewport Annotation
    const viewportAnnotation = filteredToolAnnotations[0];
    if (!annotations?.length || !viewportAnnotation?.data) {
      // No annotations yet, and didn't just create it as we likely don't have a FrameOfReference/any data loaded yet.
      return renderStatus;
    }

    const annotationUID = viewportAnnotation.annotationUID;

    // Get cameras/canvases for each of these.
    // -- Get two world positions for this canvas in this line (e.g. the diagonal)
    // -- Convert these world positions to this canvas.
    // -- Extend/confine this line to fit in this canvas.
    // -- Render this line.
    const { clientWidth, clientHeight } = viewport.canvas;
    const canvasDiagonalLength = Math.sqrt(clientWidth * clientWidth + clientHeight * clientHeight);
    const canvasMinDimensionLength = Math.min(clientWidth, clientHeight);

    const data = viewportAnnotation.data;
    const crosshairCenterCanvas = viewport.worldToCanvas(this.toolCenter);

    const otherViewportAnnotations = this._filterAnnotationsByUniqueViewportOrientations(
      enabledElement,
      annotations
    );

    const referenceLines: any[] = [];

    // get canvas information for points and lines (canvas box, canvas horizontal distances)
    const canvasBox = [0, 0, clientWidth, clientHeight];

    otherViewportAnnotations.forEach((annotation) => {
      const { data } = annotation;

      data.handles.toolCenter = this.toolCenter;

      const otherViewport = renderingEngine.getViewport(data.viewportId) as Types.IVolumeViewport;

      const otherCamera = otherViewport.getCamera();

      const otherViewportControllable = this._getReferenceLineControllable?.(otherViewport.id);
      const otherViewportDraggableRotatable = this._getReferenceLineDraggableRotatable?.(
        otherViewport.id
      );
      const otherViewportSlabThicknessControlsOn = this._getReferenceLineSlabThicknessControlsOn?.(
        otherViewport.id
      );

      // get coordinates for the reference line
      const { clientWidth, clientHeight } = otherViewport.canvas;
      const otherCanvasDiagonalLength = Math.sqrt(
        clientWidth * clientWidth + clientHeight * clientHeight
      );
      const otherCanvasCenter: Types.Point2 = [clientWidth * 0.5, clientHeight * 0.5];
      const otherViewportCenterWorld = otherViewport.canvasToWorld(otherCanvasCenter);

      const direction: Types.Point3 = [0, 0, 0];
      vtkMath.cross(
        camera.viewPlaneNormal as Types.Point3,
        otherCamera.viewPlaneNormal as Types.Point3,
        direction
      );
      vtkMath.normalize(direction);
      vtkMath.multiplyScalar(<Types.Point3>direction, otherCanvasDiagonalLength);

      const pointWorld0: Types.Point3 = [0, 0, 0];
      vtkMath.add(otherViewportCenterWorld, direction, pointWorld0);

      const pointWorld1: Types.Point3 = [0, 0, 0];
      vtkMath.subtract(otherViewportCenterWorld, direction, pointWorld1);

      const pointCanvas0 = viewport.worldToCanvas(pointWorld0);

      const otherViewportCenterCanvas = viewport.worldToCanvas(otherViewportCenterWorld);

      const canvasUnitVectorFromCenter = vec2.create();
      vec2.subtract(canvasUnitVectorFromCenter, pointCanvas0, otherViewportCenterCanvas);
      vec2.normalize(canvasUnitVectorFromCenter, canvasUnitVectorFromCenter);

      // Graphic:
      // Mid -> SlabThickness handle
      // Short -> Rotation handle
      //                           Long
      //                            |
      //                            |
      //                            |
      //                           Mid
      //                            |
      //                            |
      //                            |
      //                          Short
      //                            |
      //                            |
      //                            |
      // Long --- Mid--- Short--- Center --- Short --- Mid --- Long
      //                            |
      //                            |
      //                            |
      //                          Short
      //                            |
      //                            |
      //                            |
      //                           Mid
      //                            |
      //                            |
      //                            |
      //                           Long
      const canvasVectorFromCenterLong = vec2.create();

      vec2.scale(
        canvasVectorFromCenterLong,
        canvasUnitVectorFromCenter,
        canvasDiagonalLength * 100
      );
      const canvasVectorFromCenterMid = vec2.create();
      vec2.scale(
        canvasVectorFromCenterMid,
        canvasUnitVectorFromCenter,
        // to maximize the visibility of the controls, they need to be
        // placed at most at half the length of the shortest side of the canvas.
        // Chosen 0.4 to have some margin to the edge.
        canvasMinDimensionLength * 0.4
      );
      const canvasVectorFromCenterShort = vec2.create();
      vec2.scale(
        canvasVectorFromCenterShort,
        canvasUnitVectorFromCenter,
        // Chosen 0.2 because is half of 0.4.
        canvasMinDimensionLength * 0.2
      );
      const canvasVectorFromCenterStart = vec2.create();
      const centerGap = this.configuration.referenceLinesCenterGapRadius;
      vec2.scale(
        canvasVectorFromCenterStart,
        canvasUnitVectorFromCenter,
        // Don't put a gap if the the third view is missing
        0
        // otherViewportAnnotations.length === 2 ? centerGap : 0
      );

      // Computing Reference start and end (4 lines per viewport in case of 3 view MPR)
      const refLinePointOne = vec2.create();
      const refLinePointTwo = vec2.create();
      const refLinePointThree = vec2.create();
      const refLinePointFour = vec2.create();

      let refLinesCenter = vec2.clone(crosshairCenterCanvas);
      if (!otherViewportDraggableRotatable || !otherViewportControllable) {
        refLinesCenter = vec2.clone(otherViewportCenterCanvas);
      }

      vec2.add(refLinePointOne, refLinesCenter, canvasVectorFromCenterStart);
      vec2.add(refLinePointTwo, refLinesCenter, canvasVectorFromCenterLong);
      vec2.subtract(refLinePointThree, refLinesCenter, canvasVectorFromCenterStart);
      vec2.subtract(refLinePointFour, refLinesCenter, canvasVectorFromCenterLong);

      // Clipping lines to be only included in a box (canvas), we don't want
      // the lines goes beyond canvas
      liangBarksyClip(refLinePointOne, refLinePointTwo, canvasBox);
      liangBarksyClip(refLinePointThree, refLinePointFour, canvasBox);

      // Computing rotation handle positions
      const rotHandleOne = vec2.create();
      vec2.subtract(rotHandleOne, crosshairCenterCanvas, canvasVectorFromCenterMid);

      const rotHandleTwo = vec2.create();
      vec2.add(rotHandleTwo, crosshairCenterCanvas, canvasVectorFromCenterMid);

      // Computing SlabThickness (st below) position

      // SlabThickness center in canvas
      let stHandlesCenterCanvas = vec2.clone(crosshairCenterCanvas);
      if (!otherViewportDraggableRotatable && otherViewportSlabThicknessControlsOn) {
        stHandlesCenterCanvas = vec2.clone(otherViewportCenterCanvas);
      }

      // SlabThickness center in world
      let stHandlesCenterWorld: Types.Point3 = [...this.toolCenter];
      if (!otherViewportDraggableRotatable && otherViewportSlabThicknessControlsOn) {
        stHandlesCenterWorld = [...otherViewportCenterWorld];
      }

      const worldUnitVectorFromCenter: Types.Point3 = [0, 0, 0];
      vtkMath.subtract(pointWorld0, pointWorld1, worldUnitVectorFromCenter);
      vtkMath.normalize(worldUnitVectorFromCenter);

      const { viewPlaneNormal } = camera;
      // @ts-ignore // Todo: fix after vtk pr merged
      const { matrix } = vtkMatrixBuilder
        .buildFromDegree()
        // @ts-ignore fix after vtk pr merged
        .rotate(90, viewPlaneNormal);

      const worldUnitOrthoVectorFromCenter: Types.Point3 = [0, 0, 0];
      vec3.transformMat4(worldUnitOrthoVectorFromCenter, worldUnitVectorFromCenter, matrix);

      const slabThicknessValue = otherViewport.getSlabThickness();
      const worldOrthoVectorFromCenter: Types.Point3 = [...worldUnitOrthoVectorFromCenter];
      vtkMath.multiplyScalar(worldOrthoVectorFromCenter, slabThicknessValue);

      const worldVerticalRefPoint: Types.Point3 = [0, 0, 0];
      vtkMath.add(stHandlesCenterWorld, worldOrthoVectorFromCenter, worldVerticalRefPoint);

      // convert vertical world distances in canvas coordinates
      const canvasVerticalRefPoint = viewport.worldToCanvas(worldVerticalRefPoint);

      // points for slab thickness lines
      const canvasOrthoVectorFromCenter = vec2.create();
      vec2.subtract(canvasOrthoVectorFromCenter, stHandlesCenterCanvas, canvasVerticalRefPoint);

      const stLinePointOne = vec2.create();
      vec2.subtract(stLinePointOne, stHandlesCenterCanvas, canvasVectorFromCenterLong);
      vec2.add(stLinePointOne, stLinePointOne, canvasOrthoVectorFromCenter);

      const stLinePointTwo = vec2.create();
      vec2.add(stLinePointTwo, stHandlesCenterCanvas, canvasVectorFromCenterLong);
      vec2.add(stLinePointTwo, stLinePointTwo, canvasOrthoVectorFromCenter);

      liangBarksyClip(stLinePointOne, stLinePointTwo, canvasBox);

      const stLinePointThree = vec2.create();
      vec2.add(stLinePointThree, stHandlesCenterCanvas, canvasVectorFromCenterLong);
      vec2.subtract(stLinePointThree, stLinePointThree, canvasOrthoVectorFromCenter);

      const stLinePointFour = vec2.create();
      vec2.subtract(stLinePointFour, stHandlesCenterCanvas, canvasVectorFromCenterLong);
      vec2.subtract(stLinePointFour, stLinePointFour, canvasOrthoVectorFromCenter);

      liangBarksyClip(stLinePointThree, stLinePointFour, canvasBox);

      // points for slab thickness handles
      const stHandleOne = vec2.create();
      const stHandleTwo = vec2.create();
      const stHandleThree = vec2.create();
      const stHandleFour = vec2.create();

      vec2.subtract(stHandleOne, stHandlesCenterCanvas, canvasVectorFromCenterShort);
      vec2.add(stHandleOne, stHandleOne, canvasOrthoVectorFromCenter);
      vec2.add(stHandleTwo, stHandlesCenterCanvas, canvasVectorFromCenterShort);
      vec2.add(stHandleTwo, stHandleTwo, canvasOrthoVectorFromCenter);
      vec2.subtract(stHandleThree, stHandlesCenterCanvas, canvasVectorFromCenterShort);
      vec2.subtract(stHandleThree, stHandleThree, canvasOrthoVectorFromCenter);
      vec2.add(stHandleFour, stHandlesCenterCanvas, canvasVectorFromCenterShort);
      vec2.subtract(stHandleFour, stHandleFour, canvasOrthoVectorFromCenter);

      referenceLines.push([
        otherViewport,
        refLinePointOne,
        refLinePointTwo,
        refLinePointThree,
        refLinePointFour,
        stLinePointOne,
        stLinePointTwo,
        stLinePointThree,
        stLinePointFour,
        rotHandleOne,
        rotHandleTwo,
        stHandleOne,
        stHandleTwo,
        stHandleThree,
        stHandleFour
      ]);
    });

    const newRtpoints: any[] = [];
    const newStpoints: any[] = [];
    const viewportColor = this._getReferenceLineColor?.(viewport.id);
    const color = viewportColor !== undefined ? viewportColor : 'rgb(200, 200, 200)';

    referenceLines.forEach((line, lineIndex) => {
      // get color for the reference line
      const otherViewport = line[0];
      const viewportColor = this._getReferenceLineColor?.(otherViewport.id);
      const viewportControllable = this._getReferenceLineControllable?.(otherViewport.id);
      const viewportDraggableRotatable =
        this._getReferenceLineDraggableRotatable?.(otherViewport.id) ||
        this.configuration.mobile?.enabled;
      const viewportSlabThicknessControlsOn =
        this._getReferenceLineSlabThicknessControlsOn?.(otherViewport.id) ||
        this.configuration.mobile?.enabled;
      const selectedViewportId = data.activeViewportIds.find(
        (id: string) => id === otherViewport.id
      );

      let color = viewportColor !== undefined ? viewportColor : 'rgb(200, 200, 200)';

      let lineWidth = 1;

      const lineActive =
        data.handles.activeOperation !== null &&
        data.handles.activeOperation === OPERATION.DRAG &&
        selectedViewportId;

      if (lineActive) {
        lineWidth = 2.5;
      }

      let lineUID = `${lineIndex}`;
      if (viewportControllable && viewportDraggableRotatable) {
        lineUID = `${lineIndex}One`;
        drawLineSvg(svgDrawingHelper, annotationUID, lineUID, line[1], line[2], {
          color,
          lineWidth
        });

        lineUID = `${lineIndex}Two`;
        drawLineSvg(svgDrawingHelper, annotationUID, lineUID, line[3], line[4], {
          color,
          lineWidth
        });
      } else {
        drawLineSvg(svgDrawingHelper, annotationUID, lineUID, line[2], line[4], {
          color,
          lineWidth
        });
      }

      color = viewportColor !== undefined ? viewportColor : 'rgb(200, 200, 200)';

      const rotHandlesActive = data.handles.activeOperation === OPERATION.ROTATE;
      const rotationHandles = [line[9], line[10]];

      const rotHandleWorldOne = [viewport.canvasToWorld(line[9]), otherViewport, line[1], line[2]];
      const rotHandleWorldTwo = [viewport.canvasToWorld(line[10]), otherViewport, line[3], line[4]];
      newRtpoints.push(rotHandleWorldOne, rotHandleWorldTwo);

      const slabThicknessHandlesActive = data.handles.activeOperation === OPERATION.SLAB;
      const slabThicknessHandles = [line[11], line[12], line[13], line[14]];

      const slabThicknessHandleWorldOne = [
        viewport.canvasToWorld(line[11]),
        otherViewport,
        line[5],
        line[6]
      ];
      const slabThicknessHandleWorldTwo = [
        viewport.canvasToWorld(line[12]),
        otherViewport,
        line[5],
        line[6]
      ];
      const slabThicknessHandleWorldThree = [
        viewport.canvasToWorld(line[13]),
        otherViewport,
        line[7],
        line[8]
      ];
      const slabThicknessHandleWorldFour = [
        viewport.canvasToWorld(line[14]),
        otherViewport,
        line[7],
        line[8]
      ];
      newStpoints.push(
        slabThicknessHandleWorldOne,
        slabThicknessHandleWorldTwo,
        slabThicknessHandleWorldThree,
        slabThicknessHandleWorldFour
      );

      if (viewportControllable) {
        if (
          (lineActive || this.configuration.mobile?.enabled) &&
          !rotHandlesActive &&
          !slabThicknessHandlesActive &&
          viewportDraggableRotatable &&
          viewportSlabThicknessControlsOn
        ) {
          // draw all handles inactive (rotation and slab thickness)
          let handleUID = `${lineIndex}One`;
          drawHandlesSvg(svgDrawingHelper, annotationUID, handleUID, rotationHandles, {
            color,
            handleRadius: this.configuration.mobile?.enabled
              ? this.configuration.mobile?.handleRadius
              : 3,
            opacity: this.configuration.mobile?.enabled ? this.configuration.mobile?.opacity : 1,
            type: 'circle'
          });
          handleUID = `${lineIndex}Two`;
          drawHandlesSvg(svgDrawingHelper, annotationUID, handleUID, slabThicknessHandles, {
            color,
            handleRadius: this.configuration.mobile?.enabled
              ? this.configuration.mobile?.handleRadius
              : 3,
            opacity: this.configuration.mobile?.enabled ? this.configuration.mobile?.opacity : 1,
            type: 'rect'
          });
        } else if (
          lineActive &&
          !rotHandlesActive &&
          !slabThicknessHandlesActive &&
          viewportDraggableRotatable
        ) {
          const handleUID = `${lineIndex}`;
          // draw rotation handles inactive
          drawHandlesSvg(svgDrawingHelper, annotationUID, handleUID, rotationHandles, {
            color,
            handleRadius: this.configuration.mobile?.enabled
              ? this.configuration.mobile?.handleRadius
              : 3,
            opacity: this.configuration.mobile?.enabled ? this.configuration.mobile?.opacity : 1,
            type: 'circle'
          });
        } else if (
          selectedViewportId &&
          !rotHandlesActive &&
          !slabThicknessHandlesActive &&
          viewportSlabThicknessControlsOn
        ) {
          const handleUID = `${lineIndex}`;
          // draw slab thickness handles inactive
          drawHandlesSvg(svgDrawingHelper, annotationUID, handleUID, slabThicknessHandles, {
            color,
            handleRadius: this.configuration.mobile?.enabled
              ? this.configuration.mobile?.handleRadius
              : 3,
            opacity: this.configuration.mobile?.enabled ? this.configuration.mobile?.opacity : 1,
            type: 'rect'
          });
        } else if (rotHandlesActive && viewportDraggableRotatable) {
          const handleUID = `${lineIndex}`;
          // draw all rotation handles as active
          drawHandlesSvg(svgDrawingHelper, annotationUID, handleUID, rotationHandles, {
            color,
            handleRadius: 2,
            fill: color,
            type: 'circle'
          });
        } else if (
          slabThicknessHandlesActive &&
          selectedViewportId &&
          viewportSlabThicknessControlsOn
        ) {
          // draw only the slab thickness handles for the active viewport as active
          drawHandlesSvg(svgDrawingHelper, annotationUID, lineUID, slabThicknessHandles, {
            color,
            handleRadius: 2,
            fill: color,
            type: 'rect'
          });
        }
        const slabThicknessValue = otherViewport.getSlabThickness();
        if (slabThicknessValue > 0.5 && viewportSlabThicknessControlsOn) {
          // draw slab thickness reference lines
          lineUID = `${lineIndex}STOne`;
          drawLineSvg(svgDrawingHelper, annotationUID, lineUID, line[5], line[6], {
            color,
            width: 1,
            lineDash: [2, 3]
          });

          lineUID = `${lineIndex}STTwo`;
          drawLineSvg(svgDrawingHelper, annotationUID, lineUID, line[7], line[8], {
            color,
            width: line,
            lineDash: [2, 3]
          });
        }
      }
    });

    if (this.worldCoords && this.mainElement) {
      const canvasCoords = enabledElement.viewport.worldToCanvas(this.worldCoords);

      // enabledElement.viewport.
      const line1 = referenceLines[0];
      const line2 = referenceLines[1];

      const a = projectPointToLine(line1[1], line1[2], canvasCoords);
      const b = projectPointToLine(line2[1], line2[2], canvasCoords);

      if (this.mainElement.viewportId === enabledElement.viewportId) {
        let color = this._getReferenceLineColor?.(referenceLines[0][0].id);
        drawHandlesSvg(svgDrawingHelper, annotationUID, 'projection1', [a[0]], {
          color,
          handleRadius: 2,
          fill: color,
          type: 'rect'
        });
        color = this._getReferenceLineColor?.(referenceLines[1][0].id);
        drawHandlesSvg(svgDrawingHelper, annotationUID, 'projection2', [b[0]], {
          color,
          handleRadius: 2,
          fill: color,
          type: 'rect'
        });
      } else {
        const color = this._getReferenceLineColor?.(enabledElement.viewportId);
        drawHandlesSvg(
          svgDrawingHelper,
          annotationUID,
          'projection3',
          [a[1] < b[1] ? a[0] : b[0]],
          {
            color,
            handleRadius: 2,
            fill: color,
            type: 'rect'
          }
        );
      }
    }

    renderStatus = true;

    // Save new handles points in annotation
    data.handles.rotationPoints = newRtpoints;
    data.handles.slabThicknessPoints = newStpoints;

    if (this.configuration.viewportIndicators) {
      // render a circle to pin point the viewport color
      // TODO: This should not be part of the tool, and definitely not part of the renderAnnotation loop
      const referenceColorCoordinates = [clientWidth * 0.95, clientHeight * 0.05] as Types.Point2;
      const circleRadius = canvasDiagonalLength * 0.01;

      const circleUID = '0';
      drawCircleSvg(
        svgDrawingHelper,
        annotationUID,
        circleUID,
        referenceColorCoordinates,
        circleRadius,
        { color, fill: color }
      );
    }

    return renderStatus;
  };
}

SusCrosshairsTool.toolName = 'SusCrosshairs';

export default SusCrosshairsTool;
