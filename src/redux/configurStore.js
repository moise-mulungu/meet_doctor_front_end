import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import UserReducer from './User/user';

const rootReducer = combineReducers({
  User: UserReducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger),
);

export default store;