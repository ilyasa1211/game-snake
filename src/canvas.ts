export class Wall {
  public static LEFT_BOUNDARY = "LEFT";
  public static TOP_BOUNDARY = "TOP";
  public static RIGHT_BOUNDARY = "RIGHT";
  public static BOTTOM_BOUNDARY = "BOTTOM";
}

export default class Canvas extends Wall {
  public context: CanvasRenderingContext2D;
  public canvas;
  public width;
  public height;
  public multiplier;
  public backgroundColor;

  public constructor(
    canvas: HTMLCanvasElement,
    width: number = 30,
    height: number = 40,
    multiplier = 1,
    backgroundColor: string = "rgb(46,46,46)"
  ) {
    super();

    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.multiplier = multiplier;
    this.backgroundColor = backgroundColor;
    this.context = this.canvas.getContext("2d")!;
  }

  public create(): void {
    this.canvas.width = this.width * this.multiplier;
    this.canvas.height = this.height * this.multiplier;
    this.canvas.style.backgroundColor = this.backgroundColor;
  }

  public clear(): void {
    this.context.clearRect(
      0,
      0,
      this.width * this.multiplier,
      this.height * this.multiplier
    );
  }
}