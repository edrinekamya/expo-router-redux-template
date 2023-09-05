// Import necessary modules and libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import tempReducer from './slices/tempSlice';
import authReducer from './slices/authSlice';
import settingsReducer from './slices/settingSlice';

// Configuration for persisting the root state
const rootPersistConfig = {
	key: 'root', // Key used for storing the persisted state
	storage: AsyncStorage, // Storage engine for persisting state (AsyncStorage in this case)
	blacklist: ['temp'], // List of reducer keys to exclude from persistence
};

// Combine individual reducers into a single rootReducer
const combinedReducer = combineReducers({
	temp: tempReducer, // Temporary reducer
	auth: authReducer, // Authentication reducer
	settings: settingsReducer, // Settings reducer
});

// Define the type of the root state based on the combined reducer
type MainReducer = ReturnType<typeof combinedReducer>;

// Create a persisted reducer with the specified configuration
const persistedReducer = persistReducer<MainReducer>(
	rootPersistConfig, // Configuration for root state persistence
	combinedReducer // Combined root reducer
);

// Define the root reducer for the Redux store
export default function reducer(state: any, action: any) {
	// Reset the store to its initial state if the action type is 'RESET_STORE'
	if (action.type === 'RESET_STORE') {
		state = undefined;
	}
	return persistedReducer(state, action);
}
