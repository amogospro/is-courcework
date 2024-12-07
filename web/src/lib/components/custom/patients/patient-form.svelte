<script lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import SuperDebug from 'sveltekit-superforms';
  import { Field, Control, Label, FieldErrors } from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import * as Card from '$lib/components/ui/card';
  import { z } from 'zod';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Button } from '$lib/components/ui/button';
  import { toast } from 'svelte-sonner';
  import { type Infer } from 'sveltekit-superforms/client';
  import { Link } from '$lib/components/ui/link';
  import * as Popover from '$lib/components/ui/popover/index.js';

  import {
    Gender,
    PatientSchema,
    type Patient,
    // UnitOfMeasure,
    // OrganizationType,
    // Color,
    // Country,
    // type OrganizationSchema,
    type PersonSchema
  } from '$lib/types';
  import BaseLabel from '$lib/components/ui/label/label.svelte';
  import moment from 'moment';
  import * as Select from '$lib/components/ui/select';
  import _ from 'lodash';
  import NumberInput from '$lib/components/ui/input/number-input.svelte';
  export let data: Patient;
  import * as Dialog from '$lib/components/ui/dialog';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
  import { Calendar } from '$lib/components/ui/calendar/index.js';
  import { cn } from '$lib/utils';

  export let readonly = false;

  export let onSubmit: (data: Patient) => any = (data) => {
    toast.success(`You submitted ${JSON.stringify(data, null, 2)}`);
  };

  const form = superForm(data, {
    SPA: true,
    dataType: 'json',
    validators: zodClient(PatientSchema),
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        $formData = f.data;
        onSubmit(f.data);
      } else {
        console.log(f);
        toast.error('Please fix the errors in the form.');
      }
    },
    onSubmit(input) {},

    clearOnSubmit: 'errors',
    multipleSubmits: 'prevent'
  });
  const { form: formData, enhance } = form;

  let selectedOwnerName: string | undefined;

  const df = new DateFormatter('en-US', {
    dateStyle: 'long'
  });

  let dateofbirth: DateValue | undefined = undefined;

  $: gender = $formData.person.gender
    ? {
        label: _.startCase(_.toLower($formData.person.gender)),
        value: $formData.person.gender
      }
    : undefined;

  $: if (dateofbirth) {
    $formData.person.dateofbirth = dateofbirth.toDate(getLocalTimeZone()).toISOString() as any;
  }
</script>

<div class="grid h-full w-full place-items-center items-center justify-items-center">
  <form use:enhance on:submit|preventDefault|stopPropagation class="w-full space-y-6">
    <Card.Header>
      <Card.Title>
        <slot name="title">Edit Product</slot>
      </Card.Title>
    </Card.Header>
    <Card.Content class="w-full">
      <div class="grid w-full grid-cols-3 gap-10">
        <!-- Product Name -->
        <div>
          <Field {form} name="insurancepolicynumber">
            <Control let:attrs>
              <Label>insurancepolicynumber</Label>
              <Input {...attrs} {readonly} bind:value={$formData.insurancepolicynumber} />
            </Control>
            <FieldErrors />
          </Field>
          <Field {form} name="person.firstname">
            <Control let:attrs>
              <Label>firstname</Label>
              <Input {...attrs} {readonly} bind:value={$formData.person.firstname} />
            </Control>
            <FieldErrors />
          </Field>
          <Field {form} name="person.lastname">
            <Control let:attrs>
              <Label>lastname</Label>
              <Input {...attrs} {readonly} bind:value={$formData.person.lastname} />
            </Control>
            <FieldErrors />
          </Field>
          <Field {form} name="person.middlename">
            <Control let:attrs>
              <Label>middlename</Label>
              <Input {...attrs} {readonly} bind:value={$formData.person.middlename} />
            </Control>
            <FieldErrors />
          </Field>
          <Field {form} name="person.phonenumber">
            <Control let:attrs>
              <Label>phonenumber</Label>
              <Input {...attrs} {readonly} bind:value={$formData.person.phonenumber} />
            </Control>
            <FieldErrors />
          </Field>
          <Field {form} name="person.email">
            <Control let:attrs>
              <Label>firstname</Label>
              <Input {...attrs} {readonly} bind:value={$formData.person.email} />
            </Control>
            <FieldErrors />
          </Field>
          <Field {form} name="person.address">
            <Control let:attrs>
              <Label>address</Label>
              <Input {...attrs} {readonly} bind:value={$formData.person.address} />
            </Control>
            <FieldErrors />
          </Field>
          <Field {form} name="person.gender">
            <Control let:attrs>
              <Label>Gender</Label>
              <Select.Root
                portal={null}
                selected={gender}
                onSelectedChange={(v) => {
                  v && ($formData.person.gender = v.value);
                }}
              >
                <Select.Trigger>
                  <Select.Value placeholder="Select Gender" />
                </Select.Trigger>
                {#if !readonly}
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Gender</Select.Label>
                      {#each Gender.options as unit}
                        {@const label = _.startCase(_.toLower(unit))}
                        <Select.Item value={unit} {label}>
                          {label}
                        </Select.Item>
                      {/each}
                    </Select.Group>
                  </Select.Content>
                {/if}
              </Select.Root>
            </Control>
            <FieldErrors />
          </Field>
        </div>

        <!-- person: {
          firstname: '',
          lastname: '',
          dateofbirth: '',
          phonenumber: '',
          email: '',
          address: '',
          gender: ''
        },
        insurancepolicynumber: '' -->
        <div>
          <Field {form} name="person.id">
            <Control let:attrs>
              <Field {form} name="person.dateofbirth">
                <Control let:attrs>
                  <Label>dateofbirth</Label>
                  <Popover.Root>
                    <Popover.Trigger asChild let:builder>
                      <Button
                        variant="outline"
                        class={cn(
                          'w-[280px] justify-start text-left font-normal',
                          !dateofbirth && 'text-muted-foreground'
                        )}
                        builders={[builder]}
                      >
                        <CalendarIcon class="mr-2 h-4 w-4" />
                        {dateofbirth
                          ? df.format(dateofbirth.toDate(getLocalTimeZone()))
                          : 'Pick dateofbirth'}
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content class="w-auto p-0">
                      <Calendar bind:value={dateofbirth} initialFocus />
                    </Popover.Content>
                  </Popover.Root>
                </Control>
                <FieldErrors />
              </Field>
            </Control>
            <FieldErrors />
          </Field>
          <!-- <OrganizationForm /> -->
        </div>
      </div>
    </Card.Content>
    <slot name="footer">
      <Card.Footer>
        <div class="flex w-full">
          <Button class="ml-auto" type="submit">
            <slot name="button">Update</slot>
          </Button>
        </div>
      </Card.Footer>
    </slot>
  </form>
</div>
<!-- <SuperDebug data={$formData} /> -->
