import { loadAllLocales } from '../i18n/i18n-util.sync';
import { i18n } from '../i18n/i18n-util';
import type { Locales } from '../i18n/i18n-types';

loadAllLocales();

declare global {
  interface Window {
    i18next: {
      language: string;
    };
  }
}

let locale: Locales = 'en';
try {
  locale = (window.i18next.language || '').startsWith('zh') ? 'zh' : 'en';
}
catch (e) {
  /* empty */
}

export default i18n()[locale];
