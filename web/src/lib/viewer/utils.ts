import { vec3 } from 'gl-matrix';
import { RenderingEngine, setVolumesForViewports, type Types } from '@cornerstonejs/core';
import { CONSTANTS, utilities as csUtils } from '@cornerstonejs/core';
import type { IToolGroup } from '@cornerstonejs/tools/dist/esm/types';
import { cornerstoneTools } from '../helpers';
import type { SplitOptions } from 'split-grid';
import { OrientationAxis } from '@cornerstonejs/core/src/enums';

const {
  StackScrollMouseWheelTool,
  ToolGroupManager,
  LengthTool,
  ProbeTool,
  RectangleROITool,
  EllipticalROITool,
  Enums: csToolsEnums,
  utilities
} = cornerstoneTools;
// const { ViewportType } = Enums;
const { MouseBindings } = csToolsEnums;
const { transformWorldToIndex } = csUtils;

export const find3dPreset = (presetName: string) => {
  const preset = CONSTANTS.VIEWPORT_PRESETS.find((preset) => preset.name === presetName);
  if (!preset) throw Error('cannot find preset');
  return preset;
};

export interface StackPreset {
  name: string;
  ww: number;
  wl: number;
}

export const STACK_PRESETS: StackPreset[] = [
  { name: 'head and neck brain', ww: 80, wl: 40 },
  { name: 'head and neck subdural', ww: 200, wl: 75 },
  { name: 'head and neck stroke 1', ww: 8, wl: 32 },
  { name: 'head and neck stroke 2', ww: 40, wl: 40 },
  { name: 'head and neck temporal bones 1', ww: 2800, wl: 600 },
  { name: 'head and neck temporal bones 2', ww: 4000, wl: 700 },
  { name: 'head and neck soft tissue', ww: 350, wl: 40 },
  { name: 'chest lungs', ww: 1500, wl: -600 },
  { name: 'chest mediastinum', ww: 350, wl: 50 },
  { name: 'abdomen soft tissues', ww: 400, wl: 50 },
  { name: 'abdomen liver', ww: 150, wl: 30 },
  { name: 'spine soft tissues', ww: 250, wl: 50 },
  { name: 'spine bone', ww: 1800, wl: 400 }
];

export const find2dPreset = (presetName: string) => {
  const preset = STACK_PRESETS.find((preset) => preset.name === presetName);
  if (!preset) throw Error('cannot find preset');
  return preset;
};

export const updateVolume = async (
  volumeId: string,
  renderingEngine: RenderingEngine,
  viewportIds: string[]
) => {
  await setVolumesForViewports(renderingEngine, [{ volumeId }], viewportIds);
  viewportIds.forEach((viewportId) => {
    const viewport = renderingEngine.getViewport(viewportId);
    viewport.render();
  });
};

export type ViewType = '2d' | '3d' | 'grid';

type Line = [Types.Point3, Types.Point3];

/**
 * It returns the angle between two lines in degrees.
 * @param line1 - Line = [p1, p2]
 * @param line2 - Line = [p3, p4]
 * @returns The angle between two lines in degrees.
 */
export default function angleBetweenLines(line1: Line, line2: Line): number {
  const [p1, p2] = line1;
  const [p3, p4] = line2;

  const v1 = vec3.sub(vec3.create(), p2, p1);
  const v2 = vec3.sub(vec3.create(), p3, p4);

  const dot = vec3.dot(v1, v2);

  const v1Length = vec3.length(v1);
  const v2Length = vec3.length(v2);

  const cos = dot / (v1Length * v2Length);

  const radian = Math.acos(cos);

  return (radian * 180) / Math.PI;
}

export interface ToolInfo {
  toolName: string;
  config?: any | undefined;
}

export interface ToolState {
  toolGroupId?: string;
  toolGroup?: IToolGroup;
  activeTools: Map<string, string>;
}

const fixTool = (tool: any) => {
  const old = tool._getTextLines;
  console.log('sus');
  console.log(old);
  tool._getTextLines = () => {
    const res: string[] = [];
    return res;
  };
};

export const createToolState = (toolState: ToolState, tools: ToolInfo[]) => {
  if (tools.length > 0) {
    if (!toolState.toolGroupId) throw Error('no tool group id');
    if (!toolState.toolGroup)
      toolState.toolGroup = ToolGroupManager.createToolGroup(toolState.toolGroupId);
    if (!toolState.toolGroup) throw Error('failed to create tool group');

    tools.forEach(({ toolName, config }) => {
      if (config) {
        toolState.toolGroup?.addTool(toolName, config);
      } else {
        toolState.toolGroup?.addTool(toolName);
      }
    });

    toolState.activeTools.forEach((tool, bind) => {
      toolState.toolGroup?.setToolActive(tool, JSON.parse(bind));
    });

    toolState.toolGroup.setToolActive(StackScrollMouseWheelTool.toolName);
    // toolState.toolGroup.setToolActive(SusCrosshairsTool.toolName);
  }
};

export interface GridLayout {
  name: string;
  split_options: SplitOptions;
  style: string;

  handle_1_style: string;
  handle_2_style: string;
  handle_3_style: string;

  element_1_style: string;
  element_2_style: string;
  element_3_style: string;
  element_4_style: string;
}

export type Preset2d = {
  id: number;
  text: string;
  name: string;
  wl: number;
  ww: number;
  custom: boolean;
};
export const AuxiliaryBinding = {
  bindings: [
    {
      mouseButton: MouseBindings.Auxiliary
    }
  ]
};

export const PrimaryBinding = {
  bindings: [
    {
      mouseButton: MouseBindings.Primary
    }
  ]
};

export const SecondaryBinding = {
  bindings: [
    {
      mouseButton: MouseBindings.Secondary
    }
  ]
};

// Superior - Краниальное (Голова);
// Inferior - Каудальное (Ноги);
// Anterior  - Вентральное (Живот);
// Posterior - Дорсальное (Спина);
// Left - Левое;
// Right - Правое.
export const ORIENTATION_MAP = {
  l: 'Левое',
  r: 'Правое',
  a: 'Вентральное',
  p: 'Дорсальное',
  s: 'Краниальное',
  i: 'Каудальное'
};

export const ORIENTATIONS: Record<
  string,
  { display: string; color: string; u: string; b: string; l: string; r: string }
> = {
  [OrientationAxis.AXIAL]: {
    display: 'Аксиальный',
    color: '#f1d81c',
    u: ORIENTATION_MAP.a,
    b: ORIENTATION_MAP.p,
    l: ORIENTATION_MAP.r,
    r: ORIENTATION_MAP.l
  },
  [OrientationAxis.SAGITTAL]: {
    display: 'Сагиттальный',
    color: '#0353e9',
    u: ORIENTATION_MAP.s,
    b: ORIENTATION_MAP.i,
    l: ORIENTATION_MAP.a,
    r: ORIENTATION_MAP.p
  },
  [OrientationAxis.CORONAL]: {
    display: 'Корональный',
    color: '#ff3d89',
    u: ORIENTATION_MAP.s,
    b: ORIENTATION_MAP.i,
    l: ORIENTATION_MAP.r,
    r: ORIENTATION_MAP.l
  },
  [OrientationAxis.ACQUISITION]: {
    display: 'ACQUISITION',
    color: '#ff5555',
    u: '?',
    b: '?',
    l: '?',
    r: '?'
  }
};

export const MEASUREMENT_TOOLS = [LengthTool, EllipticalROITool, RectangleROITool].map(
  (item) => item.toolName
);
