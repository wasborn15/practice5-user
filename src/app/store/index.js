import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import createReducer from './rootReducer';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	const { logger } = require('redux-logger');

	middlewares.push(logger);
}

const store = configureStore({
	reducer: createReducer(),
	middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(middlewares),
	devTools: process.env.NODE_ENV === 'development'
});

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false;
	}
	store.asyncReducers[key] = reducer;
	store.replaceReducer(createReducer(store.asyncReducers));
	return store;
};

export default store;
