import { getEnabledElement, type Types } from '@cornerstonejs/core';
import { BaseTool } from '@cornerstonejs/tools';
import type { InteractionEventType } from '@cornerstonejs/tools/dist/esm/types/EventTypes';
import vtkPiecewiseFunction from '@kitware/vtk.js/Common/DataModel/PiecewiseFunction';

export type onWindowFn = (wl: number, scale: number, arr: [number, number][]) => void;

export class SusTool extends BaseTool {
  static toolName = 'SusLevel';
  WL = 0;
  BASE_WL = 0;
  WW = 0;
  scale = 1;
  base: number[] = [];
  last: number[] = [];
  constructor(
    toolProps = {},
    defaultToolProps = {
      supportedInteractionTypes: ['Mouse', 'Touch']
    }
  ) {
    super(toolProps, defaultToolProps);
  }

  touchDragCallback(evt: InteractionEventType) {
    this.mouseDragCallback(evt);
  }

  triggerChangeCallback() {
    const { onChange } = this.configuration.configuration;
    onChange && onChange(this.WL + this.BASE_WL, this.scale, this.last);
  }

  public refresh(viewport: Types.IVolumeViewport) {
    const volumeActor = viewport.getDefaultActor().actor as Types.VolumeActor;

    const cur = volumeActor.getProperty().getScalarOpacity(0).getDataPointer();

    if (JSON.stringify(this.last) !== JSON.stringify(cur)) {
      this.base = cur;
      this.BASE_WL = 0;
      this.WW = 0;
      this.WL = 0;
      let d = 0;

      for (let i = 2; i < this.base.length; i += 2) {
        const cx = (this.base[i] + this.base[i - 2]) / 2;
        const dy = Math.abs(this.base[i - 1] - this.base[i + 1]);
        this.BASE_WL += cx * dy;
        d += dy;
      }
      this.BASE_WL /= d;
    }
    const fn = vtkPiecewiseFunction.newInstance();
    const points = [...this.base];

    this.scale = Math.pow(2, this.WW / 500);

    const arr = [];
    for (let i = 0; i < points.length; i += 2) {
      const x = (points[i] - this.BASE_WL) * this.scale + this.BASE_WL + this.WL;
      const y = points[i + 1];
      fn.addPoint(x, y);
      arr.push([x, y]);
    }

    volumeActor.getProperty().setScalarOpacity(0, fn);
    this.last = volumeActor.getProperty().getScalarOpacity(0).getDataPointer();
    this.triggerChangeCallback();
    viewport.render();
  }

  mouseDragCallback(evt: InteractionEventType) {
    const { element, deltaPoints } = evt.detail;
    const enabledElement = getEnabledElement(element);
    if (!enabledElement) throw Error("element doesn't exist");
    const { viewport } = enabledElement;

    this.WW += deltaPoints.canvas[0];
    this.WL += -deltaPoints.canvas[1];

    this.refresh(viewport as Types.IVolumeViewport);
  }
}

export default SusTool;
