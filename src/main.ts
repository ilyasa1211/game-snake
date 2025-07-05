import Game from "./game.ts";
import KeyboardInput from "./inputs/keyboard.ts";
import type { IGame } from "./interfaces.ts";
import "./style.css";
import { GameLoseEvent, GameWinEvent } from "./events/gameover.ts";

const app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement;

app.innerHTML = `
  <canvas></canvas>
`;

const canvas = document.querySelector("canvas") as HTMLCanvasElement;

const game = new Game(canvas, [new KeyboardInput()]);

let requestId = requestAnimationFrame(() => run(game));
let isFinish = false;

function run(game: IGame) {
  if (isFinish) {
    cancelAnimationFrame(requestId);
    return;
  }

  requestId = requestAnimationFrame((now) => {
    game.onUpdate(now);
    run(game);
  });
}

game.addEventListener(GameLoseEvent.name, () => {
  isFinish = true;
  alert("you lose");
});

game.addEventListener(GameWinEvent.name, () => {
  isFinish = true;
  alert("you win");
});
