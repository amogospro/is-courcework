<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * in %
   */
  export let min_height = 5;

  export let total = 0;
  export let current = 0;
  export let target = 0;

  let scrollbar: HTMLDivElement;
  let handle: HTMLDivElement;
  let startY = 0,
    startPercentage = 0,
    dragging = false;

  function updateHandlePosition(index: number) {
    if (scrollbar) {
      setPercentage(index);
    }
  }

  $: if (target != null && !dragging) updateHandlePosition(target);

  onMount(() => {
    updateHandlePosition(current);
  });

  function startDrag(event: MouseEvent) {
    const snapInterval = 100 / total;
    dragging = true;
    startY = event.clientY;

    startPercentage = parseFloat(handle.style.top);
    startPercentage -= (current / total) * snapInterval;
    startPercentage /= (100 - Math.max(100 / total, min_height)) / 100;

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
  }

  const setPercentage = (index: number) => {
    const snapInterval = 100 / total;

    let newPercentage = index * snapInterval;
    newPercentage *= (100 - Math.max(100 / total, min_height)) / 100;
    newPercentage += (index / total) * snapInterval;

    handle.style.top = `${Math.min(newPercentage, 100)}%`;
  };
  function doDrag(event: MouseEvent) {
    if (!dragging) return;
    const deltaY = event.clientY - startY;

    let scrollbarHeight = scrollbar.clientHeight;
    scrollbarHeight *= (100 - Math.max(100 / total, min_height)) / 100;

    let newPercentage = startPercentage + (deltaY / scrollbarHeight) * 100;
    newPercentage = Math.max(0, Math.min(newPercentage, 100)); // Clamp between 0% and 100%

    const snapInterval = 100 / total;

    let closestIndex = Math.floor(newPercentage / snapInterval);
    closestIndex = Math.max(0, Math.min(closestIndex, total - 1));

    current = closestIndex;
    setPercentage(closestIndex);
  }

  function stopDrag() {
    dragging = false;
    document.removeEventListener('mousemove', doDrag);
    document.removeEventListener('mouseup', stopDrag);
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
  bind:this={scrollbar}
  class="scrollbar relative h-full w-10px bg-#f4f4f4 rounded-xl overflow-auto"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    bind:this={handle}
    on:mousedown={startDrag}
    class="m-0! h-1/n bg-#8d8d8d rounded-xl absolute w-full cursor-pointer"
    style={`height: ${Math.max(100 / total, min_height)}%`}
  />
</div>

<style>
  .scrollbar::-webkit-scrollbar {
    display: none; /* Hide native scrollbar */
  }
</style>
