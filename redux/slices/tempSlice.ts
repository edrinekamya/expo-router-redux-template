// Import necessary module from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

export type TempState = {};

const initialState: TempState = {};

// Create a temporary slice using Redux Toolkit
const tempSlice = createSlice({
	name: 'temp',
	initialState,
	reducers: {}, // reducer functions to handle any temporary state
});

// Extract the reducer function from the tempSlice
const tempReducer = tempSlice.reducer;

export const {} = tempSlice.actions;

// Export the tempReducer as the default export for this module
export default tempReducer;
