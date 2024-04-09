import Canvas from "./canvas";
import Control from "./control";
import Direction from "./direction";
import Food from "./food";
import Game from "./game";
import { CenterMessage } from "./message";
import Snake from "./snake";
import Utils from "./utils";

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
