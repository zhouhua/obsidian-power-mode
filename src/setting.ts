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
  explosion: {
    enable: true,
    maxExplosions: 3,
    size: 10,
    frequency: 1,
    explosionOrder: "random",
    gifMode: "continue",
    duration: 400,
    offset: 0.25,
    backgroundMode: "mask",
    imageList: [],
  },
  explosionPreset: 0,
};
