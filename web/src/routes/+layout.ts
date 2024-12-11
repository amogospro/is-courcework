import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = false;

export const load: LayoutLoad = async () => {
  if (browser) {
    // Check if a language is stored in localStorage
    const storedLocale = localStorage.getItem('language');

    // Set the locale either from localStorage or fallback to browser language
    if (storedLocale) {
      locale.set(storedLocale);
    } else {
      const browserLocale = window.navigator.language;
      locale.set(browserLocale);
      localStorage.setItem('language', browserLocale); // Save the default language to localStorage
    }
  }
  await waitLocale();
};

locale.subscribe((newLocale) => {
  if (browser) {
    localStorage.setItem('language', newLocale ?? '');
  }
});
