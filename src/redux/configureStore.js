import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/user';
import doctorFetchReducer from './doctors/DoctorList';

const reducer = combineReducers({
  user: userReducer,
  MostRecent: doctorFetchReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
