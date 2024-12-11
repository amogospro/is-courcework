<script lang="ts">
  import { TooltipIcon } from 'carbon-components-svelte';
  import ActionInner from './action-inner.svelte';

  export let id: string | undefined = undefined;
  export let src: string | undefined = undefined;
  export let text: string | undefined = undefined;
  export let tooltip: string = '';

  export let lmb = () => {};
  export let rmb = () => {};
  export let mmb = () => {};

  const click = (e: MouseEvent) => {
    switch (e.button) {
      case 0:
        lmb();
        break;
      case 1:
        mmb();
        break;
      case 2:
        rmb();
        break;
    }
  };
</script>

<div
  class="flex items-center shadow border-none rounded bg-#f4f4f4 hover:bg-#e4e4e4 hover:shadow-lg transition duration-300"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class=" flex w-auto h-30px p-6px cursor-pointer"
    aria-label={tooltip}
    {id}
    on:mousedown|preventDefault|stopPropagation
    on:mouseup|preventDefault|stopPropagation={click}
    on:contextmenu|preventDefault
  >
    {#if tooltip}
      <TooltipIcon tooltipText={tooltip}>
        <ActionInner {src} {text} />
      </TooltipIcon>
    {:else}
      <ActionInner {src} {text} />
    {/if}
  </div>
  <slot />
</div>
