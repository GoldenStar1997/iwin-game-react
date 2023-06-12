// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authSlice';
import gameReducer from './gameSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
});

export default rootReducer;