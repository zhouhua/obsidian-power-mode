const defaultInitializer = (index: number) => index;

export function createRange(
  length: number,
  initializer: (index: number) => number = defaultInitializer,
): number[] {
  return [...new Array<number>(length)].map((_, index) => initializer(index));
}
