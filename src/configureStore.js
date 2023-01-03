import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import breedsReducer from './redux/breedsReducers';

const breedsRootReducer = combineReducers({
  breeds: breedsReducer,
});

const store = configureStore({ reducer: breedsRootReducer }, applyMiddleware(ReduxThunk));

export default store;
