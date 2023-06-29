import { IBoard, IGrid, ITile } from '../../types/index';
import Board from '../class/Board';
import Grid from '../class/Grid';
import { baseConfig } from '../config/index';

let board: IBoard;
function initBoard() {
  const { board: boardConfig, grid: gridConfig } = baseConfig;
  const { rowNum, colNum, bgColor: boardBgColor } = boardConfig;
  const { bgColor: gridBgColor, size } = gridConfig;

  const _board = new Board({ bgColor: boardBgColor, girds: [] });

  for (let i = 0; i < rowNum; i++) {
    const curRowGirds: IGrid[] = [];
    for (let j = 0; j < colNum; j++) {
      curRowGirds.push(new Grid({ id: `${i}-${j}`, bgColor: gridBgColor, coord: { x: i, y: j } }));
    }
    _board.girds.push(curRowGirds);
  }
  board = _board;
  generateTiles();
  return { board, gridSize: size, boardBgColor };
}

function generateTiles() {
  const { generateRule } = baseConfig.tile;
  const generateNum = generateRule.length;

  const tiles: ITile[] = [];
  for (let i = 0; i < generateNum; i++) {
    tiles.push(createTile());
  }

  insertTilesToBoard(tiles);
}

function insertTilesToBoard(tiles: ITile[]) {
  if (!board || tiles.length === 0) return;
  let emptyGrids: IGrid[] = board.girds.reduce((prev, currRow) => prev.concat(currRow.filter((grid) => !grid.tile)), []);

  while (emptyGrids.length > 0 && tiles.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyGrids.length);
    const currGird = emptyGrids[randomIndex];
    currGird.tile = tiles.pop();
    emptyGrids = emptyGrids.filter((grid) => grid.id !== currGird.id);
  }
}

function createTile(): ITile {
  const { exterior } = baseConfig.tile;
  const randomVal = getRandomVal();
  const curExterior = exterior.find((e) => e.val === randomVal)!;
  return {
    bgColor: curExterior.bgColor,
    valColor: curExterior.valColor,
    val: curExterior.val,
  };
}

function getRandomVal() {
  const { generateRule } = baseConfig.tile;
  const weightArr: Array<{ weight: number; val: number }> = [];

  generateRule.forEach(({ val, randomWeight }) => {
    weightArr.push({
      weight: randomWeight * Math.random(),
      val,
    });
  });

  weightArr.sort((a, b) => b.weight - a.weight);
  return weightArr.shift()!.val;
}

export { initBoard, generateTiles, insertTilesToBoard };
