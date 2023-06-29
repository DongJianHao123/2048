import { ICoord, IGrid, ITile, tileColor } from '../../types/index';

class Grid {
  coord: ICoord;
  bgColor: string;
  tile?: ITile;
  id: string;

  constructor({ id, coord, bgColor, tile }: IGrid) {
    this.coord = coord;
    this.bgColor = bgColor;
    this.tile = tile;
    this.id = id;
  }
}

export default Grid;
