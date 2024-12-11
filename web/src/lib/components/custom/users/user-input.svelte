<script lang="ts">
  import UsersTable from './users-table.svelte';
  import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
  import type { User } from '$lib/types';
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import * as Select from '$lib/components/ui/select';
  import { _ as t } from 'svelte-i18n';

  type Item = $$Generic<Record<string, unknown>>;

  export let id: number;
  export let user: User | null = null;
  export let name: FormPath<Item>;
  export let form: SuperForm<Item>;

  let str_id: string = String(user?.id ?? '');
  $: id = Number(str_id);
</script>

<Field {form} {name}>
  <Control let:attrs>
    <Label><slot>{$t('select-user')}</slot></Label>
    <Select.Root>
      <Select.Trigger>
        {#if user?.person == null}
          <Select.Value placeholder={$t('select-user')} />
        {:else}
          <Select.Value
            placeholder="{user?.person.firstname} {user?.person.lastname} 
           {user?.person.middlename}"
          />
        {/if}
      </Select.Trigger>
      <Select.Content>
        <div class="w-full overflow-x-auto">
          <Select.Group>
            <RadioGroup.Root bind:value={str_id}>
              <UsersTable id_selector readonly bind:selected={user} />
              <RadioGroup.Input name="spacing" />
            </RadioGroup.Root>
          </Select.Group>
        </div>
      </Select.Content>
    </Select.Root>
  </Control>
  <FieldErrors />
</Field>
