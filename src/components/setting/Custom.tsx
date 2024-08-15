import type { App } from 'obsidian';
import L from '../../L';
import FormItems from '../form/FormItems';
import type { FC } from 'react';
import React from 'react';

const formSchema1: FormSchema<ISetting> = [
  {
    label: 'Image list',
    path: 'customEffect.imageList',
    type: 'imageList',
  },
  {
    label: 'Max explosion count',
    path: 'customEffect.maxExplosions',
    type: 'number',
  },
  {
    label: 'Size',
    path: 'customEffect.size',
    type: 'number',
  },
  {
    label: 'Frequency',
    path: 'customEffect.frequency',
    type: 'number',
  },
  {
    label: 'Explosion order',
    path: 'customEffect.explosionOrder',
    type: 'select',
    options: [
      { text: 'Random', value: 'random' },
      { text: 'Sequential', value: 'sequential' },
    ],
  },
  {
    label: 'Gif mode',
    path: 'customEffect.gifMode',
    type: 'select',
    options: [
      { text: 'Continue', value: 'continue' },
      { text: 'Restart', value: 'restart' },
    ],
  },
  {
    label: 'Duration(ms)',
    path: 'customEffect.duration',
    type: 'number',
  },
  {
    label: 'Offset',
    path: 'customEffect.offset',
    type: 'number',
  },
  {
    label: 'Background mode',
    path: 'customEffect.backgroundMode',
    type: 'select',
    options: [
      { text: 'Mask', value: 'mask' },
      { text: 'Image', value: 'image' },
    ],
  },
  {
    label: 'Custom style',
    path: 'customEffect.customStyle',
    type: 'json',
  },
];

const Custom: FC<{
  initialSetting: ISetting;
  updateSetting: (data: ISetting) => void;
  app: App;
}> = ({ initialSetting: formData, updateSetting, app }) => {
  const update = (data: ISetting) => {
    updateSetting(data);
  };

  const resetPreset = () => {
    update({
      ...formData,
      useCustom: true,
      customEffect: {
        ...formData.explosion,
      },
    });
  };

  return (
    <>
      <FormItems
        formSchema={[
          {
            label: L.settings.useCustom(),
            path: 'useCustom',
            type: 'boolean',
            beforeChange: (newValue: boolean, data) => {
              if (newValue && !data.customEffect) {
                setTimeout(() => {
                  resetPreset();
                }, 100);
              }
            },
          },
        ]}
        formData={formData}
        setFormData={update}
        app={app}
      />
      {formData.useCustom && (
        <div style={{
          border: '1px solid var(--background-modifier-border)',
          borderRadius: '4px',
          margin: '10px 0',
          padding: '10px',
        }}
        >
          <div className="setting-item" style={{ padding: '10px 0' }}>
            <div className="setting-item-info">
            </div>
            <div className="setting-item-control">
              <button onClick={resetPreset}>{L.settings.resetToPreset()}</button>
            </div>
          </div>

          <FormItems
            formSchema={formSchema1}
            formData={formData}
            setFormData={update}
            app={app}
          />
        </div>
      )}
    </>
  );
};

export default Custom;
