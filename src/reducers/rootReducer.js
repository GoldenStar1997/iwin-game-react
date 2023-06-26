// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authSlice';
import gameReducer from './gameSlice';
import adminReducer from './adminSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  admin: adminReducer,
});

export default rootReducer;