/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Enums, type Types } from '@cornerstonejs/core';
import { cornerstoneTools } from '../helpers';
import { makeId } from '../utils';
import type { ViewerCore } from './core';
import type { SetToolBindingsType } from '@cornerstonejs/tools/dist/esm/types';
import {
  AuxiliaryBinding,
  createToolState,
  find2dPreset,
  PrimaryBinding,
  SecondaryBinding,
  type StackPreset,
  type ToolInfo,
  type ToolState
} from './utils';
import MinMaxWindowLevelTool from './tools/MinMaxWindowLevelTool';
import NamedCircleROITool from './tools/NamedCircleTool';
import SliceThicknessTool from './tools/SliceThicknessTool';
import { scroll } from '@cornerstonejs/tools/dist/esm/utilities';

const {
  PanTool,
  WindowLevelTool,
  StackScrollMouseWheelTool,
  ZoomTool,
  PlanarRotateTool,
  LengthTool,
  ProbeTool,
  RectangleROITool,
  EllipticalROITool,
  CircleROITool,
  BidirectionalTool,
  AngleTool,
  CobbAngleTool,
  ArrowAnnotateTool,
  PlanarFreehandROITool,
  Enums: csToolsEnums,
  utilities
} = cornerstoneTools;
const { ViewportType } = Enums;
const { MouseBindings } = csToolsEnums;

// [binding, toolName, toolConfig]

export const default_active_tools: [SetToolBindingsType, string][] = [
  [AuxiliaryBinding, WindowLevelTool.toolName],
  [PrimaryBinding, PanTool.toolName],
  [SecondaryBinding, ZoomTool.toolName]
];

export class Stack {
  stackViewportId: string | null = null;
  viewport: Types.IStackViewport;

  toolState: ToolState = {
    activeTools: new Map(default_active_tools.map(([bind, tool]) => [JSON.stringify(bind), tool]))
  };

  constructor(
    public core: ViewerCore,
    public element: HTMLDivElement,
    public used_tools: ToolInfo[] = [
      { toolName: WindowLevelTool.toolName },
      { toolName: MinMaxWindowLevelTool.toolName },
      { toolName: PanTool.toolName },
      { toolName: ZoomTool.toolName },
      { toolName: StackScrollMouseWheelTool.toolName, config: { loop: true } },
      { toolName: PlanarRotateTool.toolName },

      { toolName: LengthTool.toolName },
      { toolName: ProbeTool.toolName },
      { toolName: RectangleROITool.toolName },
      { toolName: EllipticalROITool.toolName },
      { toolName: CircleROITool.toolName },
      { toolName: NamedCircleROITool.toolName },
      { toolName: SliceThicknessTool.toolName },
      { toolName: BidirectionalTool.toolName },
      { toolName: AngleTool.toolName },
      { toolName: CobbAngleTool.toolName },
      { toolName: ArrowAnnotateTool.toolName },
      { toolName: PlanarFreehandROITool.toolName }
    ]
  ) {
    const id = makeId(10);
    this.toolState.toolGroupId = `STACK_TOOL_GROUP_ID${id}`;
    const viewportId = `CT_STACK${id}`;
    this.stackViewportId = viewportId;

    createToolState(this.toolState, used_tools);

    const viewportInput: Types.PublicViewportInput = {
      viewportId: viewportId,
      type: ViewportType.STACK,
      element,
      defaultOptions: {
        background: <Types.Point3>[0, 0, 0]
      }
    };
    this.core.renderingEngine.enableElement(viewportInput);
    this.viewport = this.core.renderingEngine.getViewport(viewportId) as Types.IStackViewport;
    this.toolState.toolGroup?.addViewport(viewportId, this.core.renderingEngineId);

    const idx = Math.floor(this.core.imageIds.length / 2);
    this.viewport.setStack(this.core.imageIds);
    this.setImageIdx(idx);
    // @ts-ignore
    this.viewport.targetImageIdIndex = idx;

    utilities.stackPrefetch.enable(element);
    new ResizeObserver(() => this.core.renderingEngine.resize()).observe(element);

    this.viewport.render();
  }

  toggleInvert() {
    const { invert } = this.viewport.getProperties();
    console.log(invert);

    this.viewport.setProperties({ invert: !invert });

    this.viewport.render();
  }
  flipH() {
    const { flipHorizontal } = this.viewport.getCamera();
    this.viewport.setCamera({ flipHorizontal: !flipHorizontal });

    this.viewport.render();
  }

  flipV() {
    const { flipVertical } = this.viewport.getCamera();

    this.viewport.setCamera({ flipVertical: !flipVertical });

    this.viewport.render();
  }

  rotateAbsolute() {
    this.viewport.setProperties({ rotation: 150 });
    this.viewport.render();
  }

  rotate(delta: number) {
    if (!this.stackViewportId) return;

    // Get the stack viewport
    const viewport = <Types.IStackViewport>(
      this.core.renderingEngine.getViewport(this.stackViewportId)
    );

    const { rotation } = viewport.getProperties();
    viewport.setProperties({ rotation: (rotation || 0) + delta });

    viewport.render();
  }

  resetViewport() {
    this.viewport.resetCamera();
    this.viewport.resetProperties();
    this.viewport.render();
  }

  setImageIdx(idx: number) {
    this.viewport.setImageIdIndex(idx);
  }

  scroll(delta: number) {
    scroll(this.viewport, {
      delta,
      debounceLoading: true,
      loop: true
    });
  }
}
