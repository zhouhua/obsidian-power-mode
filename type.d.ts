declare interface IExplosion {
  maxExplosions: number;
  size: number;
  frequency: number;
  explosionOrder: "random" | "sequential" | number;
  gifMode: "continue" | "restart";
  duration: number;
  offset: number;
  backgroundMode: "mask" | "image";
  imageList: string[];
  customStyle?: Partial<CSSStyleDeclaration>;
}

declare interface ISetting {
  shakeScreen: {
    enable: boolean;
    intensity: number;
    recoverTime: number;
  };
  combo: {
    enable: boolean;
    timeout: number;
    showExclamation: boolean;
  };
  explosion: {
    enable: boolean;
  } & IExplosion;
  explosionPreset: number;
}

declare type ConditionType<T> =
  | { flag: number | string | boolean; path: string }
  | ((data: T) => boolean);

interface BaseFieldSchema<T> {
  label: string;
  path: string;
  type: "number" | "string" | "boolean";
  when?: ConditionType<T>;
  desc?: string;
}
interface SelectFieldSchema<T> {
  label: string;
  path: string;
  type: "select";
  options: { text: string; value: string }[];
  when?: ConditionType<T>;
  desc?: string;
}
declare type FieldSchema<T> = BaseFieldSchema<T> | SelectFieldSchema<T>;
declare type FormSchema<T> = FieldSchema<T>[];
