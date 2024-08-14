import type { App } from 'obsidian';
import L from '../../L';
import FormItems from '../form/FormItems';
import type { FC } from 'react';
import React, { useState } from 'react';
import list from '../../presets/explosion';
import { preload } from 'src/utils';
import Custom from './Custom';

const formSchema: FormSchema<ISetting> = [
  {
    label: L.settings.screenShaker.enable(),
    path: 'shakeScreen.enable',
    type: 'boolean',
  },
  {
    label: L.settings.screenShaker.intensity.title(),
    path: 'shakeScreen.intensity',
    type: 'number',
    desc: L.settings.screenShaker.intensity.description(),
    when: { path: 'shakeScreen.enable', flag: true },
  },
  {
    label: L.settings.screenShaker.recoverTime.title(),
    desc: L.settings.screenShaker.recoverTime.description(),
    path: 'shakeScreen.recoverTime',
    type: 'number',
    when: { path: 'shakeScreen.enable', flag: true },
  },
  {
    label: L.settings.screenShaker.shakeWindow.title(),
    desc: L.settings.screenShaker.shakeWindow.description(),
    path: 'shakeScreen.shakeWindow',
    type: 'boolean',
    when: { path: 'shakeScreen.enable', flag: true },
  },
  {
    label: L.settings.combo.enable(),
    path: 'combo.enable',
    type: 'boolean',
  },
  {
    label: L.settings.combo.time.title(),
    desc: L.settings.combo.time.descrition(),
    path: 'combo.timeout',
    type: 'number',
    when: { path: 'combo.enable', flag: true },
  },
  {
    label: L.settings.combo.showExclamation(),
    path: 'combo.showExclamation',
    type: 'boolean',
    when: { path: 'combo.enable', flag: true },
  },
  {
    label: L.settings.combo.precisionInput.title(),
    desc: L.settings.combo.precisionInput.descrition(),
    path: 'combo.precisionInput',
    type: 'boolean',
    when: { path: 'combo.enable', flag: true },
  },
  {
    label: L.settings.cursorExplosion.enable(),
    path: 'explosion.enable',
    type: 'boolean',
  },
];

const Panel: FC<{
  initialSetting: ISetting;
  updateSetting: (data: ISetting) => void;
  app: App;
}> = ({ initialSetting, updateSetting, app }) => {
  const [formData, setFormData] = useState<ISetting>(initialSetting);
  const update = (data: ISetting) => {
    updateSetting(data);
    setFormData(data);
  };

  const changePreset = (index: string) => {
    const preset = list[+index];
    const newData = { ...formData };
    newData.explosionPreset = +index;
    newData.explosion = {
      enable: formData.explosion.enable,
      ...preset.config,
    };
    if (JSON.stringify(newData.customEffect) === '{}') {
      newData.customEffect = {
        ...preset.config,
      };
    }
    update(newData);
    if (preset.config.gifMode === 'continue') {
      preset.config.imageList.forEach(src => {
        preload(src);
      });
    }
  };

  return (
    <>
      <p>
        Github:
        <a
          href="https://github.com/zhouhua/obsidian-power-mode"
          target="_blank"
        >
          zhouhua/obsidian-power-mode
        </a>
      </p>
      <FormItems
        formSchema={formSchema}
        formData={formData}
        setFormData={update}
        app={app}
      />
      {formData.explosion.enable && (
        <div className="setting-item" style={{ padding: '10px 0' }}>
          <div className="setting-item-info">
            <div className="setting-item-name">
              {L.settings.cursorExplosion.effect()}
            </div>
          </div>
          <div className="setting-item-control">
            <select
              value={formData.explosionPreset}
              className="dropdown"
              onChange={e => { changePreset(e.target.value); }}
            >
              {list.map(({ type }, index) => (
                <option key={type} value={index}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <Custom initialSetting={formData} updateSetting={update} app={app} />
    </>
  );
};

export default Panel;
