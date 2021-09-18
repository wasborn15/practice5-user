import { combineReducers } from '@reduxjs/toolkit';
import tests from './testsSlice';

const reducer = combineReducers({ tests });

export default reducer;
