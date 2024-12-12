<script lang="ts">
  import { StudySchema, StudyStatus, type Study } from '$lib/types';
  import _ from 'lodash';
  import StringInput from '../form/string-input.svelte';
  import SelectInput from '../form/select-input.svelte';
  import Form from '../form/form.svelte';
  import { createForm } from '../form/form-utils';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import DeviceInput from '../devices/device-input.svelte';
  import PatientInput from '../patients/patient-input.svelte';
  import UserInput from '../users/user-input.svelte';
  import { _ as t } from 'svelte-i18n';

  export let data: Study;
  export let readonly = false;
  export let onSubmit: (data: Study) => void;

  const { enhance, formData, form } = createForm(data, StudySchema, (data) => onSubmit(data));
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
    <slot name="title">{$t('edit-study')}</slot>
  </svelte:fragment>

  <!-- content here -->
  <div class="grid w-full grid-cols-1 gap-10">
    <!-- Product Name -->
    <div>
      <SelectInput
        name="status"
        {readonly}
        {form}
        options={StudyStatus.options}
        bind:value={$formData.status}
        placeholder={$t('select-status')}
      >
        {$t('status')}
      </SelectInput>
      <StringInput name="notes" {readonly} {form} bind:value={$formData.notes}>
        {$t('notes')}
      </StringInput>

      <DeviceInput
        {form}
        name="deviceid"
        bind:id={$formData.deviceid}
        bind:device={$formData.device}
      />
      <PatientInput
        {form}
        name="patientid"
        bind:id={$formData.patientid}
        bind:patient={$formData.patient}
      />
      <UserInput {form} name="userid" bind:id={$formData.userid} bind:user={$formData.user} />
    </div>
  </div>
</Form>
