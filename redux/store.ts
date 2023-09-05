// Import necessary modules and libraries
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';

// Configure and create the Redux store
export const store = configureStore({
	reducer, // Set the root reducer for the store
	middleware: [thunk], // Apply the thunk middleware for handling async actions
});

// Create a persistor to enable state persistence
export const persistor = persistStore(store);

// Define types for RootState and AppDispatch based on the store
export type RootState = ReturnType<typeof store.getState>; // Type representing the Redux store state
export type AppDispatch = typeof store.dispatch; // Type representing the dispatch function for Redux actions
