import Canvas from "./canvas.ts";
import Control from "./control.ts";
import Direction from "./direction.ts";
import Food from "./food.ts";
import Game from "./game.ts";
import { CenterMessage } from "./message.ts";
import Snake from "./snake.ts";
import Utils from "./utils.ts";

import "./style.css";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas></canvas>
`

export default class Main {
    public static requestId: number = 0;

    public static main(htmlCanvas: HTMLCanvasElement): void {
        const snakeSize = 10;
        const canvas = new Canvas(htmlCanvas, 30, 40, snakeSize);
        const snake: Snake = new Snake({
            directionXY: Direction.RIGHT,
            speed: 1,
            size: snakeSize,
            positionX: [Utils.getCanvasMiddlePosition(canvas).positionX],
            positionY: [Utils.getCanvasMiddlePosition(canvas).positionY],
            color: "white",
        });
        const food: Food = new Food(snakeSize);
        const control = new Control(snake);
        const game = new Game(snake, food, canvas, control);

        this.requestId = window.requestAnimationFrame(() => this.run(game, canvas));
    }

    public static run(game: Game, canvas: Canvas) {
        if (game.isGameOver()) {
            game.setMessage(new CenterMessage("Game Over!"));
            return window.cancelAnimationFrame(this.requestId);
        }
        canvas.clear();
        game.play(canvas.context);

        setTimeout(() => {
            this.requestId = window.requestAnimationFrame(() => this.run(game, canvas));
        }, 1000 / 10);
    }
}

const htmlCanvas = document.querySelector("canvas") as HTMLCanvasElement;

if (!htmlCanvas.getContext("2d")) {
    throw new Error("Your browser does not support Canvas 2d");
}

Main.main(htmlCanvas)