export function isUrl(src: string) {
  return /^http/.test(src);
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
