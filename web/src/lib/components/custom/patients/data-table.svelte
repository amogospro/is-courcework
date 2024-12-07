<script lang="ts">
  import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
  import {
    addPagination,
    addSortBy,
    addTableFilter,
    addHiddenColumns,
    addSelectedRows,
    type SortKey
  } from 'svelte-headless-table/plugins';
  import * as Dialog from '$lib/components/ui/dialog';
  import { writable } from 'svelte/store';
  import ArrowUp from 'lucide-svelte/icons/arrow-up';
  import ArrowDown from 'lucide-svelte/icons/arrow-down';
  import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
  import * as Table from '$lib/components/ui/table';
  import DataTableActions from './data-table-actions.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { Patient } from '$lib/types';
  import _ from 'lodash';
  import { toast } from 'svelte-sonner';
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  import IdActions from './id-actions.svelte';
  import { createPatient, deletePatient, getPatients } from '$lib/api';
  import PatientForm from './patient-form.svelte';

  export let patients = writable<Patient[]>([]);

  export let readonly = false;

  const table = createTable(patients, {
    page: addPagination({ initialPageSize: readonly ? Infinity : 10 }),
    sort: addSortBy({ disableMultiSort: true, serverSide: true }),
    filter: addTableFilter({
      serverSide: true,
      includeHiddenColumns: true
    }),
    hide: addHiddenColumns(),
    select: addSelectedRows()
  });

  const columns = table.createColumns([
    // Name Column
    table.column({
      accessor: (item) => item,
      header: 'ID',
      cell: (item) => {
        return createRender(IdActions, {
          id: String(item.value.id),
          data: item.value
        });
      }
    }),
    // Name Column
    table.column({
      accessor: 'insurancepolicynumber',
      header: 'Номер страхового полиса'
    }),
    // Name Column
    table.column({
      accessor: (item) => item,
      header: 'firstname',
      cell: ({ value }) => {
        return value.person ? value.person.firstname : 'N/A';
      }
    }),
    table.column({
      accessor: (item) => item,
      header: 'lastname',
      cell: ({ value }) => {
        return value.person ? value.person.lastname : 'N/A';
      }
    }),
    table.column({
      accessor: (item) => item,
      header: 'middlename',
      cell: ({ value }) => {
        return value.person ? (value.person.middlename ?? 'N/A') : 'N/A';
      }
    }),
    table.column({
      accessor: (item) => item,
      header: 'email',
      cell: ({ value }) => {
        return value.person ? (value.person.email ?? 'N/A') : 'N/A';
      }
    }),
    table.column({
      accessor: (item) => item,
      header: 'phonenumber',
      cell: ({ value }) => {
        return value.person ? (value.person.phonenumber ?? 'N/A') : 'N/A';
      }
    }),
    table.column({
      accessor: (item) => item,
      header: 'dateofbirth',
      cell: ({ value }) => {
        return value.person ? (value.person.dateofbirth ?? 'N/A') : 'N/A';
      }
    }),
    table.column({
      accessor: (item) => item,
      header: 'gender',
      cell: ({ value }) => {
        return value.person ? (value.person.gender ?? 'N/A') : 'N/A';
      }
    }),
    table.column({
      accessor: (item) => item,
      header: '',
      cell: (item) => {
        const id = item.value.id;
        if (!id) throw new Error('no id');
        return createRender(DataTableActions, {
          id: String(item.value.id),
          data: item.value,
          onDelete: async () => {
            await deletePatient(id);
            toast.success('patient deleted');
            simpleRefetch();
          },
          onUpdate: async () => {
            simpleRefetch();
          }
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
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns, rows } =
    table.createViewModel(columns);

  const { pageIndex, pageSize } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
  const { hiddenColumnIds } = pluginStates.hide;
  const { selectedDataIds } = pluginStates.select;
  const { sortKeys } = pluginStates.sort;

  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);

  const hidableCols = [
    'name',
    'price',
    'manufactureCost',
    'rating',
    'unitOfMeasure',
    'manufacturer',
    'owner.name'
  ];
  let hasNextPage = writable(false),
    hasPreviousPage = writable(false);

  const checkPages = async () => {};

  const fetchWithQuery = async (
    update: boolean,
    pageSize: number,
    pageIndex: number,
    sortKeys: SortKey[],
    filterValue: string
  ) => {
    if (pageIndex < 0) throw new Error('invalid page index');
    const q = new URLSearchParams();
    q.set('size', String(pageSize));
    q.set('page', String(pageIndex));
    let data = await getPatients(q);
    return data;
  };

  const refetch = async (
    pageSize: number,
    pageIndex: number,
    sortKeys: SortKey[],
    filterValue: string
  ) => {
    const { content, last, first } = await fetchWithQuery(
      true,
      pageSize,
      pageIndex,
      sortKeys,
      filterValue
    );
    patients.set(content);
    hasNextPage.set(!last);
    hasPreviousPage.set(!first);
  };
  $: {
    if (!readonly) simpleRefetch();
  }

  const simpleRefetch = () => refetch($pageSize, $pageIndex, $sortKeys, $filterValue);
  onMount(() => {
    simpleRefetch();
  });

  const fruits = [
    { label: 'Name', value: 'name' },
    { label: 'Owner name', value: 'owner.name' },
    { label: 'Manufacturer', value: 'manufacturer.name' }
  ];

  let selectedOwner: any;
  $: console.log(selectedOwner);
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
  <div class="rounded-md border">
    <Table.Root {...$tableAttrs}>
      <Table.Header>
        {#each $headerRows as headerRow}
          <Subscribe rowAttrs={headerRow.attrs()}>
            <Table.Row>
              {#each headerRow.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                  <Table.Head {...attrs} class="[&:has([role=checkbox])]:pl-3">
                    {#if cell.id === 'amount'}
                      <div class="text-right font-medium">
                        <Render of={cell.render()} />
                      </div>
                    {:else if ['name', 'Manufacturer', 'owner'].includes(cell.id)}
                      <Button variant="ghost" on:click={props.sort.toggle}>
                        <Render of={cell.render()} />
                        {#if props.sort.order === 'asc'}
                          <ArrowUp
                            class={cn(
                              $sortKeys[0]?.id === cell.id && 'text-foreground',
                              'ml-2 h-4 w-4'
                            )}
                          />
                        {:else if props.sort.order === 'desc'}
                          <ArrowDown
                            class={cn(
                              $sortKeys[0]?.id === cell.id && 'text-foreground',
                              'ml-2 h-4 w-4'
                            )}
                          />
                        {:else}
                          <ArrowUpDown
                            class={cn(
                              $sortKeys[0]?.id === cell.id && 'text-foreground',
                              'ml-2 h-4 w-4'
                            )}
                          />
                        {/if}
                      </Button>
                    {:else}
                      <Render of={cell.render()} />
                    {/if}
                  </Table.Head>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Header>
      <Table.Body {...$tableBodyAttrs}>
        {#each $rows as row (row.id)}
          <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
            <Table.Row {...rowAttrs} data-state={$selectedDataIds[row.id] && 'selected'}>
              {#each row.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs>
                  <Table.Cell {...attrs} class="[&:has([role=checkbox])]:pl-3">
                    <Render of={cell.render()} />
                  </Table.Cell>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
  {#if !readonly}
    <div class="flex items-center justify-end space-x-4 py-4">
      <Button
        variant="outline"
        size="sm"
        on:click={() => ($pageIndex = $pageIndex - 1)}
        disabled={!$hasPreviousPage}>Previous</Button
      >
      <Button
        variant="outline"
        size="sm"
        disabled={!$hasNextPage}
        on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
      >
    </div>
  {/if}
</div>
