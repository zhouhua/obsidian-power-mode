import React, { FC } from "react";
import Control from "./Control";
import get from "lodash/get";
import { App } from "obsidian";

function isShow(field: FieldSchema<ISetting>, settings: ISetting) {
  if (!field.when) {
    return true;
  }
  if (typeof field.when === "function") {
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
      (fieldSchema) =>
        isShow(fieldSchema, formData) && (
          <div
            className="setting-item"
            key={fieldSchema.path}
            style={{ padding: "10px 0" }}
          >
            <div className="setting-item-info">
              <div className="setting-item-name">{fieldSchema.label}</div>
              {fieldSchema.desc && (
                <div className="setting-item-description">
                  {fieldSchema.desc}
                </div>
              )}
            </div>
            <div className="setting-item-control">
              <Control
                fieldSchema={fieldSchema}
                setting={formData}
                update={setFormData}
                app={app}
              ></Control>
            </div>
          </div>
        )
    )}
  </>
);

export default FormItems;
