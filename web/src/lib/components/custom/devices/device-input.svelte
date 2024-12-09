<script lang="ts">
  import { Input } from '$lib/components/ui/input';

  import DevicesTable from './devices-table.svelte';
  import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
  import type { Device } from '$lib/types';
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import * as Select from '$lib/components/ui/select';

  type Item = $$Generic<Record<string, unknown>>;

  export let id: number;
  export let device: Device | null = null;
  export let name: FormPath<Item>;
  export let form: SuperForm<Item>;

  let str_id: string = String(device?.id ?? '');

  $: id = Number(str_id);
</script>

<Field {form} {name}>
  <Control let:attrs>
    <Label><slot>Select device</slot></Label>
    <Select.Root>
      <Select.Trigger>
        {#if device == null}
          <Select.Value placeholder="Select device" />
        {:else}
          <Select.Value placeholder="{device?.devicesn} at {device?.location}" />
        {/if}
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <RadioGroup.Root bind:value={str_id}>
            <DevicesTable id_selector readonly bind:selected={device} />
            <RadioGroup.Input name="spacing" />
          </RadioGroup.Root>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  </Control>
  <FieldErrors />
</Field>
