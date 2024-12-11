<script lang="ts">
  import { Button } from 'carbon-components-svelte';
  import Information from 'carbon-icons-svelte/lib/Information.svelte';
  export let href: string;
  export let iconDescription = 'Показать справку в pdf';
</script>

<div class="relative w-full">
  <div class="absolute -top-16px -right-16px">
    <Button
      size="small"
      {href}
      icon={Information}
      kind="ghost"
      {iconDescription}
      tooltipPosition="left"
      tooltipAlignment="end"
    />
  </div>
</div>
