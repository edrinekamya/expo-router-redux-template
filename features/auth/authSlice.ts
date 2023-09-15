import { createSlice } from '@reduxjs/toolkit';

// Define the type for the authentication state
export type AuthState = {
	loggedIn: boolean; // Indicates if the user is logged in
};

const initialState: AuthState = {
	loggedIn: false,
};

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, payload) {
			state.loggedIn = true; // Set 'loggedIn' to true on login
		},
		logout(state, payload) {
			state.loggedIn = false; // Set 'loggedIn' to false on logout
		},
	},
});

const authReducer = slice.reducer;

export const { login, logout } = slice.actions;

export default authReducer;
