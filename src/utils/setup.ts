export function initializeCanvas(
  container: HTMLElement | null,
  size: { height: number; width: number }
): HTMLCanvasElement {
  if (!container) {
    throw new Error('Container not defined. Failed to insert canvas');
  }
  const stageContainer = document.createElement('div');
  stageContainer.setAttribute('id', 'stage-container');

  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'stage');
  canvas.setAttribute('height', String(size.height));
  canvas.setAttribute('width', String(size.width));

  stageContainer.appendChild(canvas);
  container.appendChild(stageContainer);

  return canvas;
}
