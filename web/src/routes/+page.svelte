<script lang="ts">
  import Link from '$lib/components/ui/link/link.svelte';
  import { _ as t } from 'svelte-i18n';
</script>

<div class="container mx-auto grid w-full py-10">
  <Link href="/schedule">{$t('raspisanie')}</Link>
</div>
