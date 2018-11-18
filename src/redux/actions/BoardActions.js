import BoardGenerator from '../../utils/BoardGenerator';
export const NEW_BOARD = 'NEW_BOARD';

function generateBoard() {
  return [[{ value: 9 }]];
}

export function newBoard() {
  return {
    type: NEW_BOARD,
    board: new BoardGenerator().generate(),
  };
}
