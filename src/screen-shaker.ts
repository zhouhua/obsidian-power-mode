import random from "lodash/random";

let shakeTimer: number | undefined;

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
  el.style.transform = `translate3d(${random(...range)}px, ${random(
    ...range
  )}px, 0)`;
  let moveX = random(...range);
  let moveY = random(...range);
  moveBy(moveX, moveY)
  
  shakeTimer = setTimeout(() => {
    el.style.transform = "unset";
    moveBy(-moveX, -moveY);
    shakeTimer = undefined;
  }, setting.shakeScreen.recoverTime) as unknown as number;
}
