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
      header: 'username'
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
                  toast.success('user deleted');
                  refetch();
                },
                update_form: createRender(UserForm, {
                  data: item.value,
                  onSubmit: async (data) => {
                    await updateUser(data);
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
          <Button>New User</Button>
        </Dialog.Trigger>
        <Dialog.Content class="w-full max-w-[1500px]">
          <UserForm
            onSubmit={async (data) => {
              console.log(data);
              await createUser(data);
              toast.info('User created');
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
            <svelte:fragment slot="title">Create new user</svelte:fragment>
            <svelte:fragment slot="button">Create</svelte:fragment>
          </UserForm>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  {/if}
  <Table {colsFn} {fetchFn} items={users} bind:refetch />
</div>
