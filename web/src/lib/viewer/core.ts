/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { StackPreset, ToolState, ViewType } from './utils';
import { EventEmitter } from 'events';
import { init as ainit } from './processing';
import {
  RenderingEngine,
  volumeLoader,
  init,
  type Types,
  BaseVolumeViewport,
  utilities as csUtilities,
  CONSTANTS
} from '@cornerstonejs/core';
import { initDemo, cornerstoneTools } from '../helpers';
import { SusTool, type onWindowFn } from '../sus_tool';
import { makeId, notEmpty, type Settings } from '../utils';
import { Stack } from './stack';
import { Volume } from './volume';
import { Grid } from './grid';
import { vec3 } from 'gl-matrix';
import type {
  IToolBinding,
  IToolGroup,
  SetToolBindingsType
} from '@cornerstonejs/tools/dist/esm/types';
import angleBetweenLines, { MEASUREMENT_TOOLS, find2dPreset, find3dPreset } from './utils';
import MinMaxWindowLevelTool from './tools/MinMaxWindowLevelTool';
import removeInvalidTags from '$lib/helpers/removeInvalidTags';
// @ts-ignore
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
// @ts-ignore
import dcmjs from 'dcmjs';
import SusCrosshairsTool from './tools/SusCrosshairsTool';
import NamedCircleROITool from './tools/NamedCircleTool';
import SliceThicknessTool from './tools/SliceThicknessTool';
import _ from 'lodash';

const { DicomMetaDictionary } = dcmjs.data;

const {
  PanTool,
  WindowLevelTool,
  StackScrollMouseWheelTool,
  TrackballRotateTool,
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
  annotation
} = cornerstoneTools;
const { MouseBindings } = csToolsEnums;

await init();
await initDemo();
ainit();

export const Events = {
  STACK_CREATED: 'CORE_STACK_CREATED',
  VOLUME_CREATED: 'CORE_VOLUME_CREATED',
  GRID_CREATED: 'CORE_GRID_INIT',
  TOOL_SET: 'CORE_TOOL_SET'
};

export class ViewerCore {
  id: string;
  renderingEngineId: string;
  renderingEngine: RenderingEngine;
  imageIds: string[];
  // metadata of first image id
  metadata: any | null = null;
  rawInstanceMetaData: any | null = null;
  instanceMetaData: any | null = null;
  volumeLoaderScheme = `cornerstoneStreamingImageVolume`;

  volumeName: string | null = null;
  volumeId: string | null = null;
  volume: any | null = null;

  stack_view: Stack | null = null;
  volume_view: Volume | null = null;
  grid_view: Grid | null = null;

  activeViewPort: Types.IViewport | null = null;

  presets = CONSTANTS.VIEWPORT_PRESETS.map((preset, idx) => ({ id: idx, text: preset.name }));
  onWindow: onWindowFn | null = null;

  emitter = new EventEmitter();

  view: ViewType = '2d';

  constructor(imageIds: string[], public settings: Settings) {
    // Init tools
    const required_tools = [
      PanTool,
      WindowLevelTool,
      MinMaxWindowLevelTool,
      StackScrollMouseWheelTool,
      ZoomTool,
      PlanarRotateTool,
      SusTool,
      TrackballRotateTool,
      SusCrosshairsTool,
      LengthTool,
      ProbeTool,
      RectangleROITool,
      EllipticalROITool,
      NamedCircleROITool,
      SliceThicknessTool,
      CircleROITool,
      BidirectionalTool,
      AngleTool,
      CobbAngleTool,
      ArrowAnnotateTool,
      PlanarFreehandROITool
    ];

    required_tools.forEach((tool) => {
      if (!cornerstoneTools.state.tools[tool.toolName]) {
        cornerstoneTools.addTool(tool);
      }
    });

    // Init rendering engine
    this.id = makeId(10);
    this.renderingEngineId = `core_rendering_engine_${this.id}`;
    this.renderingEngine = new RenderingEngine(this.renderingEngineId);

    // Init self data;
    this.imageIds = imageIds;

    const imageId = imageIds[0];
    const rawInstanceMetaData = cornerstoneDICOMImageLoader.wadors.metaDataManager.get(imageId);
    this.rawInstanceMetaData = rawInstanceMetaData;
    if (!rawInstanceMetaData) return;
    const instanceMetaData = removeInvalidTags(rawInstanceMetaData);
    this.instanceMetaData = instanceMetaData;
    this.metadata = DicomMetaDictionary.naturalizeDataset(instanceMetaData);
  }

  // addViewPort(element: HTMLElement, viewport: Types.IViewport) {
  //   element.addEventListener('mousedown', () => {
  //     this.activeViewPort = viewport;
  //   });
  // }

