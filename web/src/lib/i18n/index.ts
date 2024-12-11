// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en-US';

register('en-US', () => import('./locales/en-US.json'));
register('ru-RU', () => import('./locales/ru-RU.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? localStorage.getItem('language') || defaultLocale : defaultLocale
});
