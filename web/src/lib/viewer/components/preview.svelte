<script lang="ts">

  import { Row, Column, DataTable, Modal } from 'carbon-components-svelte';
  import VolumetricView from '$lib/viewer/components/volumetric-view.svelte';
  import StackView from '$lib/viewer/components/stack-view.svelte';
  // @ts-ignore
  import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
  // @ts-ignore
  import dcmjs from 'dcmjs';
  import GridView from './grid-view.svelte';
  import { Events, ViewerCore } from '../core';
  import removeInvalidTags from '../../helpers/removeInvalidTags';
  import type { Settings } from '../../utils';
  import type { GridLayout, ViewType } from '../utils';
  import Tools from './tools.svelte';
  import { getTagTable } from '../tags';
  import { Enums } from '@cornerstonejs/core';
  const { DicomMetaDictionary } = dcmjs.data;

  export let core: ViewerCore | null = null;
  export let small = false;
  let progress = {
    value: null as number | null,
    status: 'active' as 'active' | 'finished' | 'error',
    helperText: ''
  };

  // export settings
  export let enabled: ViewType[] = ['2d', '3d', 'grid'];
  export let annotations = true;

  // view bar settings
  export let view: ViewType = '2d';
  $: if (core) core.view = view;

  let info: string = '';

  let exposition = '';

  let grid_created = false;
  let init_complete = false;
  let settings: Settings = {
    annotations: annotations,
    measurements: true,
    patient_data: true,
    dicom_tags: false,
    axis: true,
    sync: true,
    lmb: '',
    rmb: '',
    mmb: ''
    // tools
  };
  $: if (core) core.settings = settings;

  let element: HTMLElement;
  let viewElement: HTMLElement;

  export let image_ids: string[] | null = null;

  let stackElement: HTMLDivElement;
  let volumeElement: HTMLDivElement;
  let gridElements: HTMLDivElement[] | undefined;

  let activeElement: HTMLDivElement | null = null;

  let layouts: GridLayout[] = [];
  let layout: GridLayout | null = null;

  export const onProgress = (x: number) => (progress.value = x);

  const onImageIds = (image_ids: string[]) => {
    let flip_view = false;
    const new_view = view;
    if (!init_complete && view !== '2d') {
      console.log('dadaada');
      flip_view = true;
      view = '2d';
    }
    const end = () => {
      // console.log('pls');
      // init_complete = true;
      // if (flip_view) {
      //   console.log('pls');
      //   core?.emitter.on(Events.STACK_CREATED, () => {
      //     core?.stack_view?.element.addEventListener(Enums.Events.IMAGE_RENDERED, () => {
      //       setTimeout(() => {
      //         view = new_view;
      //       }, 100);
      //     });
      //   });
      // }
    };

    if (!image_ids.length) {
      end();
      return;
    }

    if (core !== null) {
      core.imageIds = image_ids;

      if (view === '2d') {
        core.stack_view?.viewport.setStack(image_ids);
      }
      end();
      return;
    }
    core = new ViewerCore(image_ids, settings);

    let imageId = image_ids[0];
    let instanceMetaData = cornerstoneDICOMImageLoader.wadors.metaDataManager.get(imageId);
    if (!instanceMetaData) {
      end();
      return;
    }
    instanceMetaData = removeInvalidTags(instanceMetaData);
    const metadata = DicomMetaDictionary.naturalizeDataset(instanceMetaData);

    console.log(metadata);
    if (metadata.PatientName?.[0]?.Alphabetic || metadata.PatientID || metadata.PatientBirthDate) {
      info = [
        `${metadata.PatientName?.[0]?.Alphabetic || '?'}`,
        `${metadata.PatientID || '?'}`,
        `${metadata.PatientBirthDate || '?'}`
      ].join('<br/>\n');
    } else {
      info = '';
    }

    if (
      metadata.XRayTubeCurrent ||
      metadata.instanceMetaData ||
      metadata.KVP ||
      metadata.StudyTime
    ) {
      exposition = [
        `${metadata.XRayTubeCurrent || '?'} мА (mA)  ${metadata.KVP || '?'} кВ (kV)`,
        `${metadata.instanceMetaData || '?'} ${metadata.StudyTime || '?'}`
      ].join('<br/>\n');
    } else {
      exposition = '';
    }
    end();
  };

  let last_view = '';
  const switchView = (core: ViewerCore, view: string) => {
    if (last_view === view) return;
    if (stackElement && view === '2d') {
      core.createStack(stackElement);
      last_view = view;
    }

    if (volumeElement && view === '3d') {
      core.createVolume(volumeElement);
      last_view = view;
    }

    if (gridElements?.length && view === 'grid' && core) {
      if (!grid_created) {
        core.createGrid(gridElements);
      }
      last_view = view;
      grid_created = true;
    }
  };

  $: if (image_ids) onImageIds(image_ids);

  $: if (core && view && (stackElement || volumeElement || gridElements?.length)) {
    switchView(core, view);
  }

  // const createGrid = (core: ViewerCore) => {
  //   if (!gridElements) throw new Error('no grid elements');
  //   settings.axis = true;
  //   console.log('creating grid');
  //   core.createGrid(gridElements);
  // };

  const defaultViewPorts = () => {
    if (view === '2d') return [core?.stack_view?.stackViewportId as string];
    else if (view === '3d') return [core?.volume_view?.viewportId as string];
    else if (view === 'grid') return core?.grid_view?.allViewportIds as string[];
    return [];
  };
