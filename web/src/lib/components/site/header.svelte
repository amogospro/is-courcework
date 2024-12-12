<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import Sun from 'svelte-radix/Sun.svelte';
  import Moon from 'svelte-radix/Moon.svelte';
  import Exit from 'svelte-radix/Exit.svelte';
  import { toggleMode } from 'mode-watcher';
  import Link from '../ui/link/link.svelte';
  import _ from 'lodash';
  import { clearUserData, roles, username } from '$lib/api';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { _ as t } from 'svelte-i18n';
  import { get, derived } from 'svelte/store';
  import { locale, locales } from 'svelte-i18n';
  function logOut() {
    clearUserData();
    goto(`${base}/login`);
  }

  const toggleLanguage = () => {
    const currentLocale = get(locale);
    locale.set(currentLocale === 'en-US' ? 'ru-RU' : 'en-US');
  };

  // Derive current language from the locale store
  const currentLanguage = derived(locale, ($locale) =>
    $locale === 'en-US' ? 'English' : 'Русский'
  );
</script>

<header
  class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
  <div class="container flex h-14 max-w-screen-2xl items-center gap-2">
    <h1 class="text-xl font-bold">{$t('kursovaya-rabota')}</h1>
    <!-- Врач,Администратор,Техперсонал -->

    {#if $roles.includes('Техперсонал')}
      <Link href="{base}/devices">{$t('devices')}</Link>
    {/if}
    {#if $roles.includes('Врач')}
      <Link href="{base}/patients">{$t('patients')}</Link>
    {/if}

    {#if $roles.includes('Врач') || $roles.includes('Администратор')}
      <Link href="{base}/schedule">{$t('schedule')}</Link>
    {/if}
    {#if $roles.includes('Врач')}
      <Link href="{base}/studies">{$t('studies')}</Link>
    {/if}
    {#if $roles.includes('Администратор')}
      <Link href="{base}/users">{$t('users')}</Link>
    {/if}
    {#if $roles.includes('Администратор')}
      <Link href="{base}/logs">{$t('logs')}</Link>
    {/if}

    <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <nav class="gap-10px flex items-center">
        <div class="gap-10px flex">
          <p>
            {$t('hi')}
            {#if $username != null}
              {$username}, {$t('you-are')}
            {/if}
            {#if $roles != null}
              {$roles}
            {/if}
          </p>
        </div>
        <Button on:click={logOut} variant="outline" size="icon">
          <Exit
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Exit
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">{$t('logout')}</span>
        </Button>

        <Button on:click={toggleMode} variant="outline" size="icon">
          <Sun
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">{$t('toggle-theme')}</span>
        </Button>

        <Button on:click={toggleLanguage} variant="outline" size="icon">
          <span class="h-[1.2rem] w-[1.2rem] transition-all">
            {$currentLanguage === 'English' ? 'EN' : 'RU'}
          </span>
          <span class="sr-only">{$currentLanguage}</span>
        </Button>
      </nav>
    </div>
  </div>
</header>
