<script lang="ts">
  import { writable } from 'svelte/store';
  import { getPersonStuff, type AuditLog } from '$lib/types';
  import _ from 'lodash';
  import { getLogs } from '$lib/api';
  import { type ColsFn } from '$lib/components/custom/table/table';
  import Table from '$lib/components/custom/table/data-table.svelte';
  import { _ as t } from 'svelte-i18n';
  import moment from 'moment';

  export let logs = writable<AuditLog[]>([]);
  export let readonly = false;
  export let selected: AuditLog | null = null;
  export let id_selector = false;

  const fetchFn = getLogs;
  let refetch: () => any;

  const colsFn: ColsFn<AuditLog> = (table) => [
    table.column({
      accessor: 'actiontype',
      header: $t('actiontype')
    }),
    // table.column({
    //   accessor: 'details',
    //   header: $t('details')
    // }),
    table.column({
      accessor: 'entity',
      header: $t('object')
    }),
    table.column({
      accessor: 'userid',
      header: $t('person'),
      cell: ({ value }) => {
        const formatted = getPersonStuff(value.person);
        return formatted;
      }
    }),
    table.column({
      accessor: 'timestamp',
      header: $t('when'),
      cell: ({ value }) => {
        const formatted = moment(value).fromNow();
        return formatted;
      }
    })
  ];
</script>

<div>
  <Table {colsFn} {fetchFn} items={logs} bind:refetch />
</div>
