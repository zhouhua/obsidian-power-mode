import { App, Plugin, PluginSettingTab, Setting } from "obsidian";
import { shakeScreen } from "./src/screen-shaker";
import { ISetting, defaultSetting } from "src/setting";
import { combo } from "src/combo";
import { explosion } from "src/explosion";
import list from "src/presets/explosion";
import L from "src/L";
import { preload } from "src/utils";

defaultSetting.explosion = { ...defaultSetting.explosion, ...list[0].config };
defaultSetting.explosionPreset = 0;

export default class PowerModePlugin extends Plugin {
  settings: ISetting;
  async onload() {
    await this.loadSettings();
    this.app.workspace.on("editor-change", (editor) => {
      // @ts-ignore
      const el: HTMLElement = editor.containerEl;
      shakeScreen(el, this.settings);
      combo(el, this.settings);
      explosion(editor, this.settings);
    });

    this.addSettingTab(new PowerModeSetting(this.app, this));
  }

  onunload() {}

  async loadSettings() {
    this.settings = { ...defaultSetting, ...(await this.loadData()) };
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class PowerModeSetting extends PluginSettingTab {
  plugin: PowerModePlugin;
  render: (settings: ISetting) => void;

  constructor(app: App, plugin: PowerModePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h3", { text: "POWER MODE!" });
    containerEl.createEl("p", { text: "Github: " }).createEl("a", {
      text: "zhouhua/obsidian-power-mode",
      attr: {
        href: "https://github.com/zhouhua/obsidian-power-mode",
        target: "_blank",
      },
    });

    new Setting(containerEl)
      .setName(L.settings.screenShaker.enable())
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.shakeScreen.enable)
          .onChange(async (value) => {
            this.plugin.settings.shakeScreen.enable = value;
            await this.plugin.saveSettings();
          });
      });
    new Setting(containerEl)
      .setName(L.settings.combo.enable())
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.combo.enable)
          .onChange(async (value) => {
            this.plugin.settings.combo.enable = value;
            await this.plugin.saveSettings();
          });
      });
    new Setting(containerEl)
      .setName(L.settings.cursorExplosion.enable())
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.explosion.enable)
          .onChange(async (value) => {
            this.plugin.settings.explosion.enable = value;
            await this.plugin.saveSettings();
          });
      });
    new Setting(containerEl)
      .setName(L.settings.cursorExplosion.effect())
      .addDropdown((dropdown) => {
        dropdown
          .addOptions(
            list.reduce<Record<string, string>>((prev, { type }, index) => {
              prev[`${index}`] = type;
              return prev;
            }, {})
          )
          .setValue(String(this.plugin.settings.explosionPreset))
          .onChange(async (value: string) => {
            this.plugin.settings.explosionPreset = +value;
            const config = list[+value];
            this.plugin.settings.explosion = {
              enable: this.plugin.settings.explosion.enable,
              ...config.config,
            };
            if (config.config.gifMode === "continue") {
              config.config.imageList.forEach((src) => preload(src));
            }
            await this.plugin.saveSettings();
          });
      });
  }
}
