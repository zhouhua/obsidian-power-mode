import { ISetting } from "./setting";
import sample from "lodash/sample";
import random from "lodash/random";

let count = 0;
let timer: number | undefined;
let comboEl: HTMLElement;
let textEl: HTMLElement;
let progressEl: HTMLElement;

const EXCLAMATIONS = [
  "Super!",
  "Fantastic!",
  "Great!",
  "OMG",
  "Whoah!",
  ":O",
  "Nice!",
  "Splendid!",
  "Grand!",
  "Impressive!",
  "Stupendous!",
  "Extreme!",
  "Awesome!",
];

function init(el: HTMLElement) {
  if (!comboEl) {
    comboEl = el.parentElement!.createDiv({
      cls: "power-mode-combo",
    });
    textEl = comboEl.createDiv({
      cls: "power-mode-combo-text",
    });
    progressEl = comboEl.createDiv({
      cls: "power-mode-combo-progress",
    });
  }
}
let flickerTimer: number;
function flickAnimate(el: HTMLElement) {
  el.animate(
    [
      { opacity: 1, filter: "invert(0)" },
      { opacity: 0, filter: "invert(0.6)" },
      { opacity: 1, filter: "invert(0)" },
    ],
    {
      duration: 30,
    }
  );
}
function flicker() {
  flickAnimate(progressEl);
  if (Math.random() < 0.5) {
    flickAnimate(textEl);
  }

  flickerTimer = setTimeout(flicker, random(100, 800)) as unknown as number;
}
function stopFlicker() {
  clearTimeout(flickerTimer);
}

function reset() {
  if (timer) {
    clearTimeout(timer);
    timer = undefined;
  }
  stopFlicker();
  count = 0;
  comboEl.style.display = "none";
}

function exclaim(color: string) {
  const exclamation = sample(EXCLAMATIONS);
  const exclamationEl = comboEl.createDiv({
    cls: "power-mode-combo-exclamation",
    text: exclamation,
    attr: {
      style: `color: ${color}`,
    },
  });
  exclamationEl.animate(
    [
      { transform: "translate3d(0,0,0)", opacity: 1 },
      { transform: `translate3d(${random(-20, 20)}%, 200%, 0)`, opacity: 0 },
    ],
    {
      duration: 2000,
    }
  );
  setTimeout(() => exclamationEl.remove(), 2000);
}

function active(setting: ISetting) {
  count++;
  if (count === 1) {
    flicker();
  }
  comboEl.style.display = "flex";
  const color = `hsl(${200 - count * 1.2}, 100%, 70%)`;
  textEl.style.textShadow = `0 0 15px ${color}, 0 1px ${color}, 1px 0 ${color}, 0 -1px ${color}, -1px 0 ${color}`;
  textEl.textContent = `${count}×`;
  progressEl.style.boxShadow = `0 0 15px ${color}`;
  progressEl.style.borderColor = color;
  progressEl.style.width = `${count * 10}%`;
  progressEl.animate([{ width: "80px" }, { width: 0 }], {
    duration: setting.combo.timeout * 1000,
  });
  textEl.animate([{ transform: "scale(1.5)" }, { transform: "scale(1)" }], {
    duration: 150,
  });
  if (setting.combo.showExclamation) {
    if (count % 10 === 0) {
      exclaim(color);
    }
  }
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    reset();
  }, setting.combo.timeout * 1000) as unknown as number;
}

export function combo(el: HTMLElement, setting: ISetting) {
  if (!setting.combo.enable) {
    return;
  }
  init(el);
  active(setting);
}
