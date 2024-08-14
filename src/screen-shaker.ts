import random from 'lodash/random';

let shakeTimer: NodeJS.Timeout | undefined;

let lastShakeX = 0;
let lastShakeY = 0;

export function shakeScreen(el: HTMLElement, setting: ISetting) {
  if (!setting.shakeScreen.enable) {
    return;
  }

  if (shakeTimer) {
    clearTimeout(shakeTimer);
    shakeTimer = undefined;
  }
  const range: [number, number] = [
    -setting.shakeScreen.intensity,
    setting.shakeScreen.intensity,
  ];
  const moveX = random(...range);
  const moveY = random(...range);
  if (setting.shakeScreen.shakeWindow) {
    moveBy(moveX - lastShakeX, moveY - lastShakeY);
    lastShakeX = moveX;
    lastShakeY = moveY;
  }
  else {
    el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  }
  shakeTimer = setTimeout(() => {
    if (setting.shakeScreen.shakeWindow) {
      moveBy(-lastShakeX, -lastShakeY);
      lastShakeX = 0;
      lastShakeY = 0;
    }
    else {
      el.style.transform = 'unset';
    }
    shakeTimer = undefined;
  }, setting.shakeScreen.recoverTime);
}
