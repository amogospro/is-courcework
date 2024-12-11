<script lang="ts">
  import _ from 'lodash';
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import * as Popover from '$lib/components/ui/popover/index.js';
  import { Button } from '$lib/components/ui/button';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import { DateFormatter, type DateValue, parseDate } from '@internationalized/date';
  import { cn } from '$lib/utils';
  import { Calendar } from '$lib/components/ui/calendar/index.js';
  import { onMount } from 'svelte';
  export let readonly = false;

  type Item = $$Generic<Record<string, unknown>>;
  export let name: FormPath<Item>;
  export let value: any;
  export let placeholder: string;
  export let form: SuperForm<Item>;

  onMount(() => {
    try {
      date = parseDate(value);
    } catch (e) {}
  });
  const df = new DateFormatter('ru-RU', {
    dateStyle: 'long'
  });

  let date: DateValue | undefined = undefined;

  // onMount
  $: if (date) {
    value = date.toString() as any;
  }
</script>

<Field {form} {name}>
  <Control let:attrs>
    <Label><slot /></Label>
    <Popover.Root>
      <Popover.Trigger asChild let:builder>
        <Button
          variant="outline"
          class={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
          builders={[builder]}
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {date ? df.format(date.toDate('UTC')) : placeholder}
        </Button>
      </Popover.Trigger>
      <Popover.Content class="w-auto p-0">
        <Calendar bind:value={date} initialFocus />
      </Popover.Content>
    </Popover.Root>
  </Control>
  <FieldErrors />
</Field>
