import { InputDown, InputLeft, InputRight, InputUp } from "../events/input.ts";
import type { IInput } from "./interface.ts";

export default class KeyboardControl implements IInput {
  public init(target: EventTarget): void {
    addEventListener("keydown", (event: KeyboardEvent): void => {
      switch (event.key) {
        case "ArrowLeft":
        case "a":
          target.dispatchEvent(new InputLeft());
          break;

        case "ArrowRight":
        case "d":
          target.dispatchEvent(new InputRight());
          break;

        case "ArrowUp":
        case "w":
          target.dispatchEvent(new InputUp());
          break;

        case "ArrowDown":
        case "s":
          target.dispatchEvent(new InputDown());
          break;
      }
    });
  }
}
