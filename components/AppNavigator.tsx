import { useAuthentication } from '@/hooks/useAuthentication';
import useColorScheme from '@/hooks/useColorScheme';
import useThemeColor from '@/hooks/useThemeColor';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function AppNavigator() {
	// Retrieve color scheme and background color
	const colorScheme = useColorScheme();
	const backgroundColor = useThemeColor('background');

	// Call the authentication logic to handle route access
	useAuthentication();

	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
			{/* Provide the color scheme to navigation themes */}
			<ThemeProvider
				value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				{/* Set the status bar style based on the color scheme */}
				<StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
				{/* Render the Slot component for routing */}
				<Slot />
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
