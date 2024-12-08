<script lang="ts">
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';

  export let readonly;

  type Item = $$Generic<Record<string, unknown>>;
  export let name: FormPath<Item>;
  export let value: any;
  export let form: SuperForm<Item>;
</script>

<Field {form} {name}>
  <Control let:attrs>
    <Label><slot></slot></Label>
    <Input {...attrs} {readonly} bind:value />
  </Control>
  <FieldErrors />
</Field>
