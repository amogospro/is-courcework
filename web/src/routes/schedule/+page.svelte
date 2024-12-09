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

  const iso2Calendar = (s: string) => moment(s).format('YYYY-MM-DD HH:mm');
  const calendar2Iso = (s: string) => moment(s, 'YYYY-MM-DD HH:mm').toISOString(true);

  let calendar_div: HTMLDivElement;
  const sus = [
    {
      id: 1,
      title: 'Coffee with John',
      start: '2023-12-01',
      end: '2023-12-01'
    },
    {
      id: 2,
      title: 'Breakfast with Sam',
      description: 'Discuss the new project',
      location: 'Starbucks',
      start: '2023-11-29 05:00',
      end: '2023-11-29 06:00'
    },
    {
      id: 3,
      title: 'Gym',
      start: '2023-11-27 06:00',
      end: '2023-11-27 07:00',
      calendarId: 'leisure'
    },
    {
      id: 4,
      title: 'Media fasting',
      start: '2023-12-01',
      end: '2023-12-03',
      calendarId: 'leisure'
    },
    {
      id: 5,
      title: 'Some appointment',
      people: ['John'],
      start: '2023-12-03 03:00',
      end: '2023-12-03 04:30'
    },
    {
      id: 6,
      title: 'Other appointment',
      people: ['Susan', 'Mike'],
      start: '2023-12-03 03:00',
      end: '2023-12-03 04:00',
      calendarId: 'leisure'
    }
  ];
  const schedule = writable<Schedule[]>([]);
  const calendarApp = createCalendar({
    views: [viewMonthGrid, viewMonthAgenda, viewWeek, viewDay],
    selectedDate: iso2Calendar(today(getLocalTimeZone()).toString()),
    defaultView: viewWeek.name,
    events: [],
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
        toast.info('Event updated');
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
      location: `Device: ${getDeviceStuff(event.study?.device)}`,
      people: [`Doctor: ${getPersonStuff(event.study?.user?.person)}`],
      title: `Patient: ${getPersonStuff(event.study?.patient?.person)}`,
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
    toast.info('Event updated');
    refetch();
  };
</script>

<div class="grid grid-cols-2">
  <div>
    <Dialog.Root>
      <Dialog.Trigger class="ml-auto">
        <Button>New event</Button>
      </Dialog.Trigger>
      <Dialog.Content class="w-full max-w-[1500px]">
        <ScheduleForm
          onSubmit={async (data) => {
            console.log(data);
            await createSchedule(data);
            toast.info('Patient created');
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
          <svelte:fragment slot="title">Create new event</svelte:fragment>
          <svelte:fragment slot="button">Create</svelte:fragment>
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
