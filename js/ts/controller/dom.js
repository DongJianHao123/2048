import { initBoard, generateTiles } from './core.js';
let board;
let app;
function init() {
    const { board: _board } = initBoard();
    board = _board;
    const _app = getApp();
    if (!_app)
        return;
    app = _app;
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
    board.girds.forEach((gridRow, index) => {
        const currRowClassName = `r-${index}`;
        let rowDom = document.querySelector('.' + currRowClassName);
        if (!rowDom) {
            rowDom = document.createElement('div');
            computedClass(rowDom, ['row', currRowClassName]);
            app.appendChild(rowDom);
        }
        gridRow.forEach((grid) => {
            let gridDom = grid._dom;
            if (!gridDom) {
                gridDom = grid._dom = document.createElement('div');
                computedStyle(gridDom, {
                    backgroundColor: grid.bgColor,
                });
                computedClass(gridDom, ['grid', 'col']);
                rowDom.appendChild(gridDom);
            }
            const { tile } = grid;
            if (!tile)
                return;
            let tileDom = grid._dom;
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
function getApp() {
    return document.querySelector('#app');
}
function computedStyle(dom, style) {
    if (!dom)
        return;
    Object.assign(dom.style, Object.assign({}, style));
}
function computedClass(dom, classList) {
    if (!dom)
        return;
    dom.classList.add(...classList);
}
function clearTemplate(app) {
    app.innerHTML = '';
}
init();