  generateVolumeId() {
    const id = makeId(10);
    const volumeName = `CT_VOLUME_ID_${id}`; // Id of the volume less loader prefix
    const volumeId = `${this.volumeLoaderScheme}:${volumeName}`; // VolumeId with loader id +
    return volumeId;
  }
  async initVolume() {
    if (this.volumeId) {
      return this.volumeId;
    }

    this.volumeId = this.generateVolumeId();

    this.volume = await volumeLoader.createAndCacheVolume(this.volumeId, {
      imageIds: this.imageIds
    });
    this.volume.load();

    return this.volumeId;
  }

  createStack(element: HTMLDivElement) {
    console.log('stack created');
    this.stack_view = new Stack(this, element);
    this.emitter.emit(Events.STACK_CREATED);
  }

  async createVolume(element: HTMLDivElement) {
    const volumeId = await this.initVolume();

    this.volume_view = new Volume(this, element, volumeId);
    this.emitter.emit(Events.VOLUME_CREATED);
  }

  async createGrid(elements: HTMLDivElement[]) {
    const volumeId = await this.initVolume();
    this.grid_view = new Grid(this, elements, volumeId);
    this.emitter.emit(Events.GRID_CREATED);
  }

  reset(viewportIds: string[]) {
    viewportIds.forEach((viewportId) =>
      //@ts-ignore
      this.renderingEngine.getViewport(viewportId).resetCamera(true, true, true)
    );

    this.removeAllMeasurement();
    this.renderingEngine.render();
  }

  addPan(viewportIds: string[], [x, y]: [number, number]) {
    viewportIds.forEach((viewportId) => {
      const viewport = this.renderingEngine.getViewport(viewportId);
      const pan = viewport.getPan();
      viewport.setPan([pan[0] + x, pan[1] + y]);
    });

    this.renderingEngine.render();
  }

  setZoom(viewportIds: string[], zoom: number) {
    viewportIds.forEach((viewportId) => {
      const viewport = this.renderingEngine.getViewport(viewportId);
      viewport.setZoom(zoom);
    });

    this.renderingEngine.render();
  }

  addZoom(viewportIds: string[], offset: number) {
    viewportIds.forEach((viewportId) => {
      const viewport = this.renderingEngine.getViewport(viewportId);
      const zoom = viewport.getZoom();
      viewport.setZoom(zoom * offset);
    });

    this.renderingEngine.render();
  }

  addRotation(viewportIds: string[], [x, y]: [number, number]) {
    viewportIds.forEach((viewportId) => {
      const viewport = this.renderingEngine.getViewport(viewportId);
      const camera = viewport.getCamera();
      viewport.setCamera(camera);

      const currentPointWorld: Types.Point3 = [x, y, 0];
      const startPointWorld: Types.Point3 = [0, 0, 0];
      const width = viewport.sWidth;
      const height = viewport.sHeight;

      const centerCanvas: Types.Point2 = [width * 0.5, height * 0.5];
      const centerWorld = viewport.canvasToWorld(centerCanvas);

      let angle = angleBetweenLines(
        [startPointWorld, centerWorld],
        [centerWorld, currentPointWorld]
      );

      const { viewPlaneNormal, viewUp } = camera;
      const v1 = vec3.sub(vec3.create(), centerWorld, startPointWorld);
      const v2 = vec3.sub(vec3.create(), centerWorld, currentPointWorld);

      const cross = vec3.cross(vec3.create(), v1, v2);
      if (!viewPlaneNormal) throw Error('huh');
      if (vec3.dot(viewPlaneNormal, cross) > 0) {
        angle = -angle;
      }

      if (viewport instanceof BaseVolumeViewport) {
        const focalPoint = [0, 0, 0] as Types.Point3;
        const position = camera.position as Types.Point3;
        const viewUp = camera.viewUp as Types.Point3;
        const viewPlaneNormal = camera.viewPlaneNormal as Types.Point3;
        x = (x * Math.PI) / 180;
        y = (y * Math.PI) / 180;
        vec3.rotateZ(viewUp, viewUp, vec3.create(), x);
        vec3.rotateZ(position, position, vec3.create(), x);
        vec3.rotateZ(viewPlaneNormal, viewPlaneNormal, vec3.create(), x);

        vec3.rotateX(viewUp, viewUp, vec3.create(), y);
        vec3.rotateX(position, position, vec3.create(), y);
        vec3.rotateX(viewPlaneNormal, viewPlaneNormal, vec3.create(), y);

        viewport.setCamera({
          viewUp: viewUp,
          viewPlaneNormal: viewPlaneNormal,
          position,
          focalPoint
        });
      } else {
        const { rotation } = (viewport as Types.IStackViewport).getProperties();
        if (rotation === undefined) throw new Error('huh');
        //@ts-ignore
        viewport.setProperties({ rotation: rotation + angle });
      }

      viewport.render();
      // viewport.setRotation(rotation + offset);
    });

    this.renderingEngine.render();
  }

