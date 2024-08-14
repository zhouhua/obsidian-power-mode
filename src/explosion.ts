import type { Editor } from 'obsidian';
import { random } from 'lodash';
import { isUrl } from './utils';

let count = -1;

const activeExplosions: { el: HTMLElement; clock: NodeJS.Timeout; }[] = [];

export function explosion(editor: Editor, setting: ISetting) {
  count++;
  const { enable } = setting.explosion;
  const {
    frequency = 1,
    backgroundMode = 'image',
    maxExplosions = 1,
    size = 1,
    imageList = [],
    explosionOrder = 'random',
    duration = 1000,
    offset = 0,
    customStyle,
    gifMode = 'continue',
  } = setting.useCustom ? setting.customEffect : setting.explosion;
  if (!enable || count % frequency !== 0 || imageList.length === 0) {
    return;
  }
  const pos = editor.getCursor();
  const coord = editor.coordsAtPos(pos, true);
  const { left, top } = coord;
  const el = editor.containerEl.createDiv({
    cls: ['power-mode-explosion', 'power-mode-explosion-' + backgroundMode],
    attr: {
      style: `left:${left}px;top:${top - editor.getScrollInfo().top}px;width:${size}ch;height:${size}rem;`,
    },
  });
  const clock = setTimeout(() => {
    el.remove();
    const index = activeExplosions.findIndex(item => item.el === el);
    if (index > 0) {
      const match = activeExplosions.splice(index, 1);
      match[0].el.remove();
    }
  }, duration);
  activeExplosions.push({ el, clock });
  while (maxExplosions > 0 && activeExplosions.length > maxExplosions) {
    const deleteOne = activeExplosions.shift();
    if (deleteOne) {
      deleteOne.el.remove();
      clearTimeout(deleteOne.clock);
    }
  }
  let [url] = imageList;
  switch (explosionOrder) {
    case 'random':
      url = imageList[random(0, imageList.length - 1)];
      break;
    case 'sequential':
      url = imageList[count % imageList.length];
      break;
    default:
      url = imageList[explosionOrder] || imageList[0];
      break;
  }
  el.style.marginTop = `${-(offset || 0) * size}rem`;

  if (gifMode === 'restart') {
    if (isUrl(url)) {
      let separate = '?';
      if (url.includes('?')) {
        separate = '&';
      }
      url += separate + 't=' + String(Date.now());
    }
    else {
      url = url.replace('base64,', `t=${Date.now()};base64,`);
    }
  }

  if (backgroundMode === 'image') {
    el.style.backgroundImage = `url(${url})`;
  }
  else {
    el.style.webkitMaskImage = `url(${url})`;
    el.style.maskImage = `url(${url})`;
  }
  if (customStyle) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const keys = Object.keys(customStyle) as (keyof Omit<
      CSSStyleDeclaration,
      'length' | 'parentRule' | 'getPropertyPriority' | 'removeProperty' | 'setProperty' | 'item' | 'getPropertyValue' | number
    >)[];
    keys.forEach(
      key => (el.style[key] = customStyle[key]!),
    );
  }
}
