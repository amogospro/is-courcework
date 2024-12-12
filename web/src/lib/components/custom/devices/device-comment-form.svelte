<script lang="ts">
  import { DeviceSchema, type Device, DeviceStatus } from '$lib/types';
  import _ from 'lodash';
  import StringInput from '../form/string-input.svelte';
  import SelectInput from '../form/select-input.svelte';
  import Form from '../form/form.svelte';
  import { createForm } from '../form/form-utils';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { _ as t } from 'svelte-i18n';

  export let data: Device;
  export let readonly = false;
  export let onSubmit: (data: Device) => void;

  const { enhance, formData, form } = createForm(data, DeviceSchema, (data) => onSubmit(data));
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
    <slot name="title">{$t('edit-device')}</slot>
  </svelte:fragment>

  <!-- content here -->
  <div class="grid w-full grid-cols-1 gap-10">
    <!-- Product Name -->
    <div>
      <StringInput name="devicesn" {readonly} {form} bind:value={$formData.devicesn}>
        {$t('devicesn')}
      </StringInput>
      <StringInput name="location" {readonly} {form} bind:value={$formData.location}>
        {$t('location')}
      </StringInput>
      <SelectInput
        name="status"
        {readonly}
        {form}
        options={DeviceStatus.options}
        bind:value={$formData.status}
        placeholder={$t('select-status')}
      >
        {$t('status')}
      </SelectInput>
    </div>
  </div>
</Form>
