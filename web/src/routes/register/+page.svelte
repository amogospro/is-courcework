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
  import { register } from '$lib/api';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import BaseLabel from '$lib/components/ui/label/label.svelte';
  import StringInput from '$lib/components/custom/form/string-input.svelte';
  import { Gender, PersonSchema } from '$lib/types';
  import SelectInput from '$lib/components/custom/form/select-input.svelte';
  import DateInput from '$lib/components/custom/form/date-input.svelte';
  import { goto } from '$app/navigation';

  import { _ as t } from 'svelte-i18n';

  export const signUpSchema = z
    .object({
      username: z.string().min(6),
      password: z.string().min(6, $t('password-must-be-6-characters-long')),
      password2: z.string(),
      person: PersonSchema
    })
    .refine((data) => data.password === data.password2, {
      message: $t('passwords-must-match'),
      path: ['password2']
    });

  let data: Infer<typeof signUpSchema> = {
    username: '',
    password: '',
    person: {
      firstname: '',
      middlename: '',
      lastname: '',
      dateofbirth: '',
      phonenumber: '',
      email: '',
      address: '',
      gender: 'O'
    },
    password2: ''
  };

  const form = superForm(data, {
    SPA: true,
    dataType: 'json',
    validators: zodClient(signUpSchema),
    onUpdated: async ({ form: f }) => {
      if (f.valid) {
        $formData = f.data;

        const { username, password, person } = f.data;
        await register({
          username,
          password,
          person
        });
        toast.success($t('registration-successful'));

        goto('/login');
        // toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
      } else {
        toast.error($t('please-fix-the-errors-in-the-form'));
      }
    },
    onSubmit(input) {},

    clearOnSubmit: 'errors',
    multipleSubmits: 'prevent'
  });
  const { form: formData, enhance } = form;
</script>

<!-- <SuperDebug data={$formData} /> -->

<div class="grid h-full w-full place-items-center items-center justify-items-center">
  <form use:enhance on:submit|preventDefault|stopPropagation class="w-full max-w-[500px] space-y-6">
    <Card.Root class="w-full max-w-[500px]">
      <Card.Header>
        <Card.Title>{$t('register')}</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="grid grid-cols-2 gap-10">
          <div>
            <Field {form} name="username">
              <Control let:attrs>
                <Label>{$t('username')}</Label>
                <Input {...attrs} bind:value={$formData.username} />
              </Control>
              <FieldErrors />
            </Field>

            <Field {form} name="password">
              <Control let:attrs>
                <Label>{$t('password')}</Label>
                <Input {...attrs} type="password" bind:value={$formData.password} />
              </Control>
              <FieldErrors />
            </Field>
            <Field {form} name="password2">
              <Control let:attrs>
                <Label>{$t('confirm-password')}</Label>
                <Input {...attrs} type="password" bind:value={$formData.password2} />
              </Control>
              <FieldErrors />
            </Field>
          </div>

          <div>
            <StringInput name="person.lastname" {form} bind:value={$formData.person.lastname}>
              {$t('lastname')}
            </StringInput>
            <StringInput name="person.middlename" {form} bind:value={$formData.person.middlename}>
              {$t('middlename')}
            </StringInput>
            <StringInput name="person.firstname" {form} bind:value={$formData.person.firstname}>
              {$t('firstname')}
            </StringInput>
            <SelectInput
              name="person.gender"
              {form}
              options={Gender.options}
              bind:value={$formData.person.gender}
              placeholder={$t('select-gender')}
            >
              {$t('gender')}
            </SelectInput>
            <div>
              <DateInput
                name="person.dateofbirth"
                {form}
                bind:value={$formData.person.dateofbirth}
                placeholder={$t('pick-dateofbirth')}
              >
                {$t('dateofbirth')}
              </DateInput>
            </div>
            <StringInput name="person.phonenumber" {form} bind:value={$formData.person.phonenumber}>
              {$t('phonenumber')}
            </StringInput>

            <StringInput name="person.email" {form} bind:value={$formData.person.email}>
              {$t('email')}
            </StringInput>

            <StringInput name="person.address" {form} bind:value={$formData.person.address}>
              {$t('address')}
            </StringInput>
          </div>
        </div>

        <Link href="{base}/login">{$t('login-instead')}</Link>
      </Card.Content>
      <Card.Footer>
        <Button type="submit">{$t('register')}</Button>
      </Card.Footer>
    </Card.Root>
  </form>
</div>
