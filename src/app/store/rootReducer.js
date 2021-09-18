import { combineReducers } from '@reduxjs/toolkit';

const createReducer = asyncReducers =>
	combineReducers({
		// 実態のあるreducerがまだ存在しなためエラーが出ている
		...asyncReducers
	});

export default createReducer;
