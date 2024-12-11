/* eslint-disable @typescript-eslint/ban-ts-comment */
import { drawTextBox } from '@cornerstonejs/tools/src/drawingSvg';

import type { PublicToolProps, SVGDrawingHelper, ToolProps } from '@cornerstonejs/tools/src/types';
import { cornerstoneTools } from '../../helpers';
import type { CircleROIAnnotation } from '@cornerstonejs/tools/src/types/ToolSpecificAnnotationTypes';
import getWorldWidthAndHeightFromTwoPoints from '@cornerstonejs/tools/src/utilities/planar/getWorldWidthAndHeightFromTwoPoints';

import * as cornerstone from '@cornerstonejs/core';
// import { getCanvasCircleCorners } from '@cornerstonejs/tools/src/utilities/math/circle';
// import { transformWorldToIndex } from '@cornerstonejs/core/dist/types/utilities';
import type { AnnotationModifiedEventDetail } from '@cornerstonejs/tools/src/types/EventTypes';
// import { pointInEllipse } from '@cornerstonejs/tools/src/utilities/math/ellipse';
import { getCanvasCircleCorners } from '@cornerstonejs/tools/src/utilities/math/circle';
import Events from '@cornerstonejs/tools/src/enums/Events';
import { transformWorldToIndex } from '@cornerstonejs/core/src/utilities';
import type { IRenderingEngine, IViewport } from '@cornerstonejs/core/src/types';
import { lerp } from '$lib/utils';
// const {} = cornerstone
const { LengthTool, annotation, utilities, Types } = cornerstoneTools;

const { throttle, triggerEvent, math, planar } = utilities;
// const { transformWorldToIndex } = csUtils;

// const {Events} = cornerstone
const { ellipse } = math;
const { pointInEllipse } = ellipse;
// const {} = utilities
// const {getWorldWidthAndHeightFromTwoPoints} =planar

export type PointInShapeCallback = ({
  value,
  index,
  pointIJK,
  pointLPS
}: {
  value: number;
  index: number;
  pointIJK: cornerstone.Types.Point3;
  pointLPS: cornerstone.Types.Point3;
}) => void;

export type ShapeFnCriteria = (
  pointIJK: cornerstone.Types.Point3,
  pointLPS: cornerstone.Types.Point3
) => boolean;

/**
 * For each point in the image (If boundsIJK is not provided, otherwise, for each
 * point in the provided bounding box), It runs the provided callback IF the point
 * passes the provided criteria to be inside the shape (which is defined by the
 * provided pointInShapeFn)
 *
 * @param imageData - The image data object.
 * @param dimensions - The dimensions of the image.
 * @param pointInShapeFn - A function that takes a point in LPS space and returns
 * true if the point is in the shape and false if it is not.
 * @param callback - A function that will be called for
 * every point in the shape.
 * @param boundsIJK - The bounds of the volume in IJK coordinates.
 */
// export default function pointInShapeCallback(
//   imageData: vtkImageData | cornerstone.Types.CPUImageData,
//   pointInShapeFn: ShapeFnCriteria,
//   callback: PointInShapeCallback,
//   boundsIJK?: BoundsIJK
// ): void {
//   let iMin, iMax, jMin, jMax, kMin, kMax;

//   let scalarData;

//   // if getScalarData is a method on imageData
//   if ((imageData as Types.CPUImageData).getScalarData) {
//     scalarData = (imageData as Types.CPUImageData).getScalarData();
//   } else {
//     scalarData = (imageData as vtkImageData)
//       .getPointData()
//       .getScalars()
//       .getData();
//   }

//   const dimensions = imageData.getDimensions();

//   if (!boundsIJK) {
//     iMin = 0;
//     iMax = dimensions[0];
//     jMin = 0;
//     jMax = dimensions[1];
//     kMin = 0;
//     kMax = dimensions[2];
//   } else {
//     [[iMin, iMax], [jMin, jMax], [kMin, kMax]] = boundsIJK;
//   }

//   const start = vec3.fromValues(iMin, jMin, kMin);

//   const direction = imageData.getDirection();
//   const rowCosines = direction.slice(0, 3);
//   const columnCosines = direction.slice(3, 6);
//   const scanAxisNormal = direction.slice(6, 9);

