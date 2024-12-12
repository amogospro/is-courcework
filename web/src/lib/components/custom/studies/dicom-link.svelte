<script lang="ts">
  import { Button, buttonVariants } from '$lib/components/ui/button';
  import { Label } from '$lib/components/ui/label/index.js';
  import { _ as t } from 'svelte-i18n';
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import { toast } from 'svelte-sonner';
  import api from '$lib/api';

  export let dicomid: string | number | undefined | null;
  export let id: string | number | undefined | null;
  export let refetch: () => void;

  let files: any = null;

  const upload = async () => {
    const file = files[0];
    if (!file) {
      toast.error($t('no-file-selected'));
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await api.post(`/dicom/upload/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.info($t('file-uploaded-successfully'));
      refetch();
    } catch (error) {
      toast.error($t('error-uploading-file'));
    }
  };
</script>

<div class="gap-10px flex items-center justify-items-center">
  {#if dicomid}
    <Button variant="link" href="/preview?id={id}" target="_blank">{$t('open')}</Button>
  {:else}
    <Dialog.Root>
      <Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>{$t('upload')}</Dialog.Trigger>
      <Dialog.Content class="sm:max-w-[425px]">
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Label for="picture">{$t('select-file')}</Label>
          <input id="picture" type="file" bind:files multiple={false} accept=".dcm" />
        </div>
        <Dialog.Footer>
          <Button disabled={!files} on:click={upload}>{$t('upload')}</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  {/if}
</div>
