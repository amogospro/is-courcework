<script lang="ts">
  import api, { roles } from '$lib/api';
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Gender, getPersonStuff, type DeviceWithComments, type UserWithRoles } from '$lib/types';
  import Plus from 'lucide-svelte/icons/plus';
  import X from 'lucide-svelte/icons/x';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import SelectInput from '../form/select-input.svelte';
  import { createForm } from '../form/form-utils';
  import z from 'zod';
  import { toast } from 'svelte-sonner';

  import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { Input } from '$lib/components/ui/input';
  export let data: DeviceWithComments;

  let comment_text = '';
  export let refetch: () => any;

  const addRole = async () => {
    const res = await api.post(`/devicecomments?deviceid=${data.id}`, comment_text);
    comment_text = '';
    toast.info('Comment added');
    refetch();
  };

  const removeRole = async (id: number | undefined) => {
    const res = await api.delete(`/devicecomments/${id}`);
    toast.info('Comment removed');
    refetch();
  };
</script>

<div class="max-w-600px flex flex-wrap items-center gap-2">
  {#each data.comments as comment}
    <Badge variant="outline" class="justify-items-center gap-2">
      {comment.commenttext} by {getPersonStuff(comment.user.person)}
      <button on:click={() => removeRole(comment.id)}>
        <X size="14" />
      </button>
    </Badge>
  {/each}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button variant="ghost" size="sm" builders={[builder]}><Plus size="14" /></Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
      <DropdownMenu.Label>Leave new comment</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <div class="p-2">
        <Input bind:value={comment_text} />
      </div>

      <DropdownMenu.Item on:click={addRole}>
        <Plus class="mr-2 h-4 w-4" />
        <span>Add comment</span>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
