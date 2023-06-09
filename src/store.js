// store.js

import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

export default configureStore({
  reducer: rootReducer,
}, composeWithDevTools());