<script lang="ts">
  import { onMount } from 'svelte';
  import type { Settings } from '../../utils';
  import type { ViewerCore } from '../core';
  import { Enums } from '@cornerstonejs/core';
  import type { Types } from '@cornerstonejs/core';
  import Split, { type SplitInstance, type SplitOptions } from 'split-grid';
  import type { GridLayout } from '../utils';
  import View from './view.svelte';

  export let core: ViewerCore;
  export let settings: Settings;

  export let gridElements: HTMLDivElement[] = [];
  export let gridGridElements: HTMLDivElement[] = [];
  export let volumeElements: HTMLDivElement[] = [];

  let callbacks_done = false;
  $: gridElements = [...gridGridElements, ...volumeElements];
  $: if (gridElements.length > 0 && !callbacks_done) {
    setCallbacks(gridElements);
  }

  let cur_img = 0;
  let total = core.imageIds.length;

  let ww = 1;
  let wl = 0;

  export let activeElement: HTMLDivElement | null;

  const setCallbacks = (elements: HTMLDivElement[]) => {
    callbacks_done = true;
    console.log(elements);
    elements.forEach((element, idx) => {
      element.addEventListener(Enums.Events.IMAGE_RENDERED, (() => {
        if (settings.sync) {
          if (!core.grid_view) throw new Error('no grid');

          const viewport_id = core.grid_view.gridViewportIds[idx];
          if (!viewport_id) return;

          const range = (core.renderingEngine.getViewport(viewport_id) as any).getProperties()
            .voiRange;
          if (!range) return;
          const { lower, upper } = range;
          const new_wl = Math.round((lower + upper) / 2);
          const new_ww = Math.round(Math.abs(upper - lower));

          if (new_wl !== wl || new_ww !== ww) {
            wl = new_wl;
            ww = new_ww;

            core.setWindow(
              core.grid_view.gridViewportIds.filter((id) => id !== viewport_id),
              ww,
              wl
            );
          }
        }
      }) as EventListener);

      element.addEventListener(Enums.Events.STACK_NEW_IMAGE, ((
        evt: Types.EventTypes.StackNewImageEvent
      ) => {
        cur_img = evt.detail.imageIdIndex;
      }) as EventListener);
    });
  };

  onMount(() => {
    layouts = [
      {
        name: 'Вид 1',
        split_options: {
          minSize: 2,
          rowGutters: [{ track: 1, element: handle2 }],
          columnGutters: [{ track: 1, element: handle1 }]
        },
        style: 'grid-template-rows: 1fr 8px 1fr; grid-template-columns: 1fr 8px 1fr',
        handle_1_style: 'grid-row: 1 / 4; grid-column: 2; cursor: col-resize',
        handle_2_style: 'grid-row: 2; grid-column: 3; cursor: row-resize',
        handle_3_style: 'grid-row: 4; grid-column: 1; cursor: row-resize',
        element_1_style: 'grid-row: 1 / 4; grid-column: 1;',
        element_2_style: 'grid-row: 1; grid-column: 3;',
        element_3_style: 'grid-row: 3; grid-column: 3;',
        element_4_style: ''
      },
      {
        name: 'Вид 2',
        split_options: {
          minSize: 2,
          rowGutters: [{ track: 1, element: handle2 }],
          columnGutters: [{ track: 1, element: handle1 }]
        },
        style: 'grid-template-rows: 1fr 8px 1fr; grid-template-columns: 1fr 8px 1fr',
        handle_1_style: 'grid-row: 1 / 6; grid-column: 2; cursor: col-resize',
        handle_2_style: 'grid-row: 2; grid-column: 3; cursor: row-resize',
        handle_3_style: 'grid-row: 2; grid-column: 1; cursor: row-resize',
        element_1_style: 'grid-row: 1; grid-column: 1;',
        element_2_style: 'grid-row: 1; grid-column: 3',
        element_3_style: 'grid-row: 3; grid-column: 1',
        element_4_style: 'grid-row: 3; grid-column: 3'
      },
      {
        name: 'Вид 3',
        split_options: {
          minSize: 2,
          rowGutters: [
            { track: 1, element: handle2 },
            { track: 3, element: handle3 }
          ],
          columnGutters: [{ track: 1, element: handle1 }]
        },
        style: 'grid-template-rows: 1fr 8px 1fr 8px 1fr; grid-template-columns: 1fr 8px 1fr',
        handle_1_style: 'grid-row: 1 / 6; grid-column: 2; cursor: col-resize',
        handle_2_style: 'grid-row: 2; grid-column: 3; cursor: row-resize',
        handle_3_style: 'grid-row: 4; grid-column: 3; cursor: row-resize',
        element_1_style: 'grid-row: 1 / 6; grid-column: 1;',
        element_2_style: 'grid-row: 1; grid-column: 3',
        element_3_style: 'grid-row: 3; grid-column: 3',
        element_4_style: 'grid-row: 5; grid-column: 3'
      },
      {
        name: 'Вид 4',
        split_options: {
          columnGutters: [
            { track: 1, element: handle1 },
            { track: 3, element: handle2 }
          ]
        },
        style: 'grid-template-columns: 1fr 8px 1fr 8px 1fr 0px 0px',
        handle_1_style: 'grid-row: 1; grid-column: 2; cursor: col-resize',
        handle_2_style: 'grid-row: 1; grid-column: 4; cursor: col-resize',
        handle_3_style: 'grid-row: 1; grid-column: 6;',
        element_1_style: '',
        element_2_style: '',
        element_3_style: '',
        element_4_style: ''
      },
      {
        name: 'Вид 5',
        split_options: {
          columnGutters: [
            { track: 1, element: handle1 },
            { track: 3, element: handle2 },
            { track: 5, element: handle3 }
          ]
        },
        style: 'grid-template-columns: 1fr 8px 1fr 8px 1fr 8px 1fr',
        handle_1_style: 'grid-row: 1; grid-column: 2; cursor: col-resize',
        handle_2_style: 'grid-row: 1; grid-column: 4; cursor: col-resize',
        handle_3_style: 'grid-row: 1; grid-column: 6; cursor: col-resize',
        element_1_style: '',
        element_2_style: '',
        element_3_style: '',
        element_4_style: ''
      },
      {
        name: 'Вид 6',
        split_options: {
          rowGutters: [
            { track: 1, element: handle1 },
            { track: 3, element: handle2 },
            { track: 5, element: handle3 }
          ]
        },
        style: 'grid-template-rows: 1fr 8px 1fr 8px 1fr',
        handle_1_style: 'grid-row: 2; grid-column: 1; cursor: row-resize',
        handle_2_style: 'grid-row: 4; grid-column: 1; cursor: row-resize',
        handle_3_style: 'grid-row: 6; grid-column: 1; cursor: row-resize',
        element_1_style: '',
        element_2_style: '',
        element_3_style: '',
        element_4_style: ''
      },
      {
        name: 'Вид 7',
        split_options: {
          rowGutters: [
            { track: 1, element: handle1 },
            { track: 3, element: handle2 },
            { track: 5, element: handle3 }
          ]
        },
        style: 'grid-template-rows: 1fr 8px 1fr 8px 1fr 8px 1fr',
        handle_1_style: 'grid-row: 2; grid-column: 1; cursor: row-resize',
        handle_2_style: 'grid-row: 4; grid-column: 1; cursor: row-resize',
        handle_3_style: 'grid-row: 6; grid-column: 1; cursor: row-resize',
        element_1_style: '',
        element_2_style: '',
        element_3_style: '',
        element_4_style: ''
      }
    ];

    layout = layouts[1];
  });

  const initLayouts = () => {};
  const changeLayout = (new_layout: GridLayout) => {
    if (instance !== null) instance.destroy(true);
    instance = Split(new_layout.split_options);
  };
  $: if (handle1 && handle2) initLayouts();
  $: if (layout !== null) changeLayout(layout);

  let instance: SplitInstance | null = null;
  let handle1: HTMLDivElement;
  let handle2: HTMLDivElement;
  let handle3: HTMLDivElement;

  export let layouts: GridLayout[];
  export let layout: GridLayout | null;
</script>

<div class="bg-black w-full h-full flex flex-col relative">
  <div class="grid w-full h-full" style={layout?.style}>
    <div
      class="bg-white border-3px border-black border-solid"
      style={layout?.handle_1_style}
      bind:this={handle1}
    />
    <div
      class="bg-white border-3px border-black border-solid"
      style={layout?.handle_2_style}
      bind:this={handle2}
    />
    <div
      class="bg-white border-3px border-black border-solid"
      style={layout?.handle_3_style}
      bind:this={handle3}
    />

    <View
      {settings}
      {core}
      bind:activeElement
      style={layout?.element_1_style}
      enable_full
      bind:element={gridGridElements[0]}
    />
    <View
      {settings}
      {core}
      bind:activeElement
      style={layout?.element_2_style}
      enable_full
      bind:element={gridGridElements[1]}
    />
    <View
      {settings}
      {core}
      bind:activeElement
      style={layout?.element_3_style}
      enable_full
      bind:element={gridGridElements[2]}
    />
    <View
      {settings}
      {core}
      bind:activeElement
      style={layout?.element_4_style}
      enable_full
      bind:element={volumeElements[0]}
    />
  </div>
  <!-- {#if settings.annotations}
    <div class="z-2 absolute bottom-8px left-8px flex gap-2 flex-col">
      <p>WL: {wl} WW: {ww}</p>
      {#if total > 1}
        <p>Image {cur_img + 1}/{total}</p>
      {/if}
      <p>Right Click: Zoom</p>
      <p>Mouse Wheel: Stack Scroll</p>
      <div class="flex gap-2 item" />
    </div>
  {/if} -->
</div>
