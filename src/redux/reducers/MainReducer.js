import { combineReducers } from 'redux';
import gameReducer from './GameReducer.js';


const MainReducer = combineReducers({
  gameReducer,
});

export default MainReducer;
