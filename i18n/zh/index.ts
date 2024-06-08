import type { Translation } from "../i18n-types";

const zh = {
  particle: "粒子",
  flame: "火焰",
  rift: "裂缝",
  magic: "魔法",
  firework: "烟花",
  pikachu: "皮卡丘",
  lightning: "闪电",
  shapes: "形状",
  coin: "金币",
  confetti: "彩屑",
  spark: "电光",
  settings: {
    screenShaker: {
      enable: "屏幕抖动",
      intensity: {
        title: "抖动强度",
        description: "",
      },
      recoverTime: {
        title: "抖动时间",
        description: "抖动后恢复原状的时间（毫秒）",
      },
      shakeWindow: {
        title: "是否抖动整个窗口",
        description: "默认只抖动当前的编辑器，如果选中，则会抖动整个容器",
      },
    },
    combo: {
      enable: "Combo!",
      time: {
        title: "连击时间",
        descrition:
          "两次按键之间的时间间隔小于连击时间，连击数增加1；大于连击时间，连击数重置为0。单位：秒",
      },
      showExclamation: "显示鼓励",
    },
    cursorExplosion: {
      enable: "光标爆炸",
      effect: "预设效果",
    },
  },
} satisfies Translation;

export default zh;
