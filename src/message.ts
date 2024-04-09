import Canvas from "./canvas";

export interface Message {
  show(context: CanvasRenderingContext2D, canvas: Canvas): void;
}

export class CenterMessage implements Message {
  public constructor(
    public message: string,
    public color: string = "white",
    public font = "50px Arial"
  ) { }

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
