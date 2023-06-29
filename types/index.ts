export interface IBoard {
  bgColor: string;
  girds: IGrid[][];
}

export interface IGrid {
  id: string;
  coord: ICoord;
  bgColor: string;
  tile?: ITile;
  _dom?: HTMLElement;
}

export interface ITile {
  bgColor: tileColor;
  valColor: tileValColor;
  val: tileValue;
  _dom?: HTMLElement;
}

export interface ICoord {
  x: number;
  y: number;
}

export type tileValue = 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;
export type tileColor =
  | '#fef4f2'
  | '#fed9a2'
  | '#fc8c5e'
  | '#f8692f'
  | '#f8563d'
  | '#ff3936'
  | '#00c3dd'
  | '#00a4be'
  | '#00abcb'
  | '#00abcb'
  | '#00abcb';

export type tileValColor = '#333' | '#fff';
