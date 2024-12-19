import type { TFile } from 'obsidian';

export function isUrl(src: string) {
  return src.startsWith('http');
}

export function preload(src: string) {
  if (isUrl(src)) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      img.remove();
    };
  }
}

export function isMarkdownFile(file: TFile) {
  return ['md', 'markdown'].includes(file.extension);
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
