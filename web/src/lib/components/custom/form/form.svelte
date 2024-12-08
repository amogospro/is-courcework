<script lang="ts">
  import { z } from 'zod';

  import { superForm } from 'sveltekit-superforms';
  import * as Card from '$lib/components/ui/card';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Button } from '$lib/components/ui/button';
  import { toast } from 'svelte-sonner';
  import _ from 'lodash';

  export let enhance;
</script>

<div class="grid h-full w-full place-items-center items-center justify-items-center">
  <form use:enhance on:submit|preventDefault|stopPropagation class="w-full space-y-6">
    <Card.Header>
      <Card.Title>
        <slot name="title"></slot>
      </Card.Title>
    </Card.Header>
    <Card.Content class="w-full">
      <slot />
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
