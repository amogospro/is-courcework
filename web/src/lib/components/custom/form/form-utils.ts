import { z } from 'zod';

import { superForm } from 'sveltekit-superforms';
import { zodClient, type ZodObjectTypes, type ZodValidation } from 'sveltekit-superforms/adapters';
import { toast } from 'svelte-sonner';

export const createForm = <T extends ZodValidation<ZodObjectTypes>>(
  data: z.infer<typeof schema>,
  schema: T,
  onSubmit: (data: z.infer<typeof schema>) => unknown = (data) => {
    toast.success(`You submitted ${JSON.stringify(data, null, 2)}`);
  }
) => {
  const form = superForm(data, {
    SPA: true,
    dataType: 'json',
    validators: zodClient(schema),
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        formData.set(f.data);
        onSubmit(f.data);
      } else {
        console.log(f);
        toast.error('Please fix the errors in the form.');
      }
    },
    clearOnSubmit: 'errors',
    multipleSubmits: 'prevent'
  });
  const { form: formData, enhance } = form;

  return {
    formData,
    enhance,
    form
  };
};
