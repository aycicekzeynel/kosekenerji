import { writable, derived } from 'svelte/store';
import tr from './tr.js';
import en from './en.js';
import ru from './ru.js';

const DICTS = { tr, en, ru };

export const LANGUAGES = [
  { code: 'tr', label: 'Türkçe', short: 'TR' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ru', label: 'Русский', short: 'RU' },
];

export const locale = writable('tr');

export function setLocale(lang) {
  locale.set(lang);
}

export const t = derived(locale, $l => {
  const dict = DICTS[$l] ?? DICTS.tr;
  return (key) => {
    if (!key) return '';
    const parts = key.split('.');
    let val = dict;
    for (const p of parts) {
      if (val == null || typeof val !== 'object') return key;
      val = val[p];
    }
    return val ?? key;
  };
});

export const link = derived(locale, $l =>
  (path) => $l === 'tr' ? path : `/${$l}${path === '/' ? '' : path}`
);
