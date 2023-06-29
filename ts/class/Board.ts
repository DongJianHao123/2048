import { IBoard, IGrid } from '../../types/index';

class Board {
  bgColor: string;
  girds: IGrid[][];

  constructor({ bgColor, girds }: IBoard) {
    this.bgColor = bgColor;
    this.girds = girds;
  }
}

export default Board;
