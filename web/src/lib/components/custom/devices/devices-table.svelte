<script lang="ts">
  import { createRender } from 'svelte-headless-table';

  import * as Dialog from '$lib/components/ui/dialog';
  import { writable } from 'svelte/store';

  import DataTableActions from '$lib/components/custom/table/data-table-actions.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { Device } from '$lib/types';
  import _ from 'lodash';
  import { toast } from 'svelte-sonner';
  import { createDevice, deleteDevice, getDevices, updateDevice } from '$lib/api';
  import DeviceForm from './device-form.svelte';
  import { type ColsFn } from '$lib/components/custom/table/table';
  import Table from '$lib/components/custom/table/data-table.svelte';
  import IdActions from '../table/id-actions.svelte';
  export let Devices = writable<Device[]>([]);

  export let readonly = false;
  export let selected: Device | null = null;
  export let id_selector = false;
  const fetchFn = getDevices;
  let refetch: () => any;

  const colsFn: ColsFn<Device> = (table) => [
    ...(id_selector
      ? [
          table.column({
            accessor: (item) => item,
            id: 'select',
            header: '',
            cell: (item) => {
              return createRender(IdActions, {
                id: String(item.value.id),
                onSelect: () => {
                  selected = item.value;
                }
              });
            }
          })
        ]
      : []),

    // Name Column
    table.column({
      accessor: 'devicesn',
      header: 'devicesn'
    }),
    table.column({
      accessor: 'location',
      header: 'location'
    }),
    table.column({
      accessor: 'status',
      header: 'status'
    }),
    ...(!readonly
      ? [
          table.column({
            accessor: (item) => item,
            header: '',
            cell: (item) => {
              const id = item.value.id;
              if (!id) throw new Error('no id');
              return createRender(DataTableActions, {
                onDelete: async () => {
                  await deleteDevice(id);
                  toast.success('Device deleted');
                  refetch();
                },
                update_form: createRender(DeviceForm, {
                  data: item.value,
                  onSubmit: async (data) => {
                    await updateDevice(data);
                    toast.info('Product updated');
                    refetch();
                  }
                })
              });
            },
            plugins: {
              sort: {
                disable: true
              },
              filter: {
                exclude: true
              }
            }
          })
        ]
      : [])
  ];
</script>

<div>
  {#if !readonly}
    <div class="gap-10px flex items-end py-4">
      <Dialog.Root>
        <Dialog.Trigger class="ml-auto">
          <Button>New Device</Button>
        </Dialog.Trigger>
        <Dialog.Content class="w-full max-w-[1500px]">
          <DeviceForm
            onSubmit={async (data) => {
              console.log(data);
              await createDevice(data);
              toast.info('Device created');
              refetch();
            }}
            data={{
              devicesn: '',
              location: '',
              status: 'Работает'
            }}
          >
            <svelte:fragment slot="title">Create new Device</svelte:fragment>
            <svelte:fragment slot="button">Create</svelte:fragment>
          </DeviceForm>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  {/if}
  <Table {colsFn} {fetchFn} items={Devices} bind:refetch />
</div>
