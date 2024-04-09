import Canvas from "./canvas";
import Control from "./control";
import Food from "./food";
import { Message } from "./message";
import Snake from "./snake";
import Utils from "./utils";

export default class Game {
  private _isGameOver = false;
  private _score: number = 0;

  public constructor(
    public snake: Snake,
    public food: Food,
    public canvas: Canvas,
    public control: Control
  ) {
    const randomFoodPositionX =
      Utils.getIntegerRandomNumberBetween(0, this.canvas.width) *
      this.canvas.multiplier;
    const randomFoodPositionY =
      Utils.getIntegerRandomNumberBetween(0, this.canvas.height) *
      this.canvas.multiplier;

    this.food.setPosition(randomFoodPositionX, randomFoodPositionY);

    this.canvas.create();
    this.control.init();
  }

  public isGameOver(set?: boolean): boolean | void {
    if (typeof set === "undefined") {
      return this._isGameOver;
    }
    this._isGameOver = set;
  }

  public addScore(add: number): void {
    this._score += add;
  }

  public setMessage(message: Message): void {
    message.show(this.canvas.context, this.canvas);
  }

  public play(context: CanvasRenderingContext2D) {
    if (this.snake.isCollideWithWall(this.canvas)) {
      this.isGameOver(true);
    }

    // if (this.snake.isEatSelf()) {
    //   this.isGameOver(true);
    // }

    this.snake.move();

    if (this.snake.isEatThePrey(this.food)) {
      const randomFoodPositionX =
        Utils.getIntegerRandomNumberBetween(0, this.canvas.width) *
        this.canvas.multiplier;
      const randomFoodPositionY =
        Utils.getIntegerRandomNumberBetween(0, this.canvas.height) *
        this.canvas.multiplier;
      this.food.setPosition(randomFoodPositionX, randomFoodPositionY);

      this.snake.grow();
    }

    this.snake.draw(context);
    this.food.draw(context);
  }
}
