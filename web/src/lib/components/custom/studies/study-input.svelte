<script lang="ts">
  import StudyTable from './study-table.svelte';
  import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
  import type { Study } from '$lib/types';
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import * as Select from '$lib/components/ui/select';
  import { _ as t } from 'svelte-i18n';

  type Item = $$Generic<Record<string, unknown>>;

  export let id: number;
  export let study: Study | null = null;
  export let name: FormPath<Item>;
  export let form: SuperForm<Item>;

  let str_id: string = String(study?.id ?? '');

  $: id = Number(str_id);
</script>

<Field {form} {name}>
  <Control let:attrs>
    <Label><slot>{$t('select-study')}</slot></Label>
    <Select.Root>
      <Select.Trigger>
        {#if study == null}
          <Select.Value placeholder={$t('select-study')} />
        {:else}
          <Select.Value
            placeholder="{study.patient?.person.firstname} {study.patient?.person.middlename} {$t(
              'with'
            )} {study?.device?.devicesn} {$t('at')} {study?.device?.location}
           "
          />
        {/if}
      </Select.Trigger>
      <Select.Content>
        <div class="w-full overflow-x-auto">
          <Select.Group>
            <RadioGroup.Root bind:value={str_id}>
              <StudyTable id_selector readonly bind:selected={study} />
              <RadioGroup.Input name="spacing" />
            </RadioGroup.Root>
          </Select.Group>
        </div>
      </Select.Content>
    </Select.Root>
  </Control>
  <FieldErrors />
</Field>
