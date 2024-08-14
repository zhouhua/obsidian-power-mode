import type { FC } from 'react';
import React from 'react';
import Control from './Control';
import get from 'lodash/get';
import type { App } from 'obsidian';
import Extra from './Extra';

function isShow(field: FieldSchema<ISetting>, settings: ISetting) {
  if (!field.when) {
    return true;
  }
  if (typeof field.when === 'function') {
    return field.when(settings);
  }
  return get(settings, field.when.path) === field.when.flag;
}

const FormItems: FC<{
  formSchema: FormSchema<ISetting>;
  formData: ISetting;
  setFormData: (data: ISetting) => void;
  app: App;
}> = ({ formSchema, formData, setFormData, app }) => (
  <>
    {formSchema.map(
      fieldSchema =>
        isShow(fieldSchema, formData) && (
          <div
            key={fieldSchema.path}
            className="setting-item"
            style={{ padding: '10px 0' }}
          >
            <div className="setting-item-info">
              <div className="setting-item-name">{fieldSchema.label}</div>
              {fieldSchema.desc && (
                <div className="setting-item-description">
                  {fieldSchema.desc}
                </div>
              )}
            </div>
            <div className="setting-item-control-wrap-extra">
              <div className="setting-item-control">
                <Control
                  fieldSchema={fieldSchema}
                  setting={formData}
                  update={setFormData}
                  app={app}
                />
              </div>
              <Extra
                fieldSchema={fieldSchema}
                setting={formData}
                update={setFormData}
                app={app}
              />
            </div>
          </div>
        ),
    )}
  </>
);

export default FormItems;
