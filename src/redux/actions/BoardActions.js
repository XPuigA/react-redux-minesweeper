import BoardGenerator from '../../utils/BoardGenerator';

export const NEW_BOARD = 'NEW_BOARD';
export const DISPLAY_CELL = 'DISPLAY_CELL';

export function newBoard() {
  return {
    type: NEW_BOARD,
    board: new BoardGenerator().generate(),
  };
}

export function displayCell(rowIndex, colIndex) {
  return {
    type: DISPLAY_CELL,
    rowIndex,
    colIndex,
  };
}
