import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTests = createAsyncThunk('tests', async () => {
	const response = await axios.get(`http://localhost:8000/api/tests`);
	return response.data;
});

const testsAdapter = createEntityAdapter({});

export const { selectAll: selectTests, selectById: selectTestsById } = testsAdapter.getSelectors(
	state => state.practice5.tests
);

const testsSlice = createSlice({
	name: 'practice5/tests',
	initialState: testsAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getTests.fulfilled]: testsAdapter.setAll
	}
});

export default testsSlice.reducer;
