import { loadAllLocales } from "../i18n/i18n-util.sync";
import { i18n } from "../i18n/i18n-util";
import { Locales } from "../i18n/i18n-types";

loadAllLocales();

let locale: Locales = "en";
try {
  // @ts-ignore
  locale = /^zh/.test(global?.i18next?.language || "") ? "zh" : "en";
} catch (e) {
  /* empty */
}

export default i18n()[locale];
