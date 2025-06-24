import Canvas from "./canvas.ts";

export interface Message {
  show(context: CanvasRenderingContext2D, canvas: Canvas): void;
}

export class CenterMessage implements Message {
  public message: string;
  public color: string;
  public font: string;

  public constructor(
    message: string,
    color: string = "white",
    font = "50px Arial"
  ) {
    this.message = message;
    this.color = color;
    this.font = font;
  }

  public show(context: CanvasRenderingContext2D, canvas: Canvas): void {
    context.font = this.font;
    context.fillStyle = this.color;
    let measureText = context.measureText(this.message);
    context.fillText(
      this.message,
      (canvas.width * canvas.multiplier - measureText.width) / 2,
      (canvas.height * canvas.multiplier +
        measureText.actualBoundingBoxAscent) /
      2
    );
  }
}
