import React, { type FC } from "react";
import get from "lodash/get";
import set from "lodash/set";
import { App } from "obsidian";

const Control: FC<{
  fieldSchema: FieldSchema<ISetting>;
  setting: ISetting;
  update: (settings: ISetting) => void;
  app: App;
}> = ({ fieldSchema, setting, update, app }) => {
  const value = get(setting, fieldSchema.path);
  const onChange = (value: unknown) => {
    const newSetting = { ...setting };
    set(newSetting, fieldSchema.path, value);
    update(newSetting);
  };
  switch (fieldSchema.type) {
    case "number": {
      return (
        <input
          type="number"
          value={value}
          onChange={(e) =>
            onChange(e.target.value ? Number(e.target.value) : undefined)
          }
        />
      );
    }
    case "string": {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    }
    case "boolean": {
      return (
        <div
          className={`checkbox-container${value ? " is-enabled" : ""}`}
          onClick={() => onChange(!get(setting, fieldSchema.path))}
        >
          <input type="checkbox" checked={value} onChange={() => { }} />
        </div>
      );
    }
    case "select": {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="dropdown"
        >
          {fieldSchema.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      );
    }
    default:
      return null;
  }
};

export default Control;
