import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/user';
import doctorReducer from './doctors/doctor';

const reducer = combineReducers({
  user: userReducer,
  doctor: doctorReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
