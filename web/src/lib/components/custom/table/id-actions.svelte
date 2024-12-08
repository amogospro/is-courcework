<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  export let id: string;
</script>

<div class="gap-10px flex items-center justify-items-center">
  <Dialog.Root>
    <Dialog.Trigger let:builder>
      <Button builders={[builder]} variant="link">
        {id}
      </Button>
    </Dialog.Trigger>
    <Dialog.Content class="w-full max-w-[1500px]"></Dialog.Content>
  </Dialog.Root>
</div>
