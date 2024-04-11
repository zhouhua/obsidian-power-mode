import type { BaseTranslation } from "../i18n-types";

const en = {
  particle: "Particle",
  flame: "Flame",
  rift: "Rift",
  magic: "Magic",
  firework: "Firework",
  butterfly: "Butterfly",
  pikachu: "Pikachu",
  nyan: "Nyan Panda",
  lightning: "Lightning",
  sparkle: "Sparkle",
  settings: {
    screenShaker: {
      enable: "Screen shaker",
      intensity: {
        title: "Intensity",
        description: "The strength of the shake effect.",
      },
      recoverTime: {
        title: "Shake Time",
        description:
          "The time(milliseconds) it takes for the shake effect to recover.",
      },
    },
    combo: {
      enable: "Combo!",
      time: {
        title: "Combo time",
        descrition:
          "If the time between two keystrokes is within the combo time, the combo count increases by 1. If it exceeds the combo time, the combo count is reset to zero. Unit: seconds",
      },
      showExclamation: "Show exclamation",
    },
    cursorExplosion: {
      enable: "Cursor explosion",
      effect: "Preset effect",
    },
  },
} satisfies BaseTranslation;

export default en;
