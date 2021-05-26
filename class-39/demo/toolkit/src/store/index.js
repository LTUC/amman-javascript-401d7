import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import pokemon from './pokemon';
const reducer = combineReducers({
  pokemon,
});

export default configureStore({ reducer });
