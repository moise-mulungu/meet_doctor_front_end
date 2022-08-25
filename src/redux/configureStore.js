import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/user';
import doctorReducer from './doctors/doctor';
import doctorFetchReducer from './doctors/DoctorList';

const reducer = combineReducers({
  user: userReducer,
  MostRecent: doctorFetchReducer,
  doctor: doctorReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
