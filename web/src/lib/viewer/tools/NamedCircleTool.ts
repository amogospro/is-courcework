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
import type { PointInShapeCallback } from '@cornerstonejs/tools/src/utilities/pointInShapeCallback';
import { distanceToPoint } from '@cornerstonejs/tools/src/utilities/math/point';
// const {} = cornerstone
const { CircleROITool, annotation, utilities, Types } = cornerstoneTools;

const { pointInShapeCallback, throttle, triggerEvent, math, planar } = utilities;
// const { transformWorldToIndex } = csUtils;

// const {Events} = cornerstone
const { ellipse } = math;
const { pointInEllipse } = ellipse;
// const {} = utilities
// const {getWorldWidthAndHeightFromTwoPoints} =planar
class NamedCircleROITool extends CircleROITool {
  constructor(
    toolProps: PublicToolProps = {},
    defaultToolProps: ToolProps = {
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {
        shadow: true,
        preventHandleOutsideImage: false,
        // Radius of the circle to draw  at the center point of the circle.
        // Set this zero(0) in order not to draw the circle.
        centerPointRadius: 0
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
      const { viewport } = enabledElement;
      const { element } = viewport;
      let annotations = annotation.state.getAnnotations(this.getToolName(), element);

      if (!annotations?.length) {
        return renderStatus;
      }

      annotations = this.filterInteractableAnnotationsForElement(element, annotations) || [];

      if (!annotations?.length) {
        return renderStatus;
      }

      for (let i = 0; i < annotations?.length; i++) {
        const annotation = annotations[i] as CircleROIAnnotation;
        const { annotationUID, data } = annotation;
        const { handles } = data;
        const { points, name } = handles as any;
        const center = viewport.worldToCanvas(points[0]);
        const other = viewport.worldToCanvas(points[1]);
        const r = distanceToPoint(center, other);
        const textBoxUID = '666';
        drawTextBox(
          svgDrawingHelper,
          // @ts-ignore
          annotationUID,
          textBoxUID,
          [name || '?'],
          [center[0] + 10 + r * 0.8, center[1] - 20 - r * 0.5],
          {
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '14px',
            color: '#ff5555',
            background: '',
            padding: 0,
            centerX: true,
            centerY: true
          }
        );
      }

      renderStatus = old(enabledElement, svgDrawingHelper);
      return renderStatus;
    };
  }
  override _getTextLines = () => [];

  override _calculateCachedStats = (
    annotation: any,
    viewport: cornerstone.Types.IViewport,
    renderingEngine: cornerstone.Types.IRenderingEngine,
    enabledElement: cornerstone.Types.IEnabledElement
  ) => {
    // console.log('calc stats', new Date().toTimeString(), annotation);
    // const res = old_calculateCachedStats(annotation, viewport, renderingEngine, enabledElement);
    // return res;
    const data = annotation.data;
    const { viewportId, renderingEngineId } = enabledElement;

    const { points } = data.handles;

    const x = points[0][0];
    const y = points[0][1];
    console.log(x, y);
    const canvasCoordinates = points.map((p: any) => viewport.worldToCanvas(p));
    const { viewPlaneNormal, viewUp } = viewport.getCamera();
    if (!viewPlaneNormal || !viewUp) throw new Error('viewPlaneNormal or viewUp is undefined');

    const [topLeftCanvas, bottomRightCanvas] = <Array<cornerstone.Types.Point2>>(
      getCanvasCircleCorners(canvasCoordinates)
    );
    // const x = canvasCoordinates[0][0];
    // const y = canvasCoordinates[0][1];

    const topLeftWorld = viewport.canvasToWorld(topLeftCanvas);
    const bottomRightWorld = viewport.canvasToWorld(bottomRightCanvas);

    // calculate area
    const diagPixels = (Math.sqrt(
      Math.pow(bottomRightCanvas[0] - topLeftCanvas[0], 2) +
        Math.pow(bottomRightCanvas[1] - topLeftCanvas[1], 2)
    ));

    const diagMm = Math.sqrt(
      Math.pow(bottomRightWorld[0] - topLeftWorld[0], 2) +
        Math.pow(bottomRightWorld[1] - topLeftWorld[1], 2) +
        Math.pow(bottomRightWorld[2] - topLeftWorld[2], 2)
    );

    const diameterPixels = Math.sqrt((Math.pow(diagPixels, 2) / 2))
    const diameterMm = Math.sqrt((Math.pow(diagMm, 2) / 2))

    // Convert diameter from mm to cm
    const diameterCm = diameterMm / 10;

    // Calculate area in pixels
    const areaPixels = Math.PI * Math.pow(diameterPixels / 2, 2);

    // Calculate area in cm²
    const areaCm = Math.PI * Math.pow(diameterCm / 2, 2);

    const { cachedStats } = data;

    const targetIds = Object.keys(cachedStats);
    const worldPos1 = topLeftWorld;
    const worldPos2 = bottomRightWorld;

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
        const iMin = Math.min(worldPos1Index[0], worldPos2Index[0]);
        const iMax = Math.max(worldPos1Index[0], worldPos2Index[0]);

        const jMin = Math.min(worldPos1Index[1], worldPos2Index[1]);
        const jMax = Math.max(worldPos1Index[1], worldPos2Index[1]);

        const kMin = Math.min(worldPos1Index[2], worldPos2Index[2]);
        const kMax = Math.max(worldPos1Index[2], worldPos2Index[2]);

        const boundsIJK = [
          [iMin, iMax],
          [jMin, jMax],
          [kMin, kMax]
        ] as [cornerstone.Types.Point2, cornerstone.Types.Point2, cornerstone.Types.Point2];

        const center = [
          (topLeftWorld[0] + bottomRightWorld[0]) / 2,
          (topLeftWorld[1] + bottomRightWorld[1]) / 2,
          (topLeftWorld[2] + bottomRightWorld[2]) / 2
        ] as cornerstone.Types.Point3;

        const ellipseObj = {
          center,
          xRadius: Math.abs(topLeftWorld[0] - bottomRightWorld[0]) / 2,
          yRadius: Math.abs(topLeftWorld[1] - bottomRightWorld[1]) / 2,
          zRadius: Math.abs(topLeftWorld[2] - bottomRightWorld[2]) / 2
        };

        const { worldWidth, worldHeight } = getWorldWidthAndHeightFromTwoPoints(
          viewPlaneNormal,
          viewUp,
          worldPos1,
          worldPos2
        );
        const isEmptyArea = worldWidth === 0 && worldHeight === 0;
        const area = Math.abs(Math.PI * (worldWidth / 2) * (worldHeight / 2));

        let count = 0,
          count_i1 = 0,
          count_i2 = 0;
        let mean = 0,
          mean_i1 = 0,
          mean_i2 = 0;
        let stdDev = 0,
          variance_i1 = 0,
          variance_i2 = 0;
        let max = -Infinity;
        let min = Infinity;

        // const meanMaxCalculator: PointInShapeCallback = ;

        // calc mean
        pointInShapeCallback(
          imageData,
          (pointLPS) => pointInEllipse(ellipseObj, pointLPS),
          ({ value }) => {
            if (value > max) {
              max = value;
            }
            if (value < min) {
              min = value;
            }
            mean += value;
            count += 1;
          },
          boundsIJK
        );
        mean /= count;

        // calc mean for i1 and i2 separated by mean
        pointInShapeCallback(
          imageData,
          (pointLPS) => pointInEllipse(ellipseObj, pointLPS),
          ({ value }) => {
            if (value < mean) {
              mean_i1 += value;
              count_i1 += 1;
            } else {
              mean_i2 += value;
              count_i2 += 1;
            }
          },
          boundsIJK
        );
        mean_i1 /= count_i1;
        mean_i2 /= count_i2;

        const contrast = Math.abs((mean_i1 - mean_i2) / (mean_i1 + mean_i2));

        // calc noise
        pointInShapeCallback(
          imageData,
          (pointLPS) => pointInEllipse(ellipseObj, pointLPS),
          ({ value }) => {
            let valueMinusMean = value - mean;
            stdDev += valueMinusMean * valueMinusMean;

            valueMinusMean = value - mean_i1;
            variance_i1 += valueMinusMean * valueMinusMean;

            valueMinusMean = value - mean_i2;
            variance_i2 += valueMinusMean * valueMinusMean;
          },
          boundsIJK
        );

        stdDev /= count;
        stdDev = Math.sqrt(stdDev);

        variance_i1 /= count_i1;
        // stdDev_i1 = Math.sqrt(stdDev_i1);

        variance_i2 /= count_i2;
        // stdDev_i2 = Math.sqrt(stdDev_i2);

        const noise = (variance_i1 + variance_i2) / (mean_i1 * mean_i1 + mean_i2 * mean_i2);
        console.log(area, hasPixelSpacing ? 'mm' : 'px');
        cachedStats[targetId] = {
          // Modality: metadata.Modality,
          area,
          mean,
          max,
          min,
          stdDev,
          // isEmptyArea,
          noise,
          x,
          y,
          mean_i1,
          variance_i1,
          mean_i2,
          variance_i2,
          areaUnit: hasPixelSpacing ? 'mm' : 'px',
          radius: worldWidth / 2,
          areaPixels,
          areaCm,
          // radiusUnit: hasPixelSpacing ? 'mm' : 'px',
          // perimeter: 2 * Math.PI * (worldWidth / 2),
          contrast
        };
      } else {
        this.isHandleOutsideImage = true;

        cachedStats[targetId] = {
          Modality: metadata.Modality,
          x,
          y
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
  };
}

NamedCircleROITool.toolName = 'NamedCircleROI';

export default NamedCircleROITool;
