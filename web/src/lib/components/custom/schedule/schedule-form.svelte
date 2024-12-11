<script lang="ts">
  import { ScheduleSchema, type Schedule } from '$lib/types';
  import _ from 'lodash';
  import StringInput from '../form/string-input.svelte';
  import Form from '../form/form.svelte';
  import { createForm } from '../form/form-utils';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import UserInput from '../users/user-input.svelte';
  import StudyInput from '../studies/study-input.svelte';
  import DateTimeInput from '../form/date-time-input.svelte';
  import { _ as t } from 'svelte-i18n';

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
          <slot name="button">{$t('update')}</slot>
        </Button>
      </div>
    </Card.Footer>
  </svelte:fragment>
  <svelte:fragment slot="title">
    <slot name="title">{$t('edit-event')}</slot>
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
        placeholder={$t('pick-starttime')}
      >
        {$t('starttime')}
      </DateTimeInput>
    </div>
    <div>
      <DateTimeInput
        name="endtime"
        {readonly}
        {form}
        bind:value={$formData.endtime}
        placeholder={$t('pick-endtime')}
      >
        {$t('endtime')}
      </DateTimeInput>
    </div>
    <StudyInput {form} name="studyid" bind:id={$formData.studyid} bind:study={$formData.study} />
    <div>
      <StringInput area name="comments" {readonly} {form} bind:value={$formData.comments}>
        {$t('comments')}
      </StringInput>
    </div>
  </div>
</Form>
<!-- <SuperDebug data={$formData} /> -->
