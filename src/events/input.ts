export class InputLeft extends CustomEvent<void> {
  public static readonly name = "input-left";

  public constructor() {
    super(InputLeft.name);
  }
}

export class InputRight extends CustomEvent<void> {
  public static readonly name = "input-right";

  public constructor() {
    super(InputRight.name);
  }
}

export class InputUp extends CustomEvent<void> {
  public static readonly name = "input-up";

  public constructor() {
    super(InputUp.name);
  }
}

export class InputDown extends CustomEvent<void> {
  public static readonly name = "input-down";

  public constructor() {
    super(InputDown.name);
  }
}
