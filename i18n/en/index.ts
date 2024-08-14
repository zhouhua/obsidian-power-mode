import type { BaseTranslation } from '../i18n-types';

const en = {
  particle: 'Particle',
  flame: 'Flame',
  rift: 'Rift',
  magic: 'Magic',
  firework: 'Firework',
  pikachu: 'Pikachu',
  lightning: 'Lightning',
  shapes: 'Shapes',
  coin: 'Coin',
  confetti: 'Confetti',
  spark: 'Spark',
  settings: {
    screenShaker: {
      enable: 'Screen shaker',
      intensity: {
        title: 'Intensity',
        description: 'The strength of the shake effect.',
      },
      recoverTime: {
        title: 'Shake Time',
        description:
          'The time(milliseconds) it takes for the shake effect to recover.',
      },
      shakeWindow: {
        title: 'Whether to shake the entire window',
        description:
          'By default, only the current editor will shake. If checked, the entire container will shake.',
      },
    },
    combo: {
      enable: 'Combo!',
      time: {
        title: 'Combo time',
        descrition:
          'If the time between two keystrokes is within the combo time, the combo count increases by 1. If it exceeds the combo time, the combo count is reset to zero. Unit: seconds',
      },
      showExclamation: 'Show exclamation',
      precisionInput: {
        title: 'Precision input mode',
        descrition:
          'Only correct inputs will count towards the combo, ignoring any character deletions.',
      },
    },
    cursorExplosion: {
      enable: 'Cursor explosion',
      effect: 'Preset effect',
    },
    useCustom: 'Advanced effects settings',
    resetToPreset: 'Reset to preset effect',
  },
} satisfies BaseTranslation;

export default en;
