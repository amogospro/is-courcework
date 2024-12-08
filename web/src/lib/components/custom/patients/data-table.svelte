<script lang="ts">
  import { createRender } from 'svelte-headless-table';

  import * as Dialog from '$lib/components/ui/dialog';
  import { writable } from 'svelte/store';

  import DataTableActions from '$lib/components/custom/table/data-table-actions.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { Patient } from '$lib/types';
  import _ from 'lodash';
  import { toast } from 'svelte-sonner';
  import { createPatient, deletePatient, getPatients, updatePatient } from '$lib/api';
  import PatientForm from './patient-form.svelte';
  import { type ColsFn } from '$lib/components/custom/table/table';
  import Table from '$lib/components/custom/table/data-table.svelte';

  export let patients = writable<Patient[]>([]);

  export let readonly = false;

  const fetchFn = getPatients;

  let refetch: () => any;

  const colsFn: ColsFn<Patient> = (table) => [
    // Name Column
    table.column({
      accessor: 'insurancepolicynumber',
      header: 'Номер страхового полиса'
    }),
    // Name Column
    table.column({
      accessor: 'person',
      id: 'firstname',
      header: 'firstname',
      cell: ({ value }) => {
        return value.firstname ?? 'N/A';
      }
    }),
    table.column({
      accessor: 'person',
      id: 'lastname',
      header: 'lastname',
      cell: ({ value }) => {
        return value.lastname ?? 'N/A';
      }
    }),
    table.column({
      accessor: 'person',
      id: 'middlename',
      header: 'middlename',
      cell: ({ value }) => {
        return value.middlename ?? 'N/A';
      }
    }),
    table.column({
      accessor: 'person',
      id: 'email',
      header: 'email',
      cell: ({ value }) => {
        return value.email ?? 'N/A';
      }
    }),
    table.column({
      accessor: 'person',
      id: 'phonenumber',
      header: 'phonenumber',
      cell: ({ value }) => {
        return value.phonenumber ?? 'N/A';
      }
    }),
    table.column({
      accessor: 'person',
      id: 'dateofbirth',
      header: 'dateofbirth',
      cell: ({ value }) => {
        return value.dateofbirth ?? 'N/A';
      }
    }),
    table.column({
      accessor: 'person',
      id: 'gender',
      header: 'gender',
      cell: ({ value }) => value.gender ?? 'N/A'
    }),
    table.column({
      accessor: (item) => item,
      header: '',
      cell: (item) => {
        const id = item.value.id;
        if (!id) throw new Error('no id');
        return createRender(DataTableActions, {
          onDelete: async () => {
            await deletePatient(id);
            toast.success('patient deleted');
            refetch();
          },
          update_form: createRender(PatientForm, {
            data: item.value,
            onSubmit: async (data) => {
              await updatePatient(data);
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
  ];
</script>

<div>
  <div class="gap-10px flex items-end py-4">
    {#if !readonly}
      <Dialog.Root>
        <Dialog.Trigger class="ml-auto">
          <Button>New Patient</Button>
        </Dialog.Trigger>
        <Dialog.Content class="w-full max-w-[1500px]">
          <PatientForm
            onSubmit={async (data) => {
              console.log(data);
              await createPatient(data);
              toast.info('Patient created');
              refetch();
            }}
            data={{
              person: {
                firstname: '',
                lastname: '',
                dateofbirth: '',
                phonenumber: '',
                email: '',
                address: '',
                gender: 'O'
              },
              insurancepolicynumber: ''
            }}
          >
            <svelte:fragment slot="title">Create new patient</svelte:fragment>
            <svelte:fragment slot="button">Create</svelte:fragment>
          </PatientForm>
        </Dialog.Content>
      </Dialog.Root>
    {/if}
  </div>
  <Table {colsFn} {fetchFn} items={patients} bind:refetch />
</div>
