export type Coordinate = -1 | 0 | 1;

export type TSnake = {
  directionXY: [Coordinate, Coordinate];
  speed: number;
  size: number;
  positionX: number[];
  positionY: number[];
  color: string;
};
export type Position = {
  positionX: number;
  positionY: number;
};
