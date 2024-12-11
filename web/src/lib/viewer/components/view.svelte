<script lang="ts">
  import { onMount } from 'svelte';
  import type { ViewerCore } from '../core';
  import type { IViewport } from '@cornerstonejs/core/src/types';
  import { uniqueId } from 'lodash';
  import {
    type Types,
    Enums,
    utilities as csUtils,
    StackViewport,
    VolumeViewport
  } from '@cornerstonejs/core';
  import type { Settings } from '$lib/utils';
  import { WindowLevelTool } from '@cornerstonejs/tools';
  import MinMaxWindowLevelTool from '../tools/MinMaxWindowLevelTool';
  import { ORIENTATIONS } from '../utils';

  export let core: ViewerCore;
  export let settings: Settings;
  export let element: HTMLDivElement;
  export let enable_full = false;
  export let activeElement: HTMLDivElement | null;

  let id = uniqueId();
  let viewport: StackViewport | VolumeViewport | IViewport | null = null;
  let toggled = false;

  let ww = 1;
  let wl = 0;
  let lower = 0;
  let upper = 0;
  let cur_img = 0;
  let total = core.imageIds.length;
  $: total = core.imageIds.length;

  onMount(() => {
    setTimeout(() => {
      viewport =
        core.renderingEngine.getViewports().filter((viewport) => viewport.element.id === id)[0] ||
        null;

      element.addEventListener(Enums.Events.IMAGE_RENDERED, (() => {
        const range = (viewport as any)?.getProperties()?.voiRange;
        if (!range) return;
        ({ lower, upper } = range);
        wl = Math.round((lower + upper) / 2);
        ww = Math.round(Math.abs(upper - lower));
        updateAnnotation();
      }) as EventListener);

      element.addEventListener(Enums.Events.STACK_NEW_IMAGE, ((
        evt: Types.EventTypes.StackNewImageEvent
      ) => {
        cur_img = evt.detail.imageIdIndex;
        updateAnnotation();
      }) as EventListener);

      element.addEventListener('TOGGLE_FULL', ((evt: Types.EventTypes.StackNewImageEvent) => {
        toggled = !toggled;
      }) as EventListener);

      updateAnnotation();
    });
  });

  function getValue(volume: any, worldPos: any) {
    const { dimensions, scalarData, imageData } = volume;

    const index = imageData.worldToIndex(worldPos);

    index[0] = Math.floor(index[0]);
    index[1] = Math.floor(index[1]);
    index[2] = Math.floor(index[2]);

    if (!csUtils.indexWithinDimensions(index, dimensions)) {
      return;
    }

    const yMultiple = dimensions[0];
    const zMultiple = dimensions[0] * dimensions[1];

    const value = scalarData[index[2] * zMultiple + index[1] * yMultiple + index[0]];

    return value;
  }

  let top = '';
  let bottom = '';

  let worldPos: Types.Point3 = [0, 0, 0];

  const getRange = () => {
    const range = (viewport as any).getProperties().voiRange;
    if (!range) return;
    ({ lower, upper } = range);
    wl = Math.round((lower + upper) / 2);
    ww = Math.round(Math.abs(upper - lower));
  };

  const getOrientation = () => {
    if (viewport == null) return '';
    const orientation = ORIENTATIONS[viewport.options.orientation as string];
    if (!orientation) return '';

    const { display, color } = orientation;

    const icon = `<div class="orientation-icon" style="border: ${
      activeElement === element ? 5 : 8
    }px solid ${color}"></div>`;
    return `${display} ${icon}`;
  };

  const updateAnnotation = () => {
    if (viewport == null) return;
    getRange();

    let hu: number;
    if (viewport instanceof StackViewport && viewport.getImageData()) {
      const image = viewport.getImageData();
      const { dimensions, imageData, metadata, hasPixelSpacing } = image;
      // @ts-expect-error
      const scalarData = 'getScalarData' in image ? image.getScalarData() : image.scalarData;

      const iMin = Math.floor(worldPos[0]);
      const jMin = Math.floor(worldPos[1]);
      const kMin = Math.floor(worldPos[2]);

      const yMultiple = dimensions[0];
      const zMultiple = dimensions[0] * dimensions[1];

      const value = scalarData[kMin * zMultiple + jMin * yMultiple + iMin];

      hu = value;
    } else {
      hu = core?.volume && getValue(core?.volume, worldPos);
    }
    bottom = [
      window_level_mode === MinMaxWindowLevelTool.toolName
        ? `мин: ${lower} макс: ${upper}`
        : `положение: ${wl} ширина: ${ww}`,
      // `canvas: (${canvasPos[0]}, ${canvasPos[1]})`,
      `Масштаб: ${Math.round(viewport.getZoom() * 100)}%`,
      `X: ${worldPos[0].toFixed(2)}, Y: ${worldPos[1].toFixed(2)}, Z: ${worldPos[2].toFixed(2)}${
        hu ? `, HU: ${hu}` : ''
      }`
    ].join('<br/>\n');

    let top_arr = [
      (viewport.type === 'stack' ? `Кадр: ${cur_img + 1}/${total}` : `Кадров: ${total}`) +
        (viewport.type === 'orthographic' ? ' ' + getOrientation() : '')
    ];
    if (core?.metadata?.SliceThickness || core?.metadata?.SliceLocation) {
      top_arr.push(
        `Толщина среза: ${core?.metadata?.SliceThickness || '?'} мм, Позиция: ${
          core?.metadata?.SliceLocation || '?'
        } мм`
      );
    }
    top = top_arr.join('<br/>\n');
  };

  const mmove = (evt: any) => {
    if (viewport == null) return;

    const rect = element.getBoundingClientRect();

    const canvasPos = [
      Math.floor(evt.clientX - rect.left),
      Math.floor(evt.clientY - rect.top)
    ] as Types.Point2;

    worldPos = viewport.canvasToWorld(canvasPos);
    updateAnnotation();
  };

  let window_level_mode = WindowLevelTool.toolName;

  $: {
    if (
      settings.lmb == MinMaxWindowLevelTool.toolName ||
      settings.rmb == MinMaxWindowLevelTool.toolName ||
      settings.mmb == MinMaxWindowLevelTool.toolName
    ) {
      window_level_mode = MinMaxWindowLevelTool.toolName;
    }

    if (
      settings.lmb == WindowLevelTool.toolName ||
      settings.rmb == WindowLevelTool.toolName ||
      settings.mmb == WindowLevelTool.toolName
    ) {
      window_level_mode = WindowLevelTool.toolName;
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  {id}
  bind:this={element}
  on:mousedown={() => (activeElement = element)}
  on:mousemove={mmove}
  on:contextmenu|preventDefault={() => {}}
  on:mousedown|preventDefault={() => {}}
  on:dblclick={() => {
    if (enable_full) {
      toggled = !toggled;
    }
  }}
  class:full={toggled}
  {...$$restProps}
  class="relative rounded-md overflow-hidden {$$restProps.class}"
>
  {#if settings.annotations}
    <div class="absolute left-10px top-10px z-10" style="z-index: {toggled ? 4 : 2};">
      <p>
        {@html top}
      </p>
    </div>
    <div class="absolute left-10px bottom-10px z-10" style="z-index: {toggled ? 4 : 2};">
      <p>
        {#if activeElement === element}
          active
        {/if}
      </p>
      <p>
        {@html bottom}
      </p>
    </div>

    {#if ORIENTATIONS[String(viewport?.options.orientation)]}
      {@const { u, b, l, r } = ORIENTATIONS[String(viewport?.options.orientation)]}
      <div
        class="absolute left-10px right-10px text-center top-10px z-10"
        style="z-index: {toggled ? 4 : 2};"
      >
        <p>{u}</p>
      </div>
      <div
        class="absolute left-10px right-10px text-center bottom-10px z-10"
        style="z-index: {toggled ? 4 : 2};"
      >
        <p>{b}</p>
      </div>
      <div
        class="absolute left-10px text-center bottom-10px grid items-center top-10px z-10 rotate-180"
        style="z-index: {toggled ? 4 : 2}; writing-mode: vertical-lr;"
      >
        <p>{l}</p>
      </div>
      <div
        class="absolute right-10px text-center bottom-10px grid items-center top-10px z-10"
        style="z-index: {toggled ? 4 : 2}; writing-mode: vertical-rl;"
      >
        <p>{r}</p>
      </div>
    {/if}
  {/if}
</div>

<style lang="scss">
  :global(.orientation-icon) {
    border-radius: 2px;
    border: 6px solid;
    background-color: #000;
    width: 16px;
    height: 16px;
    display: inline-block;
  }
  .full {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .rounded-mask {
    position: relative;
    overflow: hidden; /* Ensures the mask is applied */
    border-radius: 1rem; /* Adjust the radius as needed */
  }

  .content {
    width: 100%;
    height: 100%;
    background-color: blue; /* Child background */
    /* Additional styling for your content */
  }
</style>
