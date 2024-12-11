<script lang="ts">
  import { createRender } from 'svelte-headless-table';

  import * as Dialog from '$lib/components/ui/dialog';
  import { writable } from 'svelte/store';

  import DataTableActions from '$lib/components/custom/table/data-table-actions.svelte';
  import { Button } from '$lib/components/ui/button';
  import type { User } from '$lib/types';
  import _ from 'lodash';
  import { toast } from 'svelte-sonner';
  import { createUser, deleteUser, getUsers, updateUser } from '$lib/api';
  import UserForm from './user-form.svelte';
  import { type ColsFn } from '$lib/components/custom/table/table';
  import Table from '$lib/components/custom/table/data-table.svelte';
  import IdActions from '../table/id-actions.svelte';
  import { _ as t } from 'svelte-i18n';

  export let users = writable<User[]>([]);

  export let readonly = false;
  export let selected: User | null = null;
  export let id_selector = false;
  const fetchFn = getUsers;
  let refetch: () => any;

  const colsFn: ColsFn<User> = (table) => [
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
      accessor: 'username',
      header: $t('username')
    }),
    // Name Column
    table.column({
      accessor: 'person',
      id: 'firstname',
      header: $t('firstname'),
      cell: ({ value }) => {
        return value.firstname ?? $t('n-a');
      }
    }),
    table.column({
      accessor: 'person',
      id: 'lastname',
      header: $t('lastname'),
      cell: ({ value }) => {
        return value.lastname ?? $t('n-a');
      }
    }),
    table.column({
      accessor: 'person',
      id: 'middlename',
      header: $t('middlename'),
      cell: ({ value }) => {
        return value.middlename ?? $t('n-a');
      }
    }),
    table.column({
      accessor: 'person',
      id: 'email',
      header: $t('email'),
      cell: ({ value }) => {
        return value.email ?? $t('n-a');
      }
    }),
    table.column({
      accessor: 'person',
      id: 'phonenumber',
      header: $t('phonenumber'),
      cell: ({ value }) => {
        return value.phonenumber ?? $t('n-a');
      }
    }),
    table.column({
      accessor: 'person',
      id: 'dateofbirth',
      header: $t('dateofbirth'),
      cell: ({ value }) => {
        return value.dateofbirth ?? $t('n-a');
      }
    }),
    table.column({
      accessor: 'person',
      id: 'gender',
      header: $t('gender'),
      cell: ({ value }) => value.gender ?? $t('n-a')
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
                  await deleteUser(id);
                  toast.success($t('user-deleted'));
                  refetch();
                },
                update_form: createRender(UserForm, {
                  data: item.value,
                  onSubmit: async (data) => {
                    await updateUser(data);
                    toast.info($t('user-updated'));
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
          <Button>{$t('new-user')}</Button>
        </Dialog.Trigger>
        <Dialog.Content class="w-full max-w-[1500px]">
          <UserForm
            onSubmit={async (data) => {
              console.log(data);
              await createUser(data);
              toast.info($t('user-created'));
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
              username: ''
            }}
          >
            <svelte:fragment slot="title">{$t('create-new-user')}</svelte:fragment>
            <svelte:fragment slot="button">{$t('create')}</svelte:fragment>
          </UserForm>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  {/if}
  <Table {colsFn} {fetchFn} items={users} bind:refetch />
</div>
