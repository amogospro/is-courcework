<script lang="ts">
  import { base } from '$app/paths';
  import Link from '$lib/components/ui/link/link.svelte';
  import { _ as t } from 'svelte-i18n';
  import * as Card from '$lib/components/ui/card';
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>
      {$t('remember-message')}
    </Card.Title>
    <Card.Description>{$t('use-links-above-to-navigate')}</Card.Description>
  </Card.Header>
  <div class="grid items-center justify-items-center">
    <img class="w-1/2" src="{base}/bird.png" alt="bird" />
  </div>
</Card.Root>
