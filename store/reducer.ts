import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import tempReducer from '@/features/other/tempSlice';
import authReducer from '@/features/auth/authSlice';
import settingsReducer from '@/features/settings/settingsSlice';

// Configuration for persisting the root state
const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['temp'],
};

// Combine individual reducers into a single rootReducer
const combinedReducer = combineReducers({
	temp: tempReducer,
	auth: authReducer,
	settings: settingsReducer,
});

type MainReducer = ReturnType<typeof combinedReducer>;

// Create a persisted reducer
const persistedReducer = persistReducer<MainReducer>(
	rootPersistConfig,
	combinedReducer
);

// Define the root reducer for the Redux store
export default function reducer(state: any, action: any) {
	// Reset the store if the action type is 'RESET_STORE'
	if (action.type === 'RESET_STORE') {
		state = undefined;
	}
	return persistedReducer(state, action);
}
