export interface ISetting {
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
}

export const defaultSetting: ISetting = {
  shakeScreen: {
    enable: true,
    intensity: 5,
    recoverTime: 800,
  },
  combo: {
    enable: true,
    timeout: 10,
    showExclamation: true,
  },
};
