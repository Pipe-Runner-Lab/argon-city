import { drawRoofBlock, drawStackBlock, RoofBlock, StackBlock } from './block';
import { colorPairArray } from './colors';
import { pickRandomFromArray, pickRandomInteger } from './random';

const MAX_BUILDINGS = 24;
const roofBlockTypeArray = Object.values(RoofBlock);
const stackBlockTypeArray = Object.values(StackBlock);

function drawBuilding(
  ctx: CanvasRenderingContext2D,
  topX: number,
  topY: number,
  blockDimension: number
): void {
  const [roofColor] = pickRandomFromArray(colorPairArray);
  const [roofType] = pickRandomFromArray(roofBlockTypeArray);
  drawRoofBlock(
    ctx,
    topX,
    topY,
    blockDimension,
    roofType as RoofBlock,
    roofColor.primaryColor,
    roofColor.secondaryColor
  );

  let blockY = topY + blockDimension;
  const blockX = topX;
  while (blockY < ctx.canvas.height) {
    const [stackColor] = pickRandomFromArray(colorPairArray);
    const [stackType] = pickRandomFromArray(stackBlockTypeArray);
    drawStackBlock(
      ctx,
      blockX,
      blockY,
      blockDimension,
      stackType as StackBlock,
      stackColor.primaryColor,
      stackColor.secondaryColor
    );
    blockY += blockDimension;
  }
}

function drawSkyline(
  ctx: CanvasRenderingContext2D,
  skylineMinHeight: number,
  skylineMaxHeight: number,
  blockDimension: number
): void {
  /**
   * Draw center
   */
  const startY = pickRandomInteger(skylineMinHeight, skylineMaxHeight);
  const startX = Math.floor(ctx.canvas.width / 2);
  drawBuilding(ctx, startX, startY, blockDimension);

  /**
   * Draw right
   */
  let rightX = startX + blockDimension;
  while (rightX < ctx.canvas.width + blockDimension) {
    const rightY = pickRandomInteger(skylineMinHeight, skylineMaxHeight);
    drawBuilding(ctx, rightX, rightY, blockDimension);
    rightX += blockDimension;
  }

  /**
   * Draw left
   */
  let leftX = startX - blockDimension;
  while (leftX > 0 - blockDimension) {
    const leftY = pickRandomInteger(skylineMinHeight, skylineMaxHeight);
    drawBuilding(ctx, leftX, leftY, blockDimension);
    leftX -= blockDimension;
  }
}

export function draw(ctx: CanvasRenderingContext2D): {
  resume: () => void;
  pause: () => void;
  status: {
    isDrawing: boolean;
  };
} {
  const status = {
    isDrawing: true
  };

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  /**
   * First skyline
   */
  const skylineMinHeight1 = 0;
  const skylineMaxHeight1 = Math.floor(ctx.canvas.height / 2);
  const blockDimension1 = Math.floor(ctx.canvas.width / MAX_BUILDINGS);
  drawSkyline(ctx, skylineMinHeight1, skylineMaxHeight1, blockDimension1);

  return {
    resume: () => {},
    pause: () => {},
    status
  };
}
