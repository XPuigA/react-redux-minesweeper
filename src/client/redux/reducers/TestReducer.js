import { NEW_RANDOM } from '../actions/TestActions';

const initialState = {
  number: '#',
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_RANDOM:
      return Object.assign({}, state, { number: action.number });
    default:
      return state;
  }
}
