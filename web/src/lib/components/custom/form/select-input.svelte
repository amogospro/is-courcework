<script lang="ts">
  import _ from 'lodash';
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import * as Select from '$lib/components/ui/select';

  export let readonly = false;

  type Item = $$Generic<Record<string, unknown>>;
  export let name: FormPath<Item>;
  export let value: any;
  export let placeholder: string;
  export let form: SuperForm<Item>;

  export let options: any[];
  $: selected = value
    ? {
        label: _.startCase(_.toLower(value)),
        value: value
      }
    : undefined;
</script>

<Field {form} {name}>
  <Control let:attrs>
    <Label><slot /></Label>
    <Select.Root
      portal={null}
      {selected}
      onSelectedChange={(v) => {
        v && (value = v.value);
      }}
    >
      <Select.Trigger>
        <Select.Value {placeholder} />
      </Select.Trigger>
      {#if !readonly}
        <Select.Content>
          <Select.Group>
            <Select.Label><slot /></Select.Label>
            {#each options as option}
              {@const label = _.startCase(_.toLower(option))}
              <Select.Item value={option} {label}>
                {label}
              </Select.Item>
            {/each}
          </Select.Group>
        </Select.Content>
      {/if}
    </Select.Root>
  </Control>
  <FieldErrors />
</Field>
