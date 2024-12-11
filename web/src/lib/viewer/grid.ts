import { Enums, type Types, getEnabledElement } from '@cornerstonejs/core';
import { cornerstoneTools } from '../helpers';
import { makeId } from '../utils';
import type { ViewerCore } from './core';
import {
  updateVolume,
  type ToolState,
  createToolState,
  type ToolInfo,
  AuxiliaryBinding,
  SecondaryBinding,
  PrimaryBinding
} from './utils';
import type { SetToolBindingsType } from '@cornerstonejs/tools/dist/esm/types';
import MinMaxWindowLevelTool from './tools/MinMaxWindowLevelTool';
import type { IViewport } from '@cornerstonejs/core/dist/types/types';
import SusCrosshairsTool from './tools/SusCrosshairsTool';
import SusTool from '$lib/sus_tool';
const {
  PanTool,
  WindowLevelTool,
  StackScrollMouseWheelTool,
  ZoomTool,
  PlanarRotateTool,
  ToolGroupManager,
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
  TrackballRotateTool,
  Enums: csToolsEnums
} = cornerstoneTools;
const { ViewportType } = Enums;
const { MouseBindings } = csToolsEnums;

export const default_active_tools: [SetToolBindingsType, string][] = [
  [AuxiliaryBinding, WindowLevelTool.toolName],
  [PrimaryBinding, PanTool.toolName],
  [SecondaryBinding, ZoomTool.toolName]
];
export const default_volume_active_tools: [SetToolBindingsType, string][] = [
  [AuxiliaryBinding, SusTool.toolName],
  [PrimaryBinding, TrackballRotateTool.toolName],
  [SecondaryBinding, ZoomTool.toolName]
];

export class Grid {
  allViewportIds: string[];
  gridViewportIds: string[];
  volumeViewportIds: string[];
  // viewports: IViewport[];
  viewportColors: Record<string, string> = {};
  viewportReferenceLineControllable: string[] = [];
  viewportReferenceLineDraggableRotatable: string[] = [];
  viewportReferenceLineSlabThicknessControlsOn: string[] = [];

  toolState: ToolState = {
    activeTools: new Map(default_active_tools.map(([bind, tool]) => [JSON.stringify(bind), tool]))
  };

  volumeToolState: ToolState = {
    activeTools: new Map(
      default_volume_active_tools.map(([bind, tool]) => [JSON.stringify(bind), tool])
    )
  };

  getReferenceLineColor(viewportId: string) {
    return this.viewportColors[viewportId];
  }

  getReferenceLineControllable(viewportId: string) {
    const index = this.viewportReferenceLineControllable.indexOf(viewportId);
    return index !== -1;
  }

  getReferenceLineDraggableRotatable(viewportId: string) {
    const index = this.viewportReferenceLineDraggableRotatable.indexOf(viewportId);
    return index !== -1;
  }

  getReferenceLineSlabThicknessControlsOn(viewportId: string) {
    const index = this.viewportReferenceLineSlabThicknessControlsOn.indexOf(viewportId);
    return index !== -1;
  }
  toggleAxis(enable: boolean) {
    if (this.gridViewportIds) {
      if (enable) {
        this.viewportColors = {
          [this.gridViewportIds[0]]: '#f1d81c',
          [this.gridViewportIds[1]]: '#0353e9',
          [this.gridViewportIds[2]]: '#ff3d89'
        };

        this.viewportReferenceLineControllable = this.gridViewportIds.slice(0, 3);
        this.viewportReferenceLineDraggableRotatable = this.gridViewportIds.slice(0, 3);
        this.viewportReferenceLineSlabThicknessControlsOn = this.gridViewportIds.slice(0, 3);
      } else {
        this.viewportColors = {
          [this.gridViewportIds[0]]: '#0000',
          [this.gridViewportIds[1]]: '#0000',
          [this.gridViewportIds[2]]: '#0000'
        };
        this.viewportReferenceLineControllable = [];
        this.viewportReferenceLineDraggableRotatable = [];
        this.viewportReferenceLineSlabThicknessControlsOn = [];
      }
      this.core.renderingEngine.render();
    }
  }

