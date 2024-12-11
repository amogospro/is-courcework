import { Enums, type Types } from '@cornerstonejs/core';
import { cornerstoneTools } from '../helpers';
import { makeId } from '../utils';
import type { ViewerCore } from './core';
import MinMaxWindowLevelTool from './tools/MinMaxWindowLevelTool';
const {
  PanTool,
  WindowLevelTool,
  StackScrollMouseWheelTool,
  ZoomTool,
  PlanarRotateTool,
  ToolGroupManager,
  Enums: csToolsEnums,
  utilities
} = cornerstoneTools;
const { ViewportType } = Enums;
const { MouseBindings } = csToolsEnums;

export class Stack {
  viewportId: string | null = null;
  constructor(public core: ViewerCore, public element: HTMLDivElement) {
    const id = makeId(10);
    const toolGroupId = `STACK_TOOL_GROUP_ID${id}`;
    const viewportId = `CT_STACK${id}`;
    this.viewportId = viewportId;
    // Define a tool group, which defines how mouse events map to tool commands for
    // Any viewport using the group
    const toolGroup = ToolGroupManager.createToolGroup(toolGroupId);
    if (!toolGroup) throw Error('failed to create tool group');

    // Add tools to the tool group

    // toolGroup.addTool(WindowLevelTool.toolName);
    // toolGroup.addTool(MinMaxWindowLevelTool.toolName);
    // toolGroup.addTool(PanTool.toolName);
    // toolGroup.addTool(ZoomTool.toolName);
    // // toolGroup.addTool(StackScrollMouseWheelTool.toolName, { loop: true });
    // toolGroup.addTool(PlanarRotateTool.toolName);

    // // Set the initial state of the tools, here all tools are active and bound to
    // // Different mouse inputs
    // toolGroup.setToolActive(WindowLevelTool.toolName, {
    //   bindings: [
    //     {
    //       mouseButton: MouseBindings.Auxiliary
    //     }
    //   ]
    // });
    // toolGroup.setToolActive(PanTool.toolName, {
    //   bindings: [
    //     {
    //       mouseButton: MouseBindings.Primary
    //     }
    //   ]
    // });
    // toolGroup.setToolActive(ZoomTool.toolName, {
    //   bindings: [
    //     {
    //       mouseButton: MouseBindings.Secondary
    //     }
    //   ]
    // });

    // As the Stack Scroll mouse wheel is a tool using the `mouseWheelCallback`
    // hook instead of mouse buttons, it does not need to assign any mouse button.
    // toolGroup.setToolActive(StackScrollMouseWheelTool.toolName);

    // Create a stack viewport
    const viewportInput: Types.PublicViewportInput = {
      viewportId: viewportId,
      type: ViewportType.PERSPECTIVE,
      element,
      defaultOptions: {
        background: <Types.Point3>[0.2, 0, 0.2]
      }
    };
    this.core.renderingEngine.enableElement(viewportInput);
    const viewport = this.core.renderingEngine.getViewport(viewportId) as Types.IStackViewport;
    toolGroup.addViewport(viewportId, this.core.renderingEngineId);
    viewport.setStack(this.core.imageIds);
    // viewport.setActors
    // ImageActor
    // utilities.stackPrefetch.enable(element);

    new ResizeObserver(() => this.core.renderingEngine.resize()).observe(element);

    viewport.render();
  }
  flipH() {
    if (!this.viewportId) return;

    // Get the stack viewport
    const viewport = <Types.IStackViewport>(
      this.core.renderingEngine.getViewport(this.viewportId)
    );

    const { flipHorizontal } = viewport.getCamera();
    viewport.setCamera({ flipHorizontal: !flipHorizontal });

    viewport.render();
  }

  flipV() {
    if (!this.viewportId) return;

    // Get the stack viewport
    const viewport = <Types.IStackViewport>(
      this.core.renderingEngine.getViewport(this.viewportId)
    );

    const { flipVertical } = viewport.getCamera();

    viewport.setCamera({ flipVertical: !flipVertical });

    viewport.render();
  }
  rotateAbsolute() {
    if (!this.viewportId) return;

    // Get the stack viewport
    const viewport = <Types.IStackViewport>(
      this.core.renderingEngine.getViewport(this.viewportId)
    );

    viewport.setProperties({ rotation: 150 });

    viewport.render();
  }

  rotate(delta: number) {
    if (!this.viewportId) return;

    // Get the stack viewport
    const viewport = <Types.IStackViewport>(
      this.core.renderingEngine.getViewport(this.viewportId)
    );

    const { rotation } = viewport.getProperties();
    viewport.setProperties({ rotation: (rotation || 0) + delta });

    viewport.render();
  }

  // addButtonToToolbar({
  //   title: 'Invert',
  //   onClick: () => {
  //     // Get the rendering engine
  //     const renderingEngine = getRenderingEngine(renderingEngineId);

  //     // Get the stack viewport
  //     const viewport = <Types.IStackViewport>(
  //       renderingEngine.getViewport(viewportId)
  //     );

  //     const { invert } = viewport.getProperties();

  //     viewport.setProperties({ invert: !invert });

  //     viewport.render();
  //   },
  // });

  resetViewport() {
    if (!this.viewportId) return;
    // Get the stack viewport
    const viewport = <Types.IViewport>(
      this.core.renderingEngine.getViewport(this.viewportId)
    );

    // Resets the viewport's camera
    viewport.reset(true);
    // Resets the viewport's properties
    // viewport.resetProperties();
    viewport.render();
  }
}
