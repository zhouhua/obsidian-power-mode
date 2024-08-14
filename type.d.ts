declare interface IExplosion {
  maxExplosions: number;
  size: number;
  frequency: number;
  explosionOrder: 'random' | 'sequential' | number;
  gifMode: 'continue' | 'restart';
  duration: number;
  offset: number;
  backgroundMode: 'mask' | 'image';
  imageList: string[];
  customStyle?: Partial<CSSStyleDeclaration>;
}

declare interface ISetting {
  shakeScreen: {
    enable: boolean;
    intensity: number;
    recoverTime: number;
    shakeWindow?: boolean;
  };
  combo: {
    enable: boolean;
    timeout: number;
    showExclamation: boolean;
    precisionInput: boolean;
  };
  explosion: {
    enable: boolean;
  } & IExplosion;
  explosionPreset: number;
  useCustom: boolean;
  customEffect: Partial<IExplosion>;
}

declare type ConditionType<T> =
  | { flag: number | string | boolean; path: string; }
  | ((data: T) => boolean);

interface IAbstractField<T> {
  label: string;
  path: string;
  when?: ConditionType<T>;
  desc?: string;
  beforeChange?: (value: unknown, data: T) => unknown;
  afterChange?: (value: unknown, data: T) => unknown;
}

interface BaseFieldSchema<T> extends IAbstractField<T> {
  type: 'number' | 'string' | 'boolean' | 'text' | 'imageList' | 'json';
}
interface SelectFieldSchema<T> extends IAbstractField<T> {
  type: 'select';
  options: { text: string; value: string; }[];
}
declare type FieldSchema<T> = BaseFieldSchema<T> | SelectFieldSchema<T>;
declare type FormSchema<T> = FieldSchema<T>[];