  changeActiveTool(
    toolGroup: IToolGroup,
    selectedToolName: string,
    newSelectedToolName: string,
    toolBindingsOption: SetToolBindingsType
  ) {
    console.log({
      toolGroup,
      selectedToolName,
      newSelectedToolName,
      toolBindingsOption
    });

    console.log(toolGroup);

    // toolGroup.
    toolGroup.setToolDisabled(selectedToolName);
    console.log(toolGroup);

    // Set the new tool active
    toolGroup.setToolActive(newSelectedToolName, toolBindingsOption);

    // Set the old tool passive
    // toolGroup.set
    console.log(toolGroup);
  }

  changeTool(
    toolState: ToolState,
    newSelectedToolName: string,
    toolBindingsOption: SetToolBindingsType
  ) {
    if (!toolState?.toolGroup) throw Error('no toolGroup?');

    const selectedToolName = toolState.activeTools.get(JSON.stringify(toolBindingsOption));
    if (!selectedToolName) throw Error('old tool not found');

    // toolState.toolGroup.setToolDisabled(selectedToolName);
    toolState.toolGroup.setToolPassive(selectedToolName);

    toolState.activeTools.set(JSON.stringify(toolBindingsOption), newSelectedToolName);

    toolState.activeTools.forEach((val, key) => {
      toolState.toolGroup?.setToolActive(val, JSON.parse(key));
    });
  }

  setVoiRange(viewportIds: string[], voiRange: Types.VOIRange) {
    viewportIds.forEach((viewportId) => {
      const viewport = this.renderingEngine.getViewport(viewportId);

      //@ts-ignore
      viewport.setProperties({
        voiRange
      });
      this.renderingEngine.render();
    });
  }

  setWindow(viewportIds: string[], ww: number, wl: number) {
    const voiRange: Types.VOIRange = {
      upper: wl + ww / 2,
      lower: wl - ww / 2
    };
    this.setVoiRange(viewportIds, voiRange);
  }

  applyPreset(viewportIds: string[], preset: StackPreset) {
    this.setWindow(viewportIds, preset.ww, preset.wl);
  }

  selectPreset(viewportIds: string[], presetName: string) {
    const preset = find2dPreset(presetName);
    this.applyPreset(viewportIds, preset);
  }

  select3dPreset(viewportId: string, presetName: string) {
    const viewport = this.renderingEngine.getViewport(viewportId) as Types.IVolumeViewport;

    const volumeActor = viewport?.getDefaultActor().actor as Types.VolumeActor | undefined;
    if (!volumeActor) throw new Error('no actor');

    const preset = find3dPreset(presetName);
    csUtilities.applyPreset(volumeActor, preset);

    // this.toolState.toolGroup?.getToolInstance(SusTool.toolName).refresh(this.viewport);
    this.renderingEngine.render();
  }

  getAllMeasurementAnnotationsIds() {
    const elements = [
      this.stack_view?.stackViewportId,
      this.volume_view?.viewportId,
      ...(this.grid_view?.allViewportIds || [])
    ]
      .filter(notEmpty)
      .map((id) => this.renderingEngine.getViewport(id).element);

    const all = MEASUREMENT_TOOLS.flatMap((tool_name) =>
      elements.flatMap((element) => annotation.state.getAnnotations(tool_name, element))
    ).filter(notEmpty);

    const annotationUIDs = all.map((an) => an.annotationUID).filter(notEmpty);
    return annotationUIDs;
  }

  setMeasurements(enable: boolean) {
    const annotationUIDs = this.getAllMeasurementAnnotationsIds();

    const viewportIds = [
      this.stack_view?.stackViewportId,
      this.volume_view?.viewportId,
      ...(this.grid_view?.allViewportIds || [])
    ].filter(notEmpty);

    if (enable) {
      annotation.visibility.showAllAnnotations();
    } else {
      annotationUIDs.forEach((annotationUID) => {
        annotation.visibility.setAnnotationVisibility(annotationUID, false);
      });
    }
    this.renderingEngine.renderViewports(viewportIds);
  }

  removeSelectedMeasurement() {
    const all_uids = this.getAllMeasurementAnnotationsIds();
    const selected_uids = annotation.selection.getAnnotationsSelected();
    const remote_uids = _.intersection(selected_uids, all_uids);

    remote_uids.forEach((id) => annotation.state.removeAnnotation(id));

    this.renderingEngine.render();
  }

  removeAllMeasurement() {
    const all_uids = this.getAllMeasurementAnnotationsIds();
    all_uids.forEach((id) => annotation.state.removeAnnotation(id));
  }

  getToolState(): ToolState {
    const state = (() => {
      if (this.view === '2d') return this.stack_view?.toolState;
      else if (this.view === '3d') return this.volume_view?.toolState;
      else if (this.view === 'grid') return this.grid_view?.toolState;
    })();

    if (state === undefined) throw new Error('cannot get tool state');
    return state;
  }

  setTool(tool_name: string, mouseButton: IToolBinding['mouseButton']) {
    this.changeTool(this.getToolState(), tool_name, {
      bindings: [
        {
          mouseButton
        }
      ]
    });

    this.emitter.emit(Events.TOOL_SET);
  }
}
