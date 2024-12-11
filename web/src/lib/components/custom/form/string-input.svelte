<script lang="ts">
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import { Textarea } from '$lib/components/ui/textarea/index.js';
  export let readonly = false;

  type Item = $$Generic<Record<string, unknown>>;
  export let name: FormPath<Item>;
  export let value: any;
  export let form: SuperForm<Item>;
  export let area = false;
</script>

<Field {form} {name}>
  <Control let:attrs>
    <Label><slot></slot></Label>
    {#if area}
      <Textarea {...attrs} placeholder="" bind:value />
    {:else}
      <Input {...attrs} {readonly} bind:value />
    {/if}
  </Control>
  <FieldErrors />
</Field>
