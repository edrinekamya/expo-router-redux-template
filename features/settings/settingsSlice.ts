// Import necessary module from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define the possible themes as 'dark', 'light', or 'auto'
export type Theme = 'dark' | 'light' | 'auto';

export type SettingsState = {
	theme: Theme;
};

export const themes: Theme[] = ['auto', 'dark', 'light'];

const initialState: SettingsState = {
	theme: themes[0], // Default theme is 'auto'
};

const slice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		updateTheme(state, { payload }: { payload: Theme }) {
			state.theme = payload; // Update the theme based on the provided payload
		},
	},
});

const settingsReducer = slice.reducer;

export const { updateTheme } = slice.actions;

export default settingsReducer;
