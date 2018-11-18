import { NEW_BOARD } from '../actions/BoardActions';

const initialState = {

};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_BOARD:
      return Object.assign({}, state, { board: action.board });
    default:
      return state;
  }
}
