// Import necessary module from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

export type TempState = {};

const initialState: TempState = {};

const slice = createSlice({
	name: 'temp',
	initialState,
	reducers: {}, // reducer functions to handle any temporary state
});

// Extract the reducer function from the tempSlice
const tempReducer = slice.reducer;

export const {} = slice.actions;

// Export the tempReducer as the default export for this module
export default tempReducer;
