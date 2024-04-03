import { Plugin } from "obsidian";
import { shakeScreen } from "./src/screen-shaker";
import { loadAllLocales } from "./i18n/i18n-util.sync";
import { i18n } from "./i18n/i18n-util";
import { Locales } from "./i18n/i18n-types";
import { ISetting, defaultSetting } from "src/setting";
import { combo } from "src/combo";

loadAllLocales();

let locale: Locales = "en";
try {
  // @ts-ignore
  locale = /^zh/.test(global?.i18next?.language || "") ? "zh" : "en";
} catch (e) {
  /* empty */
}

const L = i18n()[locale];

export default class PowerModePlugin extends Plugin {
  settings: ISetting;
  async onload() {
    await this.loadSettings();
    this.app.workspace.on("editor-change", (editor) => {
      // @ts-ignore
      const el: HTMLElement = editor.containerEl;
      shakeScreen(el, this.settings);
      combo(el, this.settings);
    });
  }

  onunload() {}

  async loadSettings() {
    this.settings = { ...defaultSetting, ...(await this.loadData()) };
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
