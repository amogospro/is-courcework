<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  import { Label } from '$lib/components/ui/label';

  export let id: string;
  export let onSelect: () => any;
</script>

<!-- <Button variant="default" on:click>Select</Button> -->
<!-- <RadioGroup.Item value="option-one" id="option-one" /> -->
<!-- <RadioGroup.Root value="option-one">
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="option-one" id="option-one" />
  </div>
</RadioGroup.Root> -->

<div class="flex items-center space-x-2">
  <RadioGroup.Item value={id} {id} on:click={onSelect} />
</div>
