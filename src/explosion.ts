import { Editor } from "obsidian";
import { ISetting } from "./setting";
import { random } from "lodash";
import { isUrl } from "./utils";

let count = -1;

const activeExplosions: { el: HTMLElement; clock: number }[] = [];

export function explosion(editor: Editor, setting: ISetting) {
  count++;
  const {
    frequency,
    enable,
    backgroundMode,
    maxExplosions,
    size,
    imageList,
    explosionOrder,
    duration,
    offset,
    customStyle,
    gifMode,
  } = setting.explosion;
  if (!enable || count % frequency !== 0 || imageList.length === 0) {
    return;
  }
  const pos = editor.getCursor();
  // @ts-ignore
  const coord: { left: bumber; top: number } = editor.coordsAtPos(pos);
  const { left, top } = coord;
  const el = document.body.createDiv({
    cls: ["power-mode-explosion", "power-mode-explosion-" + backgroundMode],
    attr: {
      style: `left:${left}px;top:${top}px;width:${size}ch;height:${size}rem;`,
    },
  });
  const clock = setTimeout(() => {
    el.remove();
    const index = activeExplosions.findIndex((item) => item.el === el);
    if (index > 0) {
      const match = activeExplosions.splice(index, 1);
      match[0].el.remove();
    }
  }, duration);
  activeExplosions.push({ el, clock: clock as unknown as number });
  while (maxExplosions > 0 && activeExplosions.length > maxExplosions) {
    const deleteOne = activeExplosions.shift();
    if (deleteOne) {
      deleteOne.el.remove();
      clearTimeout(deleteOne.clock);
    }
  }
  let url = imageList[0];
  switch (explosionOrder) {
    case "random":
      url = imageList[random(0, imageList.length - 1)];
      break;
    case "sequential":
      url = imageList[count % imageList.length];
      break;
    default:
      url = imageList[explosionOrder] || imageList[0];
      break;
  }
  el.style.marginTop = `${-(offset || 0) * size}rem`;

  if (gifMode === "restart") {
    if (isUrl(url)) {
      let separate = "?";
      if (url.indexOf("?") > -1) {
        separate = "&";
      }
      url += separate + "t=" + String(Date.now());
    } else {
      url = url.replace("base64,", `t=${Date.now()};base64,`);
    }
  }

  if (backgroundMode === "image") {
    el.style.backgroundImage = `url(${url})`;
  } else {
    el.style.webkitMaskImage = `url(${url})`;
    el.style.maskImage = `url(${url})`;
  }
  if (customStyle) {
    Object.keys(customStyle).forEach(
      // @ts-ignore
      (key) => (el.style[key] = customStyle[key])
    );
  }
}
