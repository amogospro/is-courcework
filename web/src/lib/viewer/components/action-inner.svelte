<script lang="ts">
  export let src: string | undefined;
  export let text: string | undefined;
</script>

{#if src}
  <img class="cursor-pointer object-scale-down w-18px h-18px" {src} alt={src} />
{/if}
{#if text}
  <p>{text}</p>
{/if}
<slot />
