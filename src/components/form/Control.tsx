import React, { useRef, useState, type FC } from 'react';
import get from 'lodash/get';
import set from 'lodash/set';
import { JsonEditor } from 'json-edit-react';
import { Modal, Notice, type App } from 'obsidian';
import L from 'src/L';
import { delay } from 'src/utils';

const Control: FC<{
  fieldSchema: FieldSchema<ISetting>;
  setting: ISetting;
  update: (settings: ISetting) => void;
  app: App;
}> = ({ fieldSchema, setting, update, app }) => {
  const [url, setUrl] = useState('');
  const inputReference = useRef<HTMLInputElement>(null);
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
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const currentList = get(setting, fieldSchema.path) as string[];
        onChange([...currentList, base64String]);
      };
      reader.readAsDataURL(file);
    }
  };

  const openUrlModal = () => {
    const modal = new Modal(app);
    modal.titleEl.setText(L.settings.enterUrl());

    const inputContainer = modal.contentEl.createDiv({
      attr: {
        style: 'margin: 1em 0;',
      },
    });
    const input = inputContainer.createEl('input', {
      attr: {
        type: 'text',
        placeholder: L.settings.enterUrl(),
        style: 'width: 100%',
      },
    });

    input.onkeydown = async e => {
      if (e.key === 'Enter') {
        onChange(input.value);
        await delay(0);
        add();
        modal.close();
      }
      else if (e.key === 'Escape') {
        modal.close();
      }
    };

    const buttonDiv = modal.contentEl.createDiv({
      cls: 'modal-button-container',
      attr: {
        style: 'display: flex; justify-content: flex-end; gap: 8px; margin-top: 1em;',
      },
    });

    const confirmButton = buttonDiv.createEl('button', {
      text: L.settings.confirm(),
      cls: 'mod-cta',
    });
    confirmButton.onclick = async () => {
      onChange(input.value);
      await delay(0);
      add();
      modal.close();
    };

    buttonDiv.createEl('button', { text: L.settings.cancel() }).onclick = () => {
      modal.close();
    };

    modal.open();
    setTimeout(() => {
      input.focus();
    }, 0);
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
          <button onClick={() => inputReference.current?.click()}>
            {L.settings.upload()}
            <input
              ref={inputReference}
              style={{ display: 'none' }}
              type="file"
              onChange={handleFileChange}
            />
          </button>
          <button onClick={openUrlModal}>{L.settings.enterUrl()}</button>
        </>
      );
    }
    default:
      return null;
  }
};

export default Control;
