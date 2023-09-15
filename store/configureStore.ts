import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';

// Configure and create the Redux store
export const store = configureStore({
	reducer,
	middleware: [thunk],
});

// Create a persistor to enable state persistence
export const persistor = persistStore(store);

// Define types for RootState and AppDispatch based on the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
