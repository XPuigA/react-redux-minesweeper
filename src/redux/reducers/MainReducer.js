import { combineReducers } from 'redux';
import boardReducer from './BoardReducer.js';


const MainReducer = combineReducers({
  boardReducer,
});

export default MainReducer;
