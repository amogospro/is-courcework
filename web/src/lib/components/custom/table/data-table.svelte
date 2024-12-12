<script lang="ts">
  import _ from 'lodash';

  import { Input } from '$lib/components/ui/input';

  import type { Writable } from 'svelte/store';
  import { onMount } from 'svelte';

  import { amogus, type ColsFn, type FetchFn } from './table';

  import ArrowUp from 'lucide-svelte/icons/arrow-up';
  import ArrowDown from 'lucide-svelte/icons/arrow-down';
  import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
  import * as Table from '$lib/components/ui/table';
  import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils';
  import { _ as t } from 'svelte-i18n';
  import { type Response } from '$lib/api';

  export type Item = $$Generic;
  export let items: Writable<Item[]>;
  export let fetchFn: FetchFn<Item>;
  export let colsFn: ColsFn<Item>;
  export let readonly = false;

  export let filters: Record<string, string> = {};
  const {
    pageIndex,
    filterValue,
    hiddenColumnIds,
    selectedDataIds,
    sortKeys,
    pageSize,
    hasPreviousPage,
    hasNextPage,
    headerRows,
    pageRows,
    tableAttrs,
    tableBodyAttrs,
    flatColumns,
    rows,
    fetchData
  } = amogus(items, fetchFn, colsFn);
  export const refetch = () => fetchData($pageSize, $pageIndex, filters);

  $: if (filters || $pageSize || $pageIndex) refetch();
  onMount(() => {
    refetch();
  });
  $: {
    if (!readonly) refetch();
  }
</script>

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
                  {:else if _.has(filters, cell.id)}
                    <div class="flex items-center gap-2">
                      <Render of={cell.render()} />

                      <Input
                        class="max-w-100px"
                        placeholder={$t('filter-by')}
                        bind:value={filters[cell.id]}
                      />
                    </div>
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
      disabled={!$hasPreviousPage}>{$t('previous')}</Button
    >
    <Button
      variant="outline"
      size="sm"
      disabled={!$hasNextPage}
      on:click={() => ($pageIndex = $pageIndex + 1)}>{$t('next')}</Button
    >
  </div>
{/if}
