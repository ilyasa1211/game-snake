import Canvas from "./canvas.ts";
import Control from "./control.ts";
import Food from "./food.ts";
import type { Message } from "./message.ts";
import Snake from "./snake.ts";
import Utils from "./utils.ts";

export default class Game {
  private _isGameOver = false;
  private _score: number = 0;
    public snake: Snake;
    public food: Food;
    public canvas: Canvas;
    public control: Control;


  public constructor(
    snake: Snake,
    food: Food,
    canvas: Canvas,
    control: Control
  ) {
    this.snake = snake;
    this.food = food;
    this.canvas = canvas;
    this.control = control;

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
