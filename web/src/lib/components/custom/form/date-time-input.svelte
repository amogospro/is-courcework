<script lang="ts">
  import _ from 'lodash';
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import * as Popover from '$lib/components/ui/popover/index.js';
  import { Button } from '$lib/components/ui/button';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import {
    type DateValue,
    ZonedDateTime,
    getLocalTimeZone,
    parseAbsoluteToLocal
  } from '@internationalized/date';
  import { cn } from '$lib/utils';
  import { Calendar } from '$lib/components/ui/calendar/index.js';
  import { onMount } from 'svelte';
  import { format } from 'date-fns';
  import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

  export let name: FormPath<Item>;
  export let value: any;
  export let placeholder: string;
  export let form: SuperForm<Item>;

  type Item = $$Generic<Record<string, unknown>>;

  export let readonly;

  onMount(() => {
    try {
      console.log(value);
      date = parseAbsoluteToLocal(value);
      raw_date = date;
      minute = date.minute;
      hour = date.hour;
    } catch (e) {
      console.log(e);
    }
  });

  let raw_date: DateValue | undefined = undefined;
  let date: ZonedDateTime | undefined = undefined;

  const onRawUpdate = (raw_date: DateValue) => {
    if (!date) {
      date = new ZonedDateTime(
        raw_date.year,
        raw_date.month,
        raw_date.day,
        getLocalTimeZone(),
        10800000
        // hour,
        // minute
      );
      //   date = parseAbsoluteToLocal(raw_date.toString());
    }
    date = date.set({
      minute,
      hour,
      year: raw_date.year,
      month: raw_date.month,
      day: raw_date.day
    });
  };
  const onUpdate = (date: ZonedDateTime) => {
    value = date.toDate().toISOString();
  };

  $: if (raw_date) onRawUpdate(raw_date);
  $: if (minute != null && hour != null && date) onUpdate(date);

  let minute = 0;
  let hour = 0;
  const handleTimeChange = (type: 'hour' | 'minute' | 'ampm', value: any) => {
    if (raw_date) {
      if (type === 'hour') {
        hour = parseInt(value);
        raw_date = raw_date.set({ hour });
      } else if (type === 'minute') {
        minute = parseInt(value);
        raw_date = raw_date.set({ minute });
      }
    }
  };
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
          {date ? format(date.toDate(), 'dd/MM/yyyy HH:mm') : placeholder}
        </Button>
      </Popover.Trigger>
      <Popover.Content class="w-auto p-0">
        <div class="sm:flex">
          <Calendar bind:value={raw_date} initialFocus />
          <div class="flex flex-col divide-y sm:h-[300px] sm:flex-row sm:divide-x sm:divide-y-0">
            <ScrollArea class="w-64 sm:w-auto">
              <div class="flex p-2 sm:flex-col">
                {#each Array.from({ length: 23 }, (_, i) => i) as hour}
                  <Button
                    size="icon"
                    variant={date && date.hour === hour ? 'default' : 'ghost'}
                    class="aspect-square shrink-0 sm:w-full"
                    on:click={() => handleTimeChange('hour', hour.toString())}
                  >
                    {hour}
                  </Button>
                {/each}
              </div>
            </ScrollArea>
            <ScrollArea class="w-64 sm:w-auto">
              <div class="flex p-2 sm:flex-col">
                {#each Array.from({ length: 12 }, (_, i) => i * 5) as minute}
                  <Button
                    size="icon"
                    variant={date && date.minute === minute ? 'default' : 'ghost'}
                    class="aspect-square shrink-0 sm:w-full"
                    on:click={() => handleTimeChange('minute', minute.toString())}
                  >
                    {minute}
                  </Button>
                {/each}
              </div>
            </ScrollArea>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  </Control>
  <FieldErrors />
</Field>
