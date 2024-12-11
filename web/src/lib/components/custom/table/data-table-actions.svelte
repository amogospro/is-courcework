<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import Pencil from 'svelte-radix/Pencil1.svelte';
  import Trash from 'svelte-radix/Trash.svelte';
  import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
  import { ComponentRenderConfig, Render } from 'svelte-render';
  import { _ as t } from 'svelte-i18n';

  type FormComponent = $$Generic<SvelteComponent>;
  export let update_form: ComponentRenderConfig<FormComponent>;
  export let onDelete: () => {};
</script>

<div class="gap-10px flex items-center justify-items-center">
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost">
        <Trash class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title>{$t('are-you-absolutely-sure')}</AlertDialog.Title>
        <AlertDialog.Description>{$t('this-action-cannot-be-undone')}</AlertDialog.Description>
      </AlertDialog.Header>
      <AlertDialog.Footer>
        <AlertDialog.Cancel>{$t('cancel')}</AlertDialog.Cancel>
        <AlertDialog.Action on:click={onDelete}>{$t('delete')}</AlertDialog.Action>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog.Root>

  <Dialog.Root>
    <Dialog.Trigger let:builder>
      <Button builders={[builder]} variant="ghost">
        <Pencil class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Dialog.Trigger>
    <Dialog.Content class="w-full max-w-[1500px]">
      <Render of={update_form} />
    </Dialog.Content>
  </Dialog.Root>
</div>
