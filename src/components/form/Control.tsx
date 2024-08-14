import React, { useState, type FC } from 'react';
import get from 'lodash/get';
import set from 'lodash/set';
import { JsonEditor } from 'json-edit-react';
import { Notice, type App } from 'obsidian';

const Control: FC<{
  fieldSchema: FieldSchema<ISetting>;
  setting: ISetting;
  update: (settings: ISetting) => void;
  app: App;
}> = ({ fieldSchema, setting, update, app }) => {
  const [url, setUrl] = useState('');
  let value: unknown = get(setting, fieldSchema.path);
  if (fieldSchema.afterChange) {
    value = fieldSchema.afterChange(value, setting);
  }
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [text, setText] = useState<string>(fieldSchema.type === 'text' ? value as string : '');

  const onChange = (newValue: unknown) => {
    try {
      const transValue = fieldSchema.beforeChange?.(newValue, setting) ?? newValue;
      const newSetting = { ...setting };
      set(newSetting, fieldSchema.path, transValue);
      update(newSetting);
    }
    catch (e) {
      console.error(e);
    }
  };
  const add = () => {
    if (url.startsWith('http') || url.startsWith('data:image/')) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const list = get(setting, fieldSchema.path) as string[];
      onChange([...list, url]);
      setUrl('');
    }
    else {
      new Notice(`Invalid url: ${url}`);
    }
  };
  switch (fieldSchema.type) {
    case 'number': {
      return (
        <input
          type="number"
          value={String(value)}
          onChange={e => { onChange(e.target.value ? Number(e.target.value) : undefined); }}
        />
      );
    }
    case 'string': {
      return (
        <input
          type="text"
          value={String(value)}
          onChange={e => { onChange(e.target.value); }}
        />
      );
    }
    case 'text': {
      return (
        <textarea
          value={text}
          style={{ minHeight: '150px' }}
          onChange={e => {
            setText(e.target.value);
            onChange(e.target.value);
          }}
        />
      );
    }
    case 'json': {
      return (
        <JsonEditor
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          data={(value || {}) as object}
          rootName=""
          enableClipboard={false}
          rootFontSize={12}
          theme={document.body.hasClass('theme-dark') ? 'githubDark' : 'githubLight'}
          onUpdate={({ newData }) => {
            onChange(newData);
          }}
        />
      );
    }
    case 'boolean': {
      return (
        <div
          className={`checkbox-container${value ? ' is-enabled' : ''}`}
          onClick={() => { onChange(!get(setting, fieldSchema.path)); }}
        >
          <input type="checkbox" checked={Boolean(value)} onChange={() => { }} />
        </div>
      );
    }
    case 'select': {
      return (
        <select
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          value={value as string}
          className="dropdown"
          onChange={e => { onChange(e.target.value); }}
        >
          {fieldSchema.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      );
    }
    case 'imageList': {
      return (
        <>
          <input
            type="text"
            value={url}
            onChange={e => { setUrl(e.target.value); }}
          />
          <button onClick={add}>Add</button>
        </>
      );
    }
    default:
      return null;
  }
};

export default Control;