  constructor(public core: ViewerCore, public elements: HTMLDivElement[], public volumeId: string) {
    const id = makeId(10);
    this.gridViewportIds = [
      `GRID_VIEWPORT_0_${id}`,
      `GRID_VIEWPORT_1_${id}`,
      `GRID_VIEWPORT_2_${id}`
    ];
    this.volumeViewportIds = [`GRID_VIEWPORT_3_${id}`];
    this.allViewportIds = [...this.gridViewportIds, ...this.volumeViewportIds];

    // Create the viewports
    const viewportInputArray: Types.PublicViewportInput[] = [
      {
        viewportId: this.allViewportIds[0],
        type: ViewportType.ORTHOGRAPHIC,
        element: this.elements[0],
        defaultOptions: {
          orientation: Enums.OrientationAxis.AXIAL,
          background: <Types.Point3>[0, 0, 0]
        }
      },
      {
        viewportId: this.allViewportIds[1],
        type: ViewportType.ORTHOGRAPHIC,
        element: this.elements[1],
        defaultOptions: {
          orientation: Enums.OrientationAxis.SAGITTAL,
          background: <Types.Point3>[0, 0, 0]
        }
      },
      {
        viewportId: this.allViewportIds[2],
        type: ViewportType.ORTHOGRAPHIC,
        element: this.elements[2],
        defaultOptions: {
          orientation: Enums.OrientationAxis.CORONAL,
          background: <Types.Point3>[0, 0, 0]
        }
      },
      {
        viewportId: this.allViewportIds[3],
        type: ViewportType.VOLUME_3D,
        element: this.elements[3],
        defaultOptions: {
          orientation: Enums.OrientationAxis.CORONAL,
          background: <Types.Point3>[0.0, 0, 0.0]
        }
      }
    ];

    viewportInputArray.forEach((element) => this.core.renderingEngine.enableElement(element));

    // grid viewports
    const used_tools: ToolInfo[] = [
      { toolName: StackScrollMouseWheelTool.toolName },
      { toolName: ZoomTool.toolName },
      { toolName: PlanarRotateTool.toolName },
      { toolName: WindowLevelTool.toolName },
      { toolName: MinMaxWindowLevelTool.toolName },
      { toolName: PanTool.toolName },
      { toolName: LengthTool.toolName },
      { toolName: ProbeTool.toolName },
      { toolName: RectangleROITool.toolName },
      { toolName: EllipticalROITool.toolName },
      { toolName: CircleROITool.toolName },
      { toolName: BidirectionalTool.toolName },
      { toolName: AngleTool.toolName },
      { toolName: CobbAngleTool.toolName },
      { toolName: ArrowAnnotateTool.toolName },
      { toolName: PlanarFreehandROITool.toolName },
      {
        toolName: SusCrosshairsTool.toolName,
        config: {
          getReferenceLineColor: (viewportId: string) => this.getReferenceLineColor(viewportId),
          getReferenceLineControllable: (viewportId: string) =>
            this.getReferenceLineControllable(viewportId),
          getReferenceLineDraggableRotatable: (viewportId: string) =>
            this.getReferenceLineDraggableRotatable(viewportId),
          getReferenceLineSlabThicknessControlsOn: (viewportId: string) =>
            this.getReferenceLineSlabThicknessControlsOn(viewportId),
          mobile: {
            enabled: window.matchMedia('(any-pointer:coarse)').matches,
            opacity: 0.8,
            handleRadius: 9
          },
          viewportIndicators: false
        }
      }
    ];
    this.toolState.toolGroupId = `GRID_TOOL_GROUP_ID_${id}`;
    this.toolState.toolGroup = ToolGroupManager.createToolGroup(this.toolState.toolGroupId);
    this.gridViewportIds.forEach((viewportId) =>
      this.toolState.toolGroup?.addViewport(viewportId, this.core.renderingEngineId)
    );

    createToolState(this.toolState, used_tools);
    this.toolState.toolGroup?.setToolActive(SusCrosshairsTool.toolName, {
      bindings: [{ mouseButton: MouseBindings.Primary }]
    });
    this.toolState.toolGroup?.setToolPassive(SusCrosshairsTool.toolName);

    // volume viewports
    const used_volume_tools: ToolInfo[] = [
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
    this.volumeToolState.toolGroupId = `GRID_VOLUME_TOOL_GROUP_ID_${id}`;
    this.volumeToolState.toolGroup = ToolGroupManager.createToolGroup(
      this.volumeToolState.toolGroupId
    );
    this.volumeViewportIds.forEach((viewportId) =>
      this.volumeToolState.toolGroup?.addViewport(viewportId, this.core.renderingEngineId)
    );

    createToolState(this.volumeToolState, used_volume_tools);
    // this.toolState.toolGroup?.setToolPassive(SusCrosshairsTool.toolName);

    // this.viewports = viewportIds.map((viewportId) =>
    //   this.amogus.renderingEngine.getViewport(viewportId)
    // );

    // this.viewports.forEach((viewport) => {
    //   this.amogus.addViewPort(viewport.element, viewport);
    // });
    this.toggleAxis(true);

    this.init();
  }
  async init() {
    await updateVolume(this.volumeId, this.core.renderingEngine, this.allViewportIds);

    // Render the image
    this.core.renderingEngine.renderViewports(this.allViewportIds);
    this.gridViewportIds.map((viewportId) => {
      const viewport = this.core.renderingEngine.getViewport(viewportId);
      const { focalPoint } = viewport.getCamera();
      if (!focalPoint) {
        console.warn('no focalPoint');
        return;
      }
    });
    const ro = new ResizeObserver(() => this.core.renderingEngine.resize());
    this.elements.forEach((element) => ro.observe(element));

    // console.log(getEnabledElement(this.elements[0])?.FrameOfReferenceUID);

    this.core.select3dPreset(this.allViewportIds[3], 'CT-Bone');
  }
}
