<script lang="ts">
  import 'carbon-components-svelte/css/white.css';

  import { Button, Form, Tile, InlineLoading, FileUploaderButton } from 'carbon-components-svelte';
  import Preview from '$lib/viewer/components/preview.svelte';
  import { onMount } from 'svelte';
  // @ts-ignore
  import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
  import api from '$lib/api';
  import JSZip from 'jszip';

  import { page } from '$app/stores';

  let image_ids: string[] | null = null;

  async function fetchAndUnzip(id: number): Promise<File[]> {
    try {
      // Fetching the ZIP file as a Blob
      const response = await api.get(`/dicom/download/${id}`, { responseType: 'blob' });
      const zipBlob = response.data;

      // Using JSZip to read the ZIP file
      const zip = new JSZip();
      const unzippedContent = await zip.loadAsync(zipBlob);

      // Recursive function to search for .dcm files
      const dcmFiles: File[] = [];
      const searchForDcmFiles = async (folder: JSZip) => {
        console.log(folder);
        for (const fileName of Object.keys(folder.files)) {
          const file = folder.files[fileName];
          if (file.dir) {
            // If it's a directory, recurse into it
            await searchForDcmFiles(file);
          } else if (fileName.endsWith('.dcm')) {
            // If it's a .dcm file, add to the results
            const fileBlob = await file.async('blob');
            dcmFiles.push(new File([fileBlob], fileName));
          }
        }
      };

      // Start searching from the root
      await searchForDcmFiles(unzippedContent);

      return dcmFiles;
    } catch (error) {
      console.error('Error fetching or processing ZIP file:', error);
      throw error;
    }
  }

  onMount(async () => {
    const id = Number($page.url.searchParams.get('id') ?? '0');
    if (id) {
      const files = await fetchAndUnzip(id);
      console.log(files);
      loadFiles({ detail: files });
    }
  });
  const loadFiles = (e: any) => {
    let new_files = [...e.detail];
    new_files.sort((a, b) => {
      const numberPattern = /\d+/; // Regular expression to extract digits
      const numberA = parseInt(a.name.match(numberPattern)?.[0] || '0', 10);
      const numberB = parseInt(b.name.match(numberPattern)?.[0] || '0', 10);
      return numberA - numberB;
    });
    image_ids = new_files.map((file) => cornerstoneDICOMImageLoader.wadouri.fileManager.add(file));
  };
</script>

<div class="h-[calc(100vh-100px)]">
  <Tile class="h-full">
    <div class="flex h-full flex-col">
      <div class="gap-10px flex items-center justify-items-center">
        <h2>Просмотр изображений</h2>
        {#if image_ids}
          <Button
            on:click={() => {
              image_ids = null;
            }}
            kind="ghost"
            size="small"
          >
            Сброс
          </Button>
        {/if}
      </div>
      <br />
      <div class="grow">
        {#if image_ids}
          <Preview view="2d" enabled={['2d']} {image_ids} />
        {:else}
          <FileUploaderButton
            multiple
            labelText="Выбор изображений"
            accept={['.dcm']}
            on:change={loadFiles}
          />
        {/if}
      </div>
    </div>
  </Tile>
</div>

<style lang="scss">
  :global(html, body) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
