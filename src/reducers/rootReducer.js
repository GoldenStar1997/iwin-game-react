// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authSlice';
import gameReducer from './gameSlice';
import adminReducer from './adminSlice';
import alertReducer from './alertSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  admin: adminReducer,
  alert: alertReducer,
});

export default rootReducer;