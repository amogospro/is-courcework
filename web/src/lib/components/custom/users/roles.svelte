<script lang="ts">
  import api, { roles } from '$lib/api';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Gender, type UserWithRoles } from '$lib/types';
  import Plus from 'lucide-svelte/icons/plus';
  import X from 'lucide-svelte/icons/x';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import { toast } from 'svelte-sonner';
  import { _ as t } from 'svelte-i18n';
  import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  export let data: UserWithRoles;

  let role_str = '';
  export let refetch: () => any;

  const addRole = async () => {
    const res = await api.post(`/users/role?role=${role_str}&id=${data.id}`);
    role_str = '';
    toast.info('Role added');
    refetch();
  };

  const removeRole = async (role_str: string) => {
    const res = await api.delete(`/users/role?role=${role_str}&id=${data.id}`);
    toast.info('Role removed');
    refetch();
  };
</script>

<div class="max-w-200px flex flex-wrap items-center gap-2">
  {#each data.roles as role}
    <Badge variant="outline" class="justify-items-center gap-2">
      <div>
        {role.rolename}
      </div>

      <button on:click={() => removeRole(role.rolename)}>
        <X size="14" />
      </button>
    </Badge>
  {/each}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button variant="ghost" size="sm" builders={[builder]}><Plus size="14" /></Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
      <DropdownMenu.Label>{$t('select-role')}</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <div class="p-2">
        <RadioGroup.Root bind:value={role_str}>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="Администратор" id="r1" />
            <Label for="r1">Администратор</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="Врач" id="r2" />
            <Label for="r2">Врач</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="Техперсонал" id="r3" />
            <Label for="r3">Техперсонал</Label>
          </div>
          <RadioGroup.Input name="spacing" />
        </RadioGroup.Root>
      </div>

      <DropdownMenu.Item on:click={addRole}>
        <Plus class="mr-2 h-4 w-4" />
        <span>Add role</span>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
