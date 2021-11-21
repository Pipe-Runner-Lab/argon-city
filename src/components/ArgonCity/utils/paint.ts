// eslint-disable-next-line import/extensions
/**
 * The functions defined here will make use
 * of normalized values and hence values between
 * 1 and 0
 *
 * u = x
 * v = y
 *
 * and width and height will also
 * be referred between 1 and 0
 */

const MAX_PARTICLES = 1000;
const MAX_BUILDINGS = 30;
const MAX_WIDTHS = [0.1, 0.14, 0.16];
const MID_POINT = 0.55;
const colors = ['#e96d5e', '#ff9760', '#ffe69d', '#fe75fe', '#fbf665', '#73fffe'];

enum BuildingType {
  DUST = 'DUST'
}

function pickRandom<T>(array: T[]): T {
  const length = array.length;
  const randIdx = Math.floor(length * Math.random());
  return array[randIdx];
}

function drawBuilding(ctx: CanvasRenderingContext2D): void {
  const u = Math.random();
  const v = Math.random();
  const w = pickRandom(MAX_WIDTHS);
  const h = 1 - v;

  const color = pickRandom(colors);

  ctx.clearRect(
    u * ctx.canvas.width,
    v * ctx.canvas.height,
    w * ctx.canvas.width,
    h * ctx.canvas.height
  );

  const gradient = ctx.createLinearGradient(u * ctx.canvas.width, 0, (u + w) * ctx.canvas.width, 0);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, '#00000000');

  ctx.beginPath();
  ctx.rect(
    u * ctx.canvas.width,
    v * ctx.canvas.height,
    w * ctx.canvas.width,
    h * ctx.canvas.height
  );
  ctx.strokeStyle = color;
  ctx.fillStyle = gradient;
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  for (let i = 0; i < Math.floor(MAX_PARTICLES * h); i++) {
    const uC = u + w * Math.random();
    const vC = v + h * Math.random();

    ctx.beginPath();
    ctx.arc(uC * ctx.canvas.width, vC * ctx.canvas.height, 1, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export function startDrawing(ctx: CanvasRenderingContext2D): {
  resume: () => void;
  pause: () => void;
} {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < MAX_BUILDINGS; i++) {
    drawBuilding(ctx);
  }

  return {
    resume: () => {},
    pause: () => {}
  };
}
