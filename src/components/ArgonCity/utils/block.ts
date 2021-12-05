export enum RoofBlock {
  ISOSCELES_TRIANGLE = 'ISOSCELES_TRIANGLE',
  RIGHT_ANGLE_TRIANGLE = 'RIGHT_ANGLE_TRIANGLE',
  RIGHT_ANGLE_TRIANGLE_INVERTED = 'RIGHT_ANGLE_TRIANGLE_TRIANGLE',
  FLAG = 'FLAG',
  DOME = 'DOME'
}

export enum StackBlock {
  APARTMENT = 'APARTMENT',
  GANG_HIDEOUT = 'GANG_HIDEOUT',
  GANG_HIDEOUT_INVERTED = 'GANG_HIDEOUT_INVERTED',
  LAB = 'LAB',
  FACTORY = 'FACTORY'
}

export function drawRoofBlock(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  dimension: number,
  type = RoofBlock.ISOSCELES_TRIANGLE,
  primaryColor = '#ffffff',
  secondaryColor = '#ffffff32'
): void {
  switch (type) {
    case RoofBlock.ISOSCELES_TRIANGLE:
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - dimension / 2, y + dimension);
      ctx.lineTo(x + dimension / 2, y + dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - dimension / 4, y + dimension);
      ctx.lineTo(x + dimension / 4, y + dimension);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();
      break;
    case RoofBlock.RIGHT_ANGLE_TRIANGLE:
      ctx.beginPath();
      ctx.moveTo(x - dimension / 2, y);
      ctx.lineTo(x - dimension / 2, y + dimension);
      ctx.lineTo(x + dimension / 2, y + dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x - dimension / 2, y + dimension / 3);
      ctx.lineTo(x + dimension / 6, y + dimension);
      ctx.lineTo(x - dimension / 6, y + dimension);
      ctx.lineTo(x - dimension / 2, y + (dimension * 2) / 3);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();
      break;
    case RoofBlock.RIGHT_ANGLE_TRIANGLE_INVERTED:
      ctx.beginPath();
      ctx.moveTo(x + dimension / 2, y);
      ctx.lineTo(x + dimension / 2, y + dimension);
      ctx.lineTo(x - dimension / 2, y + dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x + dimension / 2, y + dimension / 3);
      ctx.lineTo(x - dimension / 6, y + dimension);
      ctx.lineTo(x + dimension / 6, y + dimension);
      ctx.lineTo(x + dimension / 2, y + (dimension * 2) / 3);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();
      break;
    case RoofBlock.DOME:
      ctx.beginPath();
      ctx.arc(x, y + dimension, dimension / 2, 0, Math.PI, true);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y + dimension, dimension / 4, 0, Math.PI, true);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();
      break;
    case RoofBlock.FLAG:
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (dimension * 3) / 10, y + (dimension * 2) / 10);
      ctx.lineTo(x, y + (dimension * 4) / 10);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = primaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x, y + (dimension * 4) / 10);
      ctx.lineTo(x, y + (dimension * 5) / 10);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, y + (dimension * 5) / 10);
      ctx.lineTo(x - dimension / 2, y + dimension);
      ctx.lineTo(x + dimension / 2, y + dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();
    default:
      break;
  }
}

export function drawStackBlock(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  dimension: number,
  type = StackBlock.APARTMENT,
  primaryColor = '#ffffff',
  secondaryColor = '#ffffff32'
): void {
  switch (type) {
    case StackBlock.APARTMENT:
      ctx.beginPath();
      ctx.rect(x - dimension / 2, y, dimension, dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      const paneSize = dimension / 4;

      [
        [x - paneSize / 2, y + paneSize / 2, -paneSize, paneSize],
        [x + paneSize / 2, y + paneSize / 2, paneSize, paneSize],
        [x - paneSize / 2, y + dimension / 2 + paneSize / 2, -paneSize, paneSize],
        [x + paneSize / 2, y + dimension / 2 + paneSize / 2, paneSize, paneSize]
      ].forEach((pane) => {
        const [pX, pY, pW, pH] = pane;

        ctx.beginPath();
        ctx.rect(pX, pY, pW, pH);
        ctx.closePath();
        ctx.fillStyle = primaryColor;
        ctx.fill();
      });
      break;
    case StackBlock.GANG_HIDEOUT:
      ctx.beginPath();
      ctx.rect(x - dimension / 2, y, dimension, dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x - dimension / 2, y);
      ctx.lineTo(x + dimension / 2, y + dimension);
      ctx.lineTo(x - dimension / 2, y + dimension);
      ctx.lineTo(x + dimension / 2, y);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();
      break;
    case StackBlock.GANG_HIDEOUT_INVERTED:
      ctx.beginPath();
      ctx.rect(x - dimension / 2, y, dimension, dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x - dimension / 2, y);
      ctx.lineTo(x + dimension / 2, y + dimension);
      ctx.lineTo(x + dimension / 2, y);
      ctx.lineTo(x - dimension / 2, y + dimension);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();
      break;
    case StackBlock.LAB:
      ctx.beginPath();
      ctx.rect(x - dimension / 2, y, dimension, dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y + dimension / 2, dimension / 3, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y + dimension / 2, dimension / 5, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = secondaryColor;
      ctx.fill();
      break;
    case StackBlock.FACTORY:
      ctx.beginPath();
      ctx.rect(x - dimension / 2, y, dimension, dimension);
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.stroke();
      ctx.fillStyle = secondaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.rect(x - dimension / 3, y + dimension / 6, (dimension * 2) / 3, (dimension * 2) / 3);
      ctx.closePath();
      ctx.fillStyle = primaryColor;
      ctx.fill();

      ctx.beginPath();
      ctx.rect(x - dimension / 6, y + dimension / 3, dimension / 3, dimension / 3);
      ctx.closePath();
      ctx.fillStyle = secondaryColor;
      ctx.fill();
      break;
    default:
      break;
  }
}
