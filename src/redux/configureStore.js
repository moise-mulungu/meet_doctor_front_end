import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/user';
import fetchReservationReducer from './reservations/ReservationList';

const reducer = combineReducers({
  user: userReducer,
  reservation: fetchReservationReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
