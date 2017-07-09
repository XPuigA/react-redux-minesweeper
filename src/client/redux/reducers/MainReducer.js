import { combineReducers } from 'redux';
import testReducer from './TestReducer.js';


const MainReducer = combineReducers({
  testReducer,
});

export default MainReducer;
