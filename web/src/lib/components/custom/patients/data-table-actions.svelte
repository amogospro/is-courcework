<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import type { Patient } from '$lib/types';
  import Pencil from 'svelte-radix/Pencil1.svelte';
  import Trash from 'svelte-radix/Trash.svelte';
  import { toast } from 'svelte-sonner';
  import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
  import { updatePatient } from '$lib/api';
  import PatientForm from './patient-form.svelte';
  export let data: Patient;

  export let id: string;
  export let onDelete: () => {};
  export let onUpdate: () => {};
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
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
      </AlertDialog.Header>
      <AlertDialog.Footer>
        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
        <AlertDialog.Action on:click={onDelete}>Delete</AlertDialog.Action>
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
      <PatientForm
        {data}
        onSubmit={async (data) => {
          await updatePatient(data);
          toast.info('Product updated');
          onUpdate();
        }}
      />
    </Dialog.Content>
  </Dialog.Root>
</div>
