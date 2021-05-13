
export type GameCellType = {
  value: number | null;
  isValid: boolean;
  isHold: boolean;
}

export type GameRowType = Array<GameCellType>;

export type GameDeskType = Array<GameRowType>;

export type GameDataType = Array<Array<number | null>>;

