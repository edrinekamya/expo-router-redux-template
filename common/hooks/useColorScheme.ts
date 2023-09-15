// Import necessary modules and functions
import { useColorScheme as _useColorScheme } from 'react-native'; // Import the original useColorScheme from react-native
import useAppSelector from './useAppSelector'; // Import the useAppSelector hook for accessing app state

// Define a custom hook for color scheme
export default function useColorScheme() {
	// Retrieve the selected theme from the app's state
	const theme = useAppSelector((state) => state.settings.theme);

	// Use the original useColorScheme to get the device's color scheme
	const colorScheme = _useColorScheme() ?? 'dark';

	// Determine the effective color scheme based on the app's theme setting
	return theme === 'auto' ? colorScheme : theme;
}
