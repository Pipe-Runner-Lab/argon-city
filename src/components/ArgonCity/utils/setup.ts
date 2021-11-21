export function initializeCanvas(
  canvas: HTMLCanvasElement,
  size: { height: number; width: number }
): CanvasRenderingContext2D {
  canvas.setAttribute('id', 'stage');
  canvas.setAttribute('height', String(size.height));
  canvas.setAttribute('width', String(size.width));

  const ctx = canvas.getContext('2d');

  if (ctx === null) {
    throw new Error('Context not available');
  }

  return ctx;
}
