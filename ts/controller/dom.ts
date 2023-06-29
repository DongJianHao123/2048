import { IBoard, IGrid } from '../../types/index';
import { initBoard, generateTiles } from './core';
let board: IBoard;
let app: HTMLElement;
function init() {
  const { board: _board } = initBoard();
  board = _board;
  const _app = getApp();
  if (!_app) return;
  app = _app!;
  clearTemplate(app);

  computedStyle(app, {
    backgroundColor: board.bgColor,
  });
  render();

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      generateTiles();
      render();
    }
  });
}

function render() {
  board.girds.forEach((gridRow: IGrid[], index) => {
    const currRowClassName = `r-${index}`;
    let rowDom = document.querySelector('.' + currRowClassName) as HTMLElement;
    if (!rowDom) {
      rowDom = document.createElement('div');
      computedClass(rowDom, ['row', currRowClassName]);
      app.appendChild(rowDom);
    }

    gridRow.forEach((grid: IGrid) => {
      let gridDom = grid._dom as HTMLElement;
      if (!gridDom) {
        gridDom = grid._dom = document.createElement('div');
        computedStyle(gridDom, {
          backgroundColor: grid.bgColor,
        });
        computedClass(gridDom, ['grid', 'col']);
        rowDom.appendChild(gridDom);
      }

      const { tile } = grid;
      if (!tile) return;
      let tileDom = grid._dom as HTMLElement;
      if (!tile._dom) {
        tileDom = tile._dom = document.createElement('div');
        computedStyle(tileDom, {
          backgroundColor: tile.bgColor,
          color: tile.valColor,
        });
        computedClass(tileDom, ['tile']);
        tileDom.innerHTML = `${tile.val}`;
        gridDom.appendChild(tileDom);
      }
    });
  });
}

function getApp(): HTMLElement | null {
  return document.querySelector('#app');
}

function computedStyle(dom: HTMLElement, style: Partial<CSSStyleDeclaration>) {
  if (!dom) return;
  Object.assign(dom.style, {
    ...style,
  });
}

function computedClass(dom: HTMLElement, classList: string[]) {
  if (!dom) return;
  dom.classList.add(...classList);
}

function clearTemplate(app: HTMLElement) {
  app.innerHTML = '';
}

init();
