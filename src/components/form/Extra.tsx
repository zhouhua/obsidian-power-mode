import React, { type FC } from 'react';
import get from 'lodash/get';
import set from 'lodash/set';
import type { App } from 'obsidian';
import FileList from './FileList';

const Extra: FC<{
  fieldSchema: FieldSchema<ISetting>;
  setting: ISetting;
  update: (settings: ISetting) => void;
  app: App;
}> = ({ fieldSchema, setting, update, app }) => {
  let value: unknown = get(setting, fieldSchema.path);
  if (fieldSchema.afterChange) {
    value = fieldSchema.afterChange(value, setting);
  }
  const onChange = (newValue: unknown) => {
    const transValue = fieldSchema.beforeChange?.(newValue, setting) ?? newValue;
    const newSetting = { ...setting };
    set(newSetting, fieldSchema.path, transValue);
    update(newSetting);
  };
  switch (fieldSchema.type) {
    case 'imageList': {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return <FileList list={value as string[]} update={onChange} viewType="preview" />;
    }
    default:
      return null;
  }
};

export default Extra;
