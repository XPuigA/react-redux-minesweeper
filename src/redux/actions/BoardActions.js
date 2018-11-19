import BoardGenerator from '../../utils/BoardGenerator';

export const NEW_BOARD = 'NEW_BOARD';
export const DISPLAY_CELL = 'DISPLAY_CELL';
export const FLAG_CELL = 'FLAG_CELL';
export const UNFLAG_CELL = 'UNFLAG_CELL';

export function newBoard() {
  return {
    type: NEW_BOARD,
    board: new BoardGenerator().generate(),
    totalRows: 10,
    totalColumns: 10,
    totalMines: 10,
  };
}

export function displayCell(rowIndex, colIndex) {
  return {
    type: DISPLAY_CELL,
    rowIndex,
    colIndex,
  };
}

export function flagCell(rowIndex, colIndex) {
  return {
    type: FLAG_CELL,
    rowIndex,
    colIndex,
  };
}

export function unFlagCell(rowIndex, colIndex) {
  return {
    type: UNFLAG_CELL,
    rowIndex,
    colIndex,
  };
}
