<script lang="ts">
  // import { createCalendar, viewDay, viewWeek } from '@schedule-x/calendar';
  import '@schedule-x/theme-default/dist/index.css';
  import TimeGridEvent from '$lib/TimeGridEvent.svelte';
  import {
    createCalendar,
    viewDay,
    viewMonthAgenda,
    viewMonthGrid,
    viewWeek,
    type CalendarEventExternal
  } from '@schedule-x/calendar';
  import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
  import { createEventModalPlugin } from '@schedule-x/event-modal';
  import '@schedule-x/theme-default/dist/index.css';
  import * as Dialog from '$lib/components/ui/dialog';
  import { Button } from '$lib/components/ui/button';
  import ScheduleForm from '$lib/components/custom/schedule/schedule-form.svelte';
  import { createSchedule, getSchedules, updateSchedule } from '$lib/api';
  import { toast } from 'svelte-sonner';
  import { mode } from 'mode-watcher';
  import moment from 'moment';
  import { getLocalTimeZone, today } from '@internationalized/date';
  import { getDeviceStuff, getPersonStuff, type Schedule } from '$lib/types';
  import { writable } from 'svelte/store';
  import { createResizePlugin } from '@schedule-x/resize';
  import { onMount } from 'svelte';
  import { _ as t } from 'svelte-i18n';
  import { locale, waitLocale } from 'svelte-i18n';

  const iso2Calendar = (s: string) => moment(s).format('YYYY-MM-DD HH:mm');
  const calendar2Iso = (s: string) => moment(s, 'YYYY-MM-DD HH:mm').toISOString(true);

  let calendar_div: HTMLDivElement;

  const schedule = writable<Schedule[]>([]);
  const calendarApp = createCalendar({
    views: [viewMonthGrid, viewMonthAgenda, viewWeek, viewDay],
    selectedDate: iso2Calendar(today(getLocalTimeZone()).toString()),
    defaultView: viewWeek.name,
    events: [],
    locale: $locale ?? 'en-US',
    calendars: {
      leisure: {
        colorName: 'leisure',
        lightColors: {
          main: '#1c7df9',
          container: '#d2e7ff',
          onContainer: '#002859'
        },
        darkColors: {
          main: '#c0dfff',
          onContainer: '#dee6ff',
          container: '#426aa2'
        }
      }
    },
    plugins: [createDragAndDropPlugin(), createEventModalPlugin(), createResizePlugin()],
    callbacks: {
      onRangeUpdate(range) {
        refetch(range);
      },
      async onEventUpdate(event) {
        const updated = fromEvent(event);
        const res = await updateSchedule(updated);
        toast.info($t('event-updated'));
      },
      onEventClick(event) {
        update_key++;
        update_schedule = fromEvent(event);
      },
      onDoubleClickEvent(event) {
        console.log('onDoubleClickEvent', event);
      },
      beforeRender($app) {
        const t = $app.calendarState.range;
        t.peek();
      }
    }
  });
  type Range = { start: string; end: string };
  let range: Range | null = null;
  const refetch = async (new_range: Range | null = null) => {
    if (new_range == null) new_range = range;
    if (new_range == null) throw Error('no Range');
    range = new_range;

    const q = new URLSearchParams([
      ['start', moment(new_range.start).toISOString()],
      ['end', moment(new_range.end).toISOString()]
    ]);
    console.log(q.toString());
    const events = await getSchedules(q);
    schedule.set(events);
    const converted = toEvents(events);
    calendarApp.events.set(converted);
    console.log(events);
  };
  $: calendarApp.setTheme($mode ?? 'dark');
  // calendarApp.events.add('');
  const toEvents = (events: Schedule[]): CalendarEventExternal[] =>
    events.map((event) => ({
      id: event.id ?? Math.random() * 1000000000,
      start: iso2Calendar(event.starttime),
      end: iso2Calendar(event.endtime),
      location: `${$t('device')}: ${getDeviceStuff(event.study?.device)}`,
      people: [`${$t('doctor')}: ${getPersonStuff(event.study?.user?.person)}`],
      title: `${$t('patient')}: ${getPersonStuff(event.study?.patient?.person)}`,
      description: event.comments

      // title: `Doctor: ${getPersonStuff(event.study?.user?.person)} \n
      // Device: ${getDeviceStuff(event.study?.device)}\n
      // Comments: ${event.comments}\n
      // `
    }));

  const fromEvent = (event: CalendarEventExternal): Schedule => {
    const original = $schedule.find((item) => item.id === event.id);
    if (!original) throw new Error('Original event not found');
    const res = {
      ...original,
      starttime: calendar2Iso(event.start),
      endtime: calendar2Iso(event.end),
      studyid: original.study?.id ?? 0,
      scheduledbyuserid: original.scheduledbyuser?.id ?? 0
    };
    console.log(res);
    return res;
  };

  onMount(() => {
    calendarApp.render(calendar_div);

    refetch({
      start: today(getLocalTimeZone()).subtract({ weeks: 1 }).toString(),
      end: today(getLocalTimeZone()).add({ weeks: 1 }).toString()
    });
  });
  let update_key = 0;

  let update_schedule: Schedule | null = null;
  const doUpdate = async (schedule: Schedule) => {
    if (!schedule) return;
    console.log(schedule);
    const res = await updateSchedule(schedule);
    toast.info($t('event-updated'));
    refetch();
  };
</script>

<div class="grid grid-cols-2">
  <div>
    <Dialog.Root>
      <Dialog.Trigger class="ml-auto">
        <Button>{$t('new-event')}</Button>
      </Dialog.Trigger>
      <Dialog.Content class="w-full max-w-[1500px]">
        <ScheduleForm
          onSubmit={async (data) => {
            console.log(data);
            await createSchedule(data);
            toast.info($t('event-created'));
            // refetch();
          }}
          data={{
            scheduledbyuserid: 0,
            starttime: '',
            endtime: '',
            studyid: 0,
            comments: ''
          }}
        >
          <svelte:fragment slot="title">{$t('create-new-event')}</svelte:fragment>
          <svelte:fragment slot="button">{$t('create')}</svelte:fragment>
        </ScheduleForm>
      </Dialog.Content>
    </Dialog.Root>
    <div>
      {#key update_key}
        {#if update_schedule}
          <ScheduleForm bind:data={update_schedule} onSubmit={doUpdate} />
        {/if}
      {/key}
    </div>
  </div>

  <div bind:this={calendar_div}></div>
  <!-- <ScheduleXCalendar {calendarApp} timeGridEvent={TimeGridEvent} /> -->
  <!-- <ScheduleXCalendar calendarApp={calendar} timeGridEvent={TimeGridEvent} /> -->
</div>
