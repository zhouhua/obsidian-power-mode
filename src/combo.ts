import sample from 'lodash/sample';
import random from 'lodash/random';
import type { MarkdownView, TFile } from 'obsidian';
import { isMarkdownFile } from './utils';

let count = 0;
let timer: NodeJS.Timeout | undefined;
let comboEl: HTMLElement | undefined;
let textEl: HTMLElement;
let progressEl: HTMLElement;

const lengthMap: Record<string, number> = {};

const EXCLAMATIONS = [
  'Super!',
  'Fantastic!',
  'Great!',
  'OMG',
  'Whoah!',
  ':O',
  'Nice!',
  'Splendid!',
  'Grand!',
  'Impressive!',
  'Stupendous!',
  'Extreme!',
  'Awesome!',
];

function init() {
  if (!comboEl) {
    comboEl = document.body.createDiv({
      cls: 'power-mode-combo',
    });
    textEl = comboEl.createDiv({
      cls: 'power-mode-combo-text',
    });
    progressEl = comboEl.createDiv({
      cls: 'power-mode-combo-progress',
    });
  }
}
let flickerTimer: NodeJS.Timeout;
function flickAnimate(el: HTMLElement) {
  el.animate(
    [
      { opacity: 1, filter: 'invert(0)' },
      { opacity: 0.3, filter: 'invert(0.6)' },
      { opacity: 1, filter: 'invert(0)' },
    ],
    {
      duration: 30,
    },
  );
}
function flicker() {
  flickAnimate(progressEl);
  if (Math.random() < 0.5) {
    flickAnimate(textEl);
  }

  flickerTimer = setTimeout(flicker, random(100, 800));
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
  comboEl!.style.display = 'none';
}

function exclaim(color: string) {
  const exclamation = sample(EXCLAMATIONS);
  const exclamationEl = comboEl!.createDiv({
    cls: 'power-mode-combo-exclamation',
    text: exclamation,
    attr: {
      style: `color: ${color}`,
    },
  });
  exclamationEl.animate(
    [
      { transform: 'translate3d(0,0,0)', opacity: 1 },
      { transform: `translate3d(${random(-20, 20)}%, 200%, 0)`, opacity: 0 },
    ],
    {
      duration: 2000,
    },
  );
  setTimeout(() => {
    exclamationEl.remove();
  }, 2000);
}

function active(setting: ISetting) {
  count++;
  if (count === 1) {
    flicker();
  }
  comboEl!.style.display = 'flex';
  const color = `hsl(${200 - count * 1.2}, 100%, 70%)`;
  textEl.style.textShadow = `0 0 15px ${color}, 0 1px ${color}, 1px 0 ${color}, 0 -1px ${color}, -1px 0 ${color}`;
  textEl.textContent = `${count}×`;
  progressEl.style.boxShadow = `0 0 15px ${color}`;
  progressEl.style.borderColor = color;
  progressEl.style.width = `${count * 10}%`;
  progressEl.animate([{ width: '80px' }, { width: 0 }], {
    duration: setting.combo.timeout * 1000,
  });
  textEl.animate([{ transform: 'scale(1.5)' }, { transform: 'scale(1)' }], {
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
  }, setting.combo.timeout * 1000);
}

export function combo(setting: ISetting, info: MarkdownView) {
  if (!setting.combo.enable) {
    return;
  }
  const currentLength = info.editor.getValue().length;
  const path = info.file?.path;
  if (setting.combo.precisionInput) {
    if (path && path in lengthMap && lengthMap[path] <= currentLength) {
      init();
      active(setting);
    }
  }
  else {
    init();
    active(setting);
  }
  if (path) {
    lengthMap[path] = currentLength;
  }
}

export async function comboInit(file: TFile) {
  if (isMarkdownFile(file)) {
    const { path } = file;
    const markdown = await file.vault.cachedRead(file);
    lengthMap[path] = markdown.length;
  }
}
