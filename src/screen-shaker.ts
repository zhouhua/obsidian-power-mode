import random from "lodash/random";
import { ISetting } from "./setting";

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
  shakeTimer = setTimeout(() => {
    el.style.transform = "unset";
    shakeTimer = undefined;
  }, setting.shakeScreen.recoverTime) as unknown as number;
}
