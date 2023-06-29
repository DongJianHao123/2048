import { ICoord, tileColor, tileValColor, tileValue, ITile } from '../../types/index';

class Tile {
  bgColor: tileColor;
  valColor: tileValColor;
  val: tileValue;

  constructor({ bgColor, val, valColor }: ITile) {
    this.bgColor = bgColor;
    this.val = val;
    this.valColor = valColor;
  }
}

export default Tile;
