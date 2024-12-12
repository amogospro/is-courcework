import { createTable } from 'svelte-headless-table';
import type { AnyPlugins } from 'svelte-headless-table/plugins';
import { writable, type Writable } from 'svelte/store';
import { type Response } from '$lib/api';
import {
  addPagination,
  addSortBy,
  addTableFilter,
  addHiddenColumns,
  addSelectedRows
} from 'svelte-headless-table/plugins';

export const sus = {
  page: addPagination(),
  sort: addSortBy(),
  filter: addTableFilter(),
  hide: addHiddenColumns(),
  select: addSelectedRows()
} satisfies AnyPlugins;

export type Sus = typeof sus;
export type ColsFn<Item> = (
  table: ReturnType<typeof createTable<Item, Sus>>
) => Parameters<typeof table.createColumns>[0];
export type FetchFn<Item> = (q: URLSearchParams) => Promise<Response<Item[]>>;

export const amogus = <Item>(
  data: Writable<Item[]>,
  fetchFn: FetchFn<Item>,
  cols: ColsFn<Item>
) => {
  const readonly = false;
  const table = createTable(data, {
    page: addPagination({ initialPageSize: readonly ? Infinity : 10 }),
    sort: addSortBy({ disableMultiSort: true, serverSide: true }),
    filter: addTableFilter({
      serverSide: true,
      includeHiddenColumns: true
    }),
    hide: addHiddenColumns(),
    select: addSelectedRows()
  });

  const columns = table.createColumns(cols(table));

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns, rows } =
    table.createViewModel(columns);

  const { pageIndex, pageSize } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
  const { hiddenColumnIds } = pluginStates.hide;
  const { selectedDataIds } = pluginStates.select;
  const { sortKeys } = pluginStates.sort;

  // const ids = flatColumns.map((col) => col.id);
  // let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

  // $: $hiddenColumnIds = Object.entries(hideForId)
  //   .filter(([, hide]) => !hide)
  //   .map(([id]) => id);

  const hasNextPage = writable(false),
    hasPreviousPage = writable(false);

  const fetchWithQuery = async (
    update: boolean,
    pageSize: number,
    pageIndex: number,
    extra: Record<string, string>
  ) => {
    if (pageIndex < 0) throw new Error('invalid page index');
    const q = new URLSearchParams();
    q.set('size', String(pageSize));
    q.set('page', String(pageIndex));
    Object.entries(extra).forEach(([key, val]) => {
      if (val) {
        q.set(key, val);
      }
    });
    // q.set
    const data = await fetchFn(q);
    return data;
  };

  const fetchData = async (pageSize: number, pageIndex: number, extra: Record<string, string>) => {
    const { content, last, first } = await fetchWithQuery(true, pageSize, pageIndex, extra);
    data.set(content);
    hasNextPage.set(!last);
    hasPreviousPage.set(!first);
  };

  return {
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
  };
};