//   const spacing = imageData.getSpacing();
//   const [rowSpacing, columnSpacing, scanAxisSpacing] = spacing;

//   // @ts-ignore will be fixed in vtk-master
//   const worldPosStart = imageData.indexToWorld(start);

//   const rowStep = vec3.fromValues(
//     rowCosines[0] * rowSpacing,
//     rowCosines[1] * rowSpacing,
//     rowCosines[2] * rowSpacing
//   );

//   const columnStep = vec3.fromValues(
//     columnCosines[0] * columnSpacing,
//     columnCosines[1] * columnSpacing,
//     columnCosines[2] * columnSpacing
//   );

//   const scanAxisStep = vec3.fromValues(
//     scanAxisNormal[0] * scanAxisSpacing,
//     scanAxisNormal[1] * scanAxisSpacing,
//     scanAxisNormal[2] * scanAxisSpacing
//   );

//   const yMultiple = dimensions[0];
//   const zMultiple = dimensions[0] * dimensions[1];

//   for (let k = kMin; k <= kMax; k++) {
//     for (let j = jMin; j <= jMax; j++) {
//       for (let i = iMin; i <= iMax; i++) {
//         const pointIJK: Types.Point3 = [i, j, k];
//         const dI = i - iMin;
//         const dJ = j - jMin;
//         const dK = k - kMin;

//         const startWorld = worldPosStart;

//         const pointLPS: Types.Point3 = [
//           startWorld[0] +
//             dI * rowStep[0] +
//             dJ * columnStep[0] +
//             dK * scanAxisStep[0],
//           startWorld[1] +
//             dI * rowStep[1] +
//             dJ * columnStep[1] +
//             dK * scanAxisStep[1],
//           startWorld[2] +
//             dI * rowStep[2] +
//             dJ * columnStep[2] +
//             dK * scanAxisStep[2],
//         ];

//         if (pointInShapeFn(pointLPS, pointIJK)) {
//           const index = k * zMultiple + j * yMultiple + i;
//           const value = scalarData[index];

//           callback({ value, index, pointIJK, pointLPS });
//         }
//       }
//     }
//   }
// }

class SliceThicknessTool extends LengthTool {
  constructor(
    toolProps: PublicToolProps = {},
    defaultToolProps: ToolProps = {
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {
        preventHandleOutsideImage: false
      }
    }
  ) {
    super(toolProps, defaultToolProps);

    // const old_calculateCachedStats = this._calculateCachedStats;

    this._throttledCalculateCachedStats = throttle(this._calculateCachedStats, 100, {
      trailing: true
    });

    const old = this.renderAnnotation;
    this.renderAnnotation = (
      enabledElement: cornerstone.Types.IEnabledElement,
      svgDrawingHelper: SVGDrawingHelper
    ): boolean => {
      let renderStatus = false;
      // const { viewport } = enabledElement;
      // const { element } = viewport;
      // let annotations = annotation.state.getAnnotations(this.getToolName(), element);

      // if (!annotations?.length) {
      //   return renderStatus;
      // }

      // annotations = this.filterInteractableAnnotationsForElement(element, annotations) || [];

      // if (!annotations?.length) {
      //   return renderStatus;
      // }

      // for (let i = 0; i < annotations?.length; i++) {
      //   const annotation = annotations[i] as CircleROIAnnotation;
      //   const { annotationUID, data } = annotation;
      //   const { handles } = data;
      //   const { points, name } = handles as any;
      //   const center = viewport.worldToCanvas(points[0]);
      //   const textBoxUID = '666';
      //   drawTextBox(
      //     svgDrawingHelper,
      //     // @ts-ignore
      //     annotationUID,
      //     textBoxUID,
      //     [name || '?'],
      //     [center[0] - 4, center[1] - 12],
      //     {
      //       fontFamily: 'Helvetica, Arial, sans-serif',
      //       fontSize: '14px',
      //       color: '#ff5555',
      //       background: '',
      //       padding: 0,
      //       centerX: true,
      //       centerY: true
      //     }
      //   );
      // }

      renderStatus = old(enabledElement, svgDrawingHelper);
      return renderStatus;
    };
  }
  override _getTextLines(data: any, targetId: string) {
    // const cachedVolumeStats = data.cachedStats[targetId];
    // const { length, unit } = cachedVolumeStats;

    // // Can be null on load
    // if (length === undefined || length === null || isNaN(length)) {
    //   return [];
    // }

    // const textLines = [`${length.toFixed(2)} ${unit}`];
    const textLines = [String(data.handles.idx)];
    return textLines;
  }

