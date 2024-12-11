<script lang="ts">
  import { onMount } from 'svelte';
  import { Enums } from '@cornerstonejs/core';
  import type { Types } from '@cornerstonejs/core';
  import type { ViewerCore } from '../core';
  import type { Settings } from '../../utils';
  import View from './view.svelte';
  import Scroll from './scroll.svelte';
  export let stackElement: HTMLDivElement;
  export let activeElement: HTMLDivElement | null;

  export let core: ViewerCore;
  export let settings: Settings;
  let cur_img = 0;
  let total = core.imageIds.length;

  let ww = 1;
  let wl = 0;

  let lower = 0;
  let upper = 0;

  let target = 0;

  onMount(async () => {
    stackElement.addEventListener(Enums.Events.IMAGE_RENDERED, (() => {
      const range = (
        core.renderingEngine.getViewport(core.stack_view?.stackViewportId as string) as any
      ).getProperties().voiRange;
      if (!range) return;
      ({ lower, upper } = range);
      wl = Math.round((lower + upper) / 2);
      ww = Math.round(Math.abs(upper - lower));
    }) as EventListener);

    stackElement.addEventListener(Enums.Events.STACK_NEW_IMAGE, ((
      evt: Types.EventTypes.StackNewImageEvent
    ) => {
      target = evt.detail.imageIdIndex;
    }) as EventListener);
  });

  const onScrolled = (cur_img: number) => {
    if (cur_img == target) return;
    core.stack_view?.scroll(cur_img - target);
  };
  $: if (cur_img != null) {
    onScrolled(cur_img);
  }
</script>

<div class="w-full h-full flex flex-row relative gap-2px">
  <View {settings} {core} class="grow h-full" bind:activeElement bind:element={stackElement} />
  <Scroll {total} bind:current={cur_img} {target} />
</div>