</script>

<div class="grid h-full">
  {#if image_ids && image_ids.length}
    <Row class="mt-2">
      <Column>
        <div bind:this={element} class="h-full w-full">
          <div class="flex h-full w-full flex-col">
            {#if !small}
              <Tools
                {defaultViewPorts}
                bind:core
                bind:annotations
                bind:enabled
                bind:settings
                bind:element
                bind:view
                bind:layouts
                bind:layout
                bind:viewElement
                bind:activeElement
              >
                <slot slot="extra-tools" name="extra-tools" />
              </Tools>
              <slot name="tools" />
            {/if}
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="relative w-full grow text-white"
              bind:this={viewElement}
              tabindex="0"
              on:pointerenter={() => viewElement?.focus()}
            >
              <!-- on:mousemove={mmove} -->

              {#if core !== null}
                {#if view === '2d'}
                  <StackView {core} bind:settings bind:stackElement bind:activeElement />
                {/if}
                {#if view === '3d'}
                  <VolumetricView {core} bind:settings bind:volumeElement bind:activeElement />
                {/if}
                {#if view === 'grid' || grid_created}
                  <div class="h-full w-full" style="display: {view === 'grid' ? 'block' : 'none'};">
                    <GridView
                      {core}
                      bind:settings
                      bind:gridElements
                      bind:activeElement
                      bind:layout
                      bind:layouts
                    />
                  </div>
                {/if}
                {#if settings.patient_data}
                  <div class="z-2 top-10px right-10px absolute text-right">
                    <p class="text-sm">
                      {@html info}
                    </p>
                  </div>
                {/if}

                {#if settings.annotations}
                  <div class="z-2 bottom-10px right-10px absolute text-right">
                    <p class="text-sm">
                      {@html exposition}
                    </p>
                  </div>
                {/if}

                {#if core.instanceMetaData}
                  <Modal
                    size="lg"
                    bind:open={settings.dicom_tags}
                    passiveModal
                    modalHeading="DICOM тэги"
                    on:open
                    on:close
                    on:submit
                  >
                    <DataTable
                      size="short"
                      headers={[
                        { key: 'id', value: 'Тэг ID' },
                        { key: 'vr', value: 'VR' },
                        { key: 'vm', value: 'VM' },
                        { key: 'length', value: 'Длина' },
                        { key: 'description', value: 'Описание' },
                        { key: 'value', value: 'Значение' }
                      ]}
                      rows={getTagTable(core.instanceMetaData)}
                    >
                      <svelte:fragment slot="cell" let:row let:cell>
                        {#if cell.value !== undefined}
                          {cell.value}
                        {/if}
                      </svelte:fragment>
                    </DataTable>
                  </Modal>
                {/if}
              {/if}
            </div>
          </div>
        </div>
      </Column>
    </Row>
  {/if}
</div>
