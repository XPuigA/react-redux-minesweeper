import { NEW_BOARD, DISPLAY_CELL, FLAG_CELL, UNFLAG_CELL } from '../actions/BoardActions';

const initialState = {

};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_BOARD:
      return Object.assign({}, state, { board: action.board });
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
      return Object.assign({}, state, { board });
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
      return Object.assign({}, state, { board });
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
      return Object.assign({}, state, { board });
    }
    default:
      return state;
  }
}
