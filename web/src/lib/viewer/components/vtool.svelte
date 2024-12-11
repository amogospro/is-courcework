<script lang="ts">
  import { cornerstoneTools } from '$lib/helpers';
  import ActionContainer from './action-container.svelte';
  import OverflowMenuItem from '../../components/menu-item.svelte';
  import Menu from '../../components/menu.svelte';
  import type { ViewerCore } from '../core';
  const { Enums: csToolsEnums } = cornerstoneTools;
  const { MouseBindings } = csToolsEnums;

  export let core: ViewerCore | null = null;

  export let src: string;
  export let prefix: string = '';
  export let display: string = '';
  export let name: string = '';

  export let tools: { name: string; display: string }[] = [];

  export let menu = false;
  export let shortcut: string = '';

  let elmb: boolean = false;
  let emmb: boolean = false;
  let ermb: boolean = false;

  $: elmb = name === core?.settings.lmb;
  $: emmb = name === core?.settings.mmb;
  $: ermb = name === core?.settings.rmb;

  const selectTool = (idx: number) => {
    ({ name, display } = tools[idx]);

    if (elmb) {
      lmb();
    }
    if (emmb) {
      mmb();
    }
    if (ermb) {
      rmb();
    }
  };
  if (tools.length) {
    selectTool(0);
  }

  export let lmb = () => {
    core?.setTool(name, MouseBindings.Primary);
  };

  export let rmb = () => {
    core?.setTool(name, MouseBindings.Secondary);
  };

  export let mmb = () => {
    core?.setTool(name, MouseBindings.Auxiliary);
  };
</script>

<div class="relative flex">
  <ActionContainer
    {lmb}
    {rmb}
    {mmb}
    {src}
    tooltip={prefix + display + (shortcut && `\n \n (${shortcut})`) || ''}
  >
    <slot />
    {#if tools.length || menu}
      <Menu>
        {#each tools as tool, idx}
          <OverflowMenuItem
            on:click={() => {
              selectTool(idx);
            }}
            checked={display == tool.display}
            text={tool.display}
          />
        {/each}
        <slot name="extra" />
      </Menu>
    {/if}
  </ActionContainer>

  {#if elmb}
    <div class="absolute left-0 -bottom-8px">
      <div class="w-5px h-5px rounded-full bg-black m-2px" />
    </div>
  {/if}
  {#if emmb}
    <div class="absolute left-0 right-0 grid justify-items-center -bottom-8px">
      <div class="w-5px h-5px rounded-full bg-black m-2px" />
    </div>
  {/if}
  {#if ermb}
    <div class="absolute right-0 -bottom-8px">
      <div class="w-5px h-5px rounded-full bg-black m-2px" />
    </div>
  {/if}
</div>
