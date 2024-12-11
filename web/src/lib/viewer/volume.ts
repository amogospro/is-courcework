import { Enums, type Types, utilities as csUtilities } from '@cornerstonejs/core';
import { cornerstoneTools } from '../helpers';
import { SusTool } from '../sus_tool';
import { makeId } from '../utils';
import type { ViewerCore } from './core';
import {
  createToolState,
  find3dPreset,
  updateVolume,
  type ToolInfo,
  type ToolState,
  AuxiliaryBinding,
  PrimaryBinding,
  SecondaryBinding
} from './utils';
import type { SetToolBindingsType } from '@cornerstonejs/tools/dist/esm/types';
const {
  TrackballRotateTool,
  ZoomTool,
  Enums: csToolsEnums
} = cornerstoneTools;
const { ViewportType } = Enums;
const { MouseBindings } = csToolsEnums;

export const default_active_tools: [SetToolBindingsType, string][] = [
  [AuxiliaryBinding, SusTool.toolName],
  [PrimaryBinding, TrackballRotateTool.toolName],
  [SecondaryBinding, ZoomTool.toolName]
];

export class Volume {
  viewport: Types.IVolumeViewport | null = null;
  viewportId: string;

  toolState: ToolState = {
    toolGroup: undefined,
    activeTools: new Map(default_active_tools.map(([bind, tool]) => [JSON.stringify(bind), tool]))
  };

  constructor(public core: ViewerCore, public element: HTMLDivElement, public volumeId: string) {
    const id = makeId(10);

    this.viewportId = `3D_VIEWPORT${id}`;
    this.toolState.toolGroupId = `TOOL_GROUP_ID${id}`;

    const used_tools: ToolInfo[] = [
      {
        toolName: TrackballRotateTool.toolName,
        config: {
          configuration: { volumeId }
        }
      },
      {
        toolName: SusTool.toolName,
        config: {
          configuration: {
            volumeId,
            onChange: this.core.onWindow
          }
        }
      },
      { toolName: ZoomTool.toolName }
    ];
    createToolState(this.toolState, used_tools);

    this.init(volumeId, this.element);
  }
  async init(volumeId: string, element: HTMLDivElement) {
    const viewportInputArray: Types.PublicViewportInput = {
      viewportId: this.viewportId,
      type: ViewportType.VOLUME_3D,
      element,
      defaultOptions: {
        orientation: Enums.OrientationAxis.CORONAL,
        background: <Types.Point3>[0.2, 0, 0.2]
      }
    };
    this.core.renderingEngine.enableElement(viewportInputArray);

    this.toolState.toolGroup?.addViewport(this.viewportId, this.core.renderingEngineId);
    this.viewport = this.core.renderingEngine.getViewport(
      this.viewportId
    ) as Types.IVolumeViewport;

    await updateVolume(volumeId, this.core.renderingEngine, [this.viewportId]);

    this.selectPreset('CT-Bone');

    this.core.renderingEngine.render();
    new ResizeObserver(() => this.core.renderingEngine.resize()).observe(element);
  }

  selectPreset(presetName: string) {
    const volumeActor = this.viewport?.getDefaultActor().actor as Types.VolumeActor | undefined;
    if (!volumeActor) throw new Error('no actor');

    const preset = find3dPreset(presetName);
    csUtilities.applyPreset(volumeActor, preset);

    // this.toolState.toolGroup?.getToolInstance(SusTool.toolName).refresh(this.viewport);
    this.core.renderingEngine.render();
  }
}
