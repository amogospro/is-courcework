<script lang="ts">
  import { Gender, ScheduleSchema, type Schedule } from '$lib/types';
  import _ from 'lodash';
  import StringInput from '../form/string-input.svelte';
  import SelectInput from '../form/select-input.svelte';
  import DateInput from '../form/date-input.svelte';
  import Form from '../form/form.svelte';
  import { createForm } from '../form/form-utils';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';

  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { type FormPath, type SuperForm } from 'sveltekit-superforms/client';
  import { Input } from '$lib/components/ui/input';
  import DevicesTable from '../devices/devices-table.svelte';
  import DeviceInput from '../devices/device-input.svelte';
  import PatientInput from '../patients/patient-input.svelte';
  import UserInput from '../users/user-input.svelte';
  import StudyInput from '../studies/study-input.svelte';
  import DateTimeInput from '../form/date-time-input.svelte';
  import SuperDebug from 'sveltekit-superforms';

  export let data: Schedule;
  export let readonly = false;
  export let onSubmit: (data: Schedule) => void;

  const { enhance, formData, form } = createForm(data, ScheduleSchema, (data) =>
    onSubmit(data as Schedule)
  );
</script>

<Form {enhance}>
  <svelte:fragment slot="footer">
    <Card.Footer>
      <div class="flex w-full">
        <Button class="ml-auto" type="submit">
          <slot name="button">Update</slot>
        </Button>
      </div>
    </Card.Footer>
  </svelte:fragment>
  <svelte:fragment slot="title">
    <slot name="title">Edit event</slot>
  </svelte:fragment>

  <!-- content here -->
  <div class="grid w-full grid-cols-2 gap-10">
    <!-- Product Name -->

    <div>
      <DateTimeInput
        name="starttime"
        {readonly}
        {form}
        bind:value={$formData.starttime}
        placeholder="Pick starttime"
      >
        starttime
      </DateTimeInput>
    </div>
    <div>
      <DateTimeInput
        name="endtime"
        {readonly}
        {form}
        bind:value={$formData.endtime}
        placeholder="Pick endtime"
      >
        endtime
      </DateTimeInput>
    </div>
    <StudyInput {form} name="studyid" bind:id={$formData.studyid} bind:study={$formData.study} />
    <UserInput
      {form}
      name="scheduledbyuserid"
      bind:id={$formData.scheduledbyuserid}
      bind:user={$formData.scheduledbyuser}
    />
    <div>
      <StringInput area name="comments" {readonly} {form} bind:value={$formData.comments}>
        comments
      </StringInput>
    </div>
  </div>
</Form>
<!-- <SuperDebug data={$formData} /> -->
