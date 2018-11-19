import { NEW_BOARD, DISPLAY_CELL, FLAG_CELL, UNFLAG_CELL } from '../actions/BoardActions';

const initialState = {
  board: undefined,
  totalRows: undefined,
  totalColumns: undefined,
  totalCells: undefined,
  totalMines: undefined,
  numberOfDisplayedCells: 0,
  numberOfFlaggedCells: 0,
  isGameOver: false,
  isGameWinned: false,
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_BOARD:
      return Object.assign({}, state, {
        board: action.board,
        totalRows: action.totalRows,
        totalColumns: action.totalColumns,
        totalCells: action.totalRows * action.totalColumns,
        totalMines: action.totalMines,
        numberOfDisplayedCells: 0,
        numberOfFlaggedCells: 0,
        isGameOver: false,
        isGameWinned: false,
      });
    case DISPLAY_CELL: {
      const board = state.board.map((row, rowIndex) => {
        if (rowIndex === action.rowIndex) {
          return row.map((cell, colIndex) => {
            if (colIndex === action.colIndex) {
              return Object.assign({}, cell, { isDisplayed: true });
            }
            return cell;
          });
        }
        return row;
      });
      const numberOfDisplayedCells = state.numberOfDisplayedCells + 1;
      const isGameOver = board[action.rowIndex][action.colIndex].isMine || false;
      const isGameWinned = !isGameOver &&
        ((numberOfDisplayedCells + state.totalMines) === state.totalCells) &&
        (state.numberOfFlaggedCells === state.totalMines);
      return Object.assign(
        {},
        state,
        {
          board,
          numberOfDisplayedCells,
          isGameOver,
          isGameWinned,
        },
      );
    }
    case FLAG_CELL: {
      const board = state.board.map((row, rowIndex) => {
        if (rowIndex === action.rowIndex) {
          return row.map((cell, colIndex) => {
            if (colIndex === action.colIndex) {
              return Object.assign({}, cell, { isDisplayed: false, isFlagged: true });
            }
            return cell;
          });
        }
        return row;
      });
      const numberOfFlaggedCells = state.numberOfFlaggedCells + 1;
      const isGameWinned = !state.isGameOver &&
        ((state.numberOfDisplayedCells + state.totalMines) === state.totalCells) &&
        (numberOfFlaggedCells === state.totalMines);
      return Object.assign({}, state, {
        board,
        numberOfFlaggedCells,
        isGameWinned,
      });
    }
    case UNFLAG_CELL: {
      const board = state.board.map((row, rowIndex) => {
        if (rowIndex === action.rowIndex) {
          return row.map((cell, colIndex) => {
            if (colIndex === action.colIndex) {
              return Object.assign({}, cell, { isDisplayed: false, isFlagged: false });
            }
            return cell;
          });
        }
        return row;
      });
      const numberOfFlaggedCells = state.numberOfFlaggedCells - 1;
      const isGameWinned = !state.isGameOver &&
        ((state.numberOfDisplayedCells + state.totalMines) === state.totalCells) &&
        (numberOfFlaggedCells === state.totalMines);
      return Object.assign({}, state, {
        board,
        numberOfFlaggedCells,
        isGameWinned,
      });
    }
    default:
      return state;
  }
}
