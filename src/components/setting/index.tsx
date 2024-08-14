import { createRoot } from 'react-dom/client';
import React from 'react';
import Panel from './Panel';
import type { App } from 'obsidian';

export default function renderSetting(
  el: HTMLElement,
  initialSetting: ISetting,
  app: App,
  updateSetting: (data: ISetting) => void,
) {
  const root = createRoot(el);
  root.render(
    <Panel
      initialSetting={initialSetting}
      app={app}
      updateSetting={updateSetting}
    />,
  );
}