  override _calculateCachedStats(
    annotation: any,
    renderingEngine: cornerstone.Types.IRenderingEngine,
    enabledElement: cornerstone.Types.IEnabledElement
  ) {
    const data = annotation.data;
    const { viewportId, renderingEngineId } = enabledElement;
    const viewport = renderingEngine.getViewport(viewportId);
    const { points } = data.handles;

    const canvasCoordinates = points.map((p: any) => viewport.worldToCanvas(p));
    const { viewPlaneNormal, viewUp } = viewport.getCamera();
    if (!viewPlaneNormal || !viewUp) throw new Error('viewPlaneNormal or viewUp is undefined');

    const [topLeftCanvas, bottomRightCanvas] = <Array<cornerstone.Types.Point2>>canvasCoordinates;
    // getCanvasCircleCorners(canvasCoordinates)
    // const x = canvasCoordinates[0][0];
    // const y = canvasCoordinates[0][1];

    const topLeftWorld = viewport.canvasToWorld(topLeftCanvas);
    const bottomRightWorld = viewport.canvasToWorld(bottomRightCanvas);
    const { cachedStats } = data;

    const targetIds = Object.keys(cachedStats);
    const worldPos1 = topLeftWorld;
    const worldPos2 = bottomRightWorld;
    // const worldPos1 = points[0];
    // const worldPos2 = points[1];
    for (let i = 0; i < targetIds.length; i++) {
      const targetId = targetIds[i];

      const image = this.getTargetIdImage(targetId, renderingEngine);

      // If image does not exists for the targetId, skip. This can be due
      // to various reasons such as if the target was a volumeViewport, and
      // the volumeViewport has been decached in the meantime.
      if (!image) {
        continue;
      }

      const { dimensions, imageData, metadata, hasPixelSpacing } = image;

      if (!imageData) throw new Error('no image Data');

      const worldPos1Index = transformWorldToIndex(imageData, worldPos1);

      worldPos1Index[0] = Math.floor(worldPos1Index[0]);
      worldPos1Index[1] = Math.floor(worldPos1Index[1]);
      worldPos1Index[2] = Math.floor(worldPos1Index[2]);

      const worldPos2Index = transformWorldToIndex(imageData, worldPos2);

      worldPos2Index[0] = Math.floor(worldPos2Index[0]);
      worldPos2Index[1] = Math.floor(worldPos2Index[1]);
      worldPos2Index[2] = Math.floor(worldPos2Index[2]);

      // Check if one of the indexes are inside the volume, this then gives us
      // Some area to do stats over.

      if (this._isInsideVolume(worldPos1Index, worldPos2Index, dimensions)) {
        // const iMin = Math.min(worldPos1Index[0], worldPos2Index[0]);
        // const iMax = Math.max(worldPos1Index[0], worldPos2Index[0]);

        // const jMin = Math.min(worldPos1Index[1], worldPos2Index[1]);
        // const jMax = Math.max(worldPos1Index[1], worldPos2Index[1]);

        // const kMin = Math.min(worldPos1Index[2], worldPos2Index[2]);
        // const kMax = Math.max(worldPos1Index[2], worldPos2Index[2]);

        const iMin = worldPos1Index[0];
        const iMax = worldPos2Index[0];
        const jMin = worldPos1Index[1];
        const jMax = worldPos2Index[1];
        const kMin = worldPos1Index[2];
        const kMax = worldPos2Index[2];

        const boundsIJK = [
          [iMin, iMax],
          [jMin, jMax],
          [kMin, kMax]
        ] as [cornerstone.Types.Point2, cornerstone.Types.Point2, cornerstone.Types.Point2];

        // console.log(boundsIJK);

        const start = [iMin, jMin, kMin];

        // const direction = imageData.getDirection();
        // const rowCosines = direction.slice(0, 3);
        // const columnCosines = direction.slice(3, 6);
        // const scanAxisNormal = direction.slice(6, 9);

        // const spacing = imageData.getSpacing();
        // const [rowSpacing, columnSpacing, scanAxisSpacing] = spacing;

        // @ts-ignore will be fixed in vtk-master
        const worldPosStart = imageData.indexToWorld(start);
        // const worldPosStart = imageData.(start);

        // const rowStep = vec3.fromValues(
        //   rowCosines[0] * rowSpacing,
        //   rowCosines[1] * rowSpacing,
        //   rowCosines[2] * rowSpacing
        // );

        // const columnStep = vec3.fromValues(
        //   columnCosines[0] * columnSpacing,
        //   columnCosines[1] * columnSpacing,
        //   columnCosines[2] * columnSpacing
        // );

        // const scanAxisStep = vec3.fromValues(
        //   scanAxisNormal[0] * scanAxisSpacing,
        //   scanAxisNormal[1] * scanAxisSpacing,
        //   scanAxisNormal[2] * scanAxisSpacing
        // );

        const yMultiple = dimensions[0];
        const zMultiple = dimensions[0] * dimensions[1];

        let scalarData: any[];

        // if getScalarData is a method on imageData
        if ((imageData as cornerstone.Types.CPUImageData).getScalarData) {
          // @ts-expect-error
          scalarData = imageData.getScalarData();
        } else {
          // @ts-expect-error
          scalarData = (imageData as vtkImageData).getPointData().getScalars().getData();
        }

        const max_d = Math.max(kMax - kMin, jMax - jMin, iMax - iMin);

        const values: any[] = [];

        let mean = 0;
        let max = -Infinity;
        let min = Infinity;

        const loop = (cb: (v: number, p: cornerstone.Types.Point3, idx: number) => void) => {
          for (let t = 0; t <= max_d; ++t) {
            const nt = t / max_d;
            const k = Math.floor(lerp(kMin, kMax, nt));
            const i = Math.floor(lerp(iMin, iMax, nt));
            const j = Math.floor(lerp(jMin, jMax, nt));
            const pointIJK: cornerstone.Types.Point3 = [i, j, k];
            const index = k * zMultiple + j * yMultiple + i;
            const value = scalarData[index];

            cb(value, pointIJK, t);
          }
        };

        loop((value, pointIJK, idx) => {
          // for (let k = kMin; k <= kMax; k++) {
          //   for (let j = jMin; j <= jMax; j++) {
          //     for (let i = iMin; i <= iMax; i++) {

          // const dI = i - iMin;
          // const dJ = j - jMin;
          // const dK = k - kMin;

          // const pointLPS: Types.Point3 = [
          //   startWorld[0] +
          //     dI * rowStep[0] +
          //     dJ * columnStep[0] +
          //     dK * scanAxisStep[0],
          //   startWorld[1] +
          //     dI * rowStep[1] +
          //     dJ * columnStep[1] +
          //     dK * scanAxisStep[1],
          //   startWorld[2] +
          //     dI * rowStep[2] +
          //     dJ * columnStep[2] +
          //     dK * scanAxisStep[2],
          // ];
          const world = imageData.indexToWorld?.(pointIJK);
          const length = this._calculateLength(worldPosStart, world);

          // if (pointInShapeFn(pointLPS, pointIJK)) {
          values.push({ y: value, x: length });
          mean += value;
          max = Math.max(max, value);
          min = Math.min(min, value);

          // callback({ value, index, pointIJK, pointLPS });
          // }
          //     }
          //   }
          // }
        });
        mean /= max_d;
        const mid = lerp(min, max, 0.5);

        let begin_idx = NaN;
        let end_idx = NaN;
        loop((value, pointIJK, idx) => {
          if (value > mid && Number.isNaN(begin_idx)) {
            begin_idx = idx;
          }
          if (value > mid && !Number.isNaN(begin_idx)) end_idx = idx;
        });
        const begin = values[begin_idx].x;
        const end = values[end_idx].x;
        const raw_thickness = end - begin;

        const thickness = raw_thickness * 0.42;
        // let raw_len =

        // const center = [
        //   (topLeftWorld[0] + bottomRightWorld[0]) / 2,
        //   (topLeftWorld[1] + bottomRightWorld[1]) / 2,
        //   (topLeftWorld[2] + bottomRightWorld[2]) / 2
        // ] as cornerstone.Types.Point3;

        // const ellipseObj = {
        //   center,
        //   xRadius: Math.abs(topLeftWorld[0] - bottomRightWorld[0]) / 2,
        //   yRadius: Math.abs(topLeftWorld[1] - bottomRightWorld[1]) / 2,
        //   zRadius: Math.abs(topLeftWorld[2] - bottomRightWorld[2]) / 2
        // };

        // const { worldWidth, worldHeight } = getWorldWidthAndHeightFromTwoPoints(
        //   viewPlaneNormal,
        //   viewUp,
        //   worldPos1,
        //   worldPos2
        // );
        // const isEmptyArea = worldWidth === 0 && worldHeight === 0;
        // const area = Math.abs(Math.PI * (worldWidth / 2) * (worldHeight / 2));

        // let count = 0,
        //   count_i1 = 0,
        //   count_i2 = 0;
        // let mean = 0,
        //   mean_i1 = 0,
        //   mean_i2 = 0;
        // let stdDev = 0,
        //   variance_i1 = 0,
        //   variance_i2 = 0;
        // let max = -Infinity;

        // // const meanMaxCalculator: PointInShapeCallback = ;

        // calc mean
        // pointInShapeCallback(
        //   imageData,
        //   (pointLPS) => pointInEllipse(ellipseObj, pointLPS),
        //   ({ value }) => {
        //     if (value > max) {
        //       max = value;
        //     }
        //     mean += value;
        //     count += 1;
        //   },
        //   boundsIJK
        // );
        // mean /= count;

        // // calc mean for i1 and i2 separated by mean
        // pointInShapeCallback(
        //   imageData,
        //   (pointLPS) => pointInEllipse(ellipseObj, pointLPS),
        //   ({ value }) => {
        //     if (value < mean) {
        //       mean_i1 += value;
        //       count_i1 += 1;
        //     } else {
        //       mean_i2 += value;
        //       count_i2 += 1;
        //     }
        //   },
        //   boundsIJK
        // );
        // mean_i1 /= count_i1;
        // mean_i2 /= count_i2;

        // const contrast = Math.abs((mean_i1 - mean_i2) / (mean_i1 + mean_i2));

        // // calc noise
        // pointInShapeCallback(
        //   imageData,
        //   (pointLPS) => pointInEllipse(ellipseObj, pointLPS),
        //   ({ value }) => {
        //     let valueMinusMean = value - mean;
        //     stdDev += valueMinusMean * valueMinusMean;

        //     valueMinusMean = value - mean_i1;
        //     variance_i1 += valueMinusMean * valueMinusMean;

        //     valueMinusMean = value - mean_i2;
        //     variance_i2 += valueMinusMean * valueMinusMean;
        //   },
        //   boundsIJK
        // );

        // stdDev /= count;
        // stdDev = Math.sqrt(stdDev);

        // variance_i1 /= count_i1;
        // // stdDev_i1 = Math.sqrt(stdDev_i1);

        // variance_i2 /= count_i2;
        // // stdDev_i2 = Math.sqrt(stdDev_i2);

        // const noise = (variance_i1 + variance_i2) / (mean_i1 * mean_i1 + mean_i2 * mean_i2);

        cachedStats[targetId] = {
          // Modality: metadata.Modality,
          // area,
          mid,
          values,
          mean,
          begin_idx,
          end_idx,
          begin,
          end,
          raw_thickness,
          thickness
          // // max,
          // stdDev,
          // // isEmptyArea,
          // noise,
          // x,
          // y,
          // mean_i1,
          // variance_i1,
          // mean_i2,
          // variance_i2,
          // // areaUnit: hasPixelSpacing ? 'mm' : 'px',
          // radius: worldWidth / 2,
          // // radiusUnit: hasPixelSpacing ? 'mm' : 'px',
          // // perimeter: 2 * Math.PI * (worldWidth / 2),
          // contrast
        };
      } else {
        this.isHandleOutsideImage = true;

        cachedStats[targetId] = {
          Modality: metadata.Modality
        };
      }
    }

    annotation.invalidated = false;

    // Dispatching annotation modified
    const eventType = Events.ANNOTATION_MODIFIED;

    const eventDetail: AnnotationModifiedEventDetail = {
      annotation,
      viewportId,
      renderingEngineId
    };

    triggerEvent(cornerstone.eventTarget, eventType, eventDetail);

    return cachedStats;
  }
}

SliceThicknessTool.toolName = 'SliceThickness';

export default SliceThicknessTool;
