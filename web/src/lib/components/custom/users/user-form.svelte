<script lang="ts">
  import { Gender, UserSchema, type User } from '$lib/types';
  import _ from 'lodash';
  import StringInput from '../form/string-input.svelte';
  import SelectInput from '../form/select-input.svelte';
  import DateInput from '../form/date-input.svelte';
  import Form from '../form/form.svelte';
  import { createForm } from '../form/form-utils';
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { _ as t } from 'svelte-i18n';

  export let data: User;
  export let readonly = false;
  export let onSubmit: (data: User) => void;

  const { enhance, formData, form } = createForm(data, UserSchema, (data) => onSubmit(data));
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
    <slot name="title">{$t('edit-user')}</slot>
  </svelte:fragment>

  <!-- content here -->
  <div class="grid w-full grid-cols-2 gap-10">
    <!-- Product Name -->
    <div>
      <StringInput name="person.lastname" {readonly} {form} bind:value={$formData.person.lastname}>
        {$t('lastname')}
      </StringInput>
      <StringInput
        name="person.middlename"
        {readonly}
        {form}
        bind:value={$formData.person.middlename}
      >
        {$t('middlename')}
      </StringInput>
      <StringInput
        name="person.firstname"
        {readonly}
        {form}
        bind:value={$formData.person.firstname}
      >
        {$t('firstname')}
      </StringInput>
      <SelectInput
        name="person.gender"
        {readonly}
        {form}
        options={Gender.options}
        bind:value={$formData.person.gender}
        placeholder="Select Gender"
      >
        {$t('gender')}
      </SelectInput>
      <div>
        <DateInput
          name="person.dateofbirth"
          {readonly}
          {form}
          bind:value={$formData.person.dateofbirth}
          placeholder="Pick dateofbirth"
        >
          {$t('dateofbirth')}
        </DateInput>
      </div>
    </div>
    <div>
      <StringInput name="username" {readonly} {form} bind:value={$formData.username}>
        {$t('insurancepolicynumber')}
      </StringInput>

      <StringInput
        name="person.phonenumber"
        {readonly}
        {form}
        bind:value={$formData.person.phonenumber}
      >
        {$t('phonenumber')}
      </StringInput>

      <StringInput name="person.email" {readonly} {form} bind:value={$formData.person.email}>
        {$t('email')}
      </StringInput>

      <StringInput name="person.address" {readonly} {form} bind:value={$formData.person.address}>
        {$t('address')}
      </StringInput>
    </div>
  </div>
</Form>
