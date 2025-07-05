export class GameWinEvent extends CustomEvent<void> {
  public static readonly name = "game-win";
  public constructor() {
    super(GameWinEvent.name);
  }
}

export class GameLoseEvent extends CustomEvent<void> {
  public static readonly name = "game-lose";
  public constructor() {
    super(GameLoseEvent.name);
  }
}
