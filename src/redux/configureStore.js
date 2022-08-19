import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/user';

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
