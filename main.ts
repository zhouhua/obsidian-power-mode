import type { App, MarkdownView } from 'obsidian';
import { Plugin, PluginSettingTab } from 'obsidian';
import { shakeScreen } from './src/screen-shaker';
import { defaultSetting } from 'src/setting';
import { combo, comboInit } from 'src/combo';
import { explosion } from 'src/explosion';
import list from 'src/presets/explosion';
import renderSetting from 'src/components/setting';

defaultSetting.explosion = { ...defaultSetting.explosion, ...list[0].config };
defaultSetting.explosionPreset = 0;

export default class PowerModePlugin extends Plugin {
  settings: ISetting;
  onload() {
    this.loadSettings();
    this.addCommand({
      id: 'active',
      name: 'Active Power Mode',
      callback: () => {
        this.activePlugin();
      },
    });
    this.addCommand({
      id: 'deactive',
      name: 'Deactive Power Mode',
      callback: () => {
        this.disablePlugin();
      },
    });
    this.registerEvent(
      this.app.workspace.on('editor-change', (editor, info) => {
        if (this.app.workspace.activeEditor?.editor !== editor) {
          return;
        }
        const el: HTMLElement = editor.containerEl;
        el.style.transition = 'transform 0.05s ease-in-out';
        shakeScreen(el, this.settings);
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        combo(this.settings, info as MarkdownView);
        explosion(editor, this.settings);
      }),
    );
    this.registerEvent(
      this.app.workspace.on('file-open', file => {
        file && comboInit(file);
      }),
    );
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    this.addSettingTab(new PowerModeSetting(this.app, this));
  }

  onunload() {}

  async loadSettings() {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    this.settings = { ...defaultSetting, ...(await this.loadData() as ISetting) };
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  activePlugin() {
    const newSettings = { ...this.settings };
    newSettings.combo.enable = true;
    newSettings.explosion.enable = true;
    newSettings.shakeScreen.enable = true;
    this.settings = newSettings;
    this.saveSettings();
  }

  disablePlugin() {
    const newSettings = { ...this.settings };
    newSettings.combo.enable = false;
    newSettings.explosion.enable = false;
    newSettings.shakeScreen.enable = false;
    this.settings = newSettings;
    this.saveSettings();
  }
}

class PowerModeSetting extends PluginSettingTab {
  plugin: PowerModePlugin;
  render: (settings: ISetting) => void;

  constructor(app: App, plugin: PowerModePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  update(data: ISetting) {
    this.plugin.settings = data;
    this.plugin.saveSettings();
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    renderSetting(
      containerEl,
      this.plugin.settings,
      this.app,
      data => { this.update(data); },
    );
  }
}
