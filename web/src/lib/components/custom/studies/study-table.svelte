<script lang="ts">
  import { createRender } from 'svelte-headless-table';

  import * as Dialog from '$lib/components/ui/dialog';
  import { writable } from 'svelte/store';
  import IdActions from '../table/id-actions.svelte';

  import DataTableActions from '$lib/components/custom/table/data-table-actions.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { Study } from '$lib/types';
  import _ from 'lodash';
  import { toast } from 'svelte-sonner';
  import { createStudy, deleteStudy, getStudies, updateStudy } from '$lib/api';
  import StudyForm from './study-form.svelte';
  import { type ColsFn } from '$lib/components/custom/table/table';
  import Table from '$lib/components/custom/table/data-table.svelte';

  export let patients = writable<Study[]>([]);
  export let readonly = false;
  export let id_selector = false;
  export let selected: Study | null = null;

  const fetchFn = getStudies;
  let refetch: () => any;

  const colsFn: ColsFn<Study> = (table) => [
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
    table.column({
      accessor: 'device',
      id: 'device',
      header: 'Device',
      cell: ({ value }) => {
        return `${value?.devicesn ?? 'N/A'} at ${value?.location ?? 'N/A'}`;
      }
    }),
    table.column({
      accessor: 'patient',
      id: 'patient',
      header: 'Person',
      cell: ({ value }) => {
        return `${value?.person.firstname ?? 'N/A'} ${value?.person.middlename ?? 'N/A'} ${value?.person.lastname ?? 'N/A'}`;
      }
    }),
    table.column({
      accessor: 'user',
      id: 'user',
      header: 'Doctor',
      cell: ({ value }) => {
        return `${value?.person.firstname ?? 'N/A'} ${value?.person.middlename ?? 'N/A'} ${value?.person.lastname ?? 'N/A'}`;
      }
    }),

    table.column({
      accessor: 'status',
      id: 'status',
      header: 'status'
    }),

    table.column({
      accessor: 'notes',
      id: 'notes',
      header: 'notes'
    }),

    // table.column({
    //   accessor: 'person',
    //   id: 'lastname',
    //   header: 'lastname',
    //   cell: ({ value }) => {
    //     return value.lastname ?? 'N/A';
    //   }
    // }),
    // table.column({
    //   accessor: 'person',
    //   id: 'middlename',
    //   header: 'middlename',
    //   cell: ({ value }) => {
    //     return value.middlename ?? 'N/A';
    //   }
    // }),
    // table.column({
    //   accessor: 'person',
    //   id: 'email',
    //   header: 'email',
    //   cell: ({ value }) => {
    //     return value.email ?? 'N/A';
    //   }
    // }),
    // table.column({
    //   accessor: 'person',
    //   id: 'phonenumber',
    //   header: 'phonenumber',
    //   cell: ({ value }) => {
    //     return value.phonenumber ?? 'N/A';
    //   }
    // }),
    // table.column({
    //   accessor: 'person',
    //   id: 'dateofbirth',
    //   header: 'dateofbirth',
    //   cell: ({ value }) => {
    //     return value.dateofbirth ?? 'N/A';
    //   }
    // }),
    // table.column({
    //   accessor: 'person',
    //   id: 'gender',
    //   header: 'gender',
    //   cell: ({ value }) => value.gender ?? 'N/A'
    // }),
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
                  await deleteStudy(id);
                  toast.success('patient deleted');
                  refetch();
                },
                update_form: createRender(StudyForm, {
                  data: item.value,
                  onSubmit: async (data) => {
                    await updateStudy(data);
                    toast.info('Study updated');
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
  <div class="gap-10px flex items-end py-4">
    {#if !readonly}
      <Dialog.Root>
        <Dialog.Trigger class="ml-auto">
          <Button>New Study</Button>
        </Dialog.Trigger>
        <Dialog.Content class="w-full max-w-[1500px]">
          <StudyForm
            onSubmit={async (data) => {
              console.log(data);
              await createStudy(data);
              toast.info('Study created');
              refetch();
            }}
            data={{
              notes: '',
              status: 'Planned',
              deviceid: 0,
              patientid: 0,
              userid: 0
            }}
          >
            <svelte:fragment slot="title">Create new study</svelte:fragment>
            <svelte:fragment slot="button">Create</svelte:fragment>
          </StudyForm>
        </Dialog.Content>
      </Dialog.Root>
    {/if}
  </div>
  <Table {colsFn} {fetchFn} items={patients} bind:refetch />
</div>
