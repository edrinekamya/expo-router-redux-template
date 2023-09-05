// Import necessary components and libraries
import AppNavigator from '@/components/AppNavigator';
import Fonts from '@/constants/Fonts';
import { persistor, store } from '@/redux/store';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Export ErrorBoundary from expo-router
export { ErrorBoundary } from 'expo-router';

// Define initial settings for navigation
export const unstable_settings = {
	initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Define the RootLayout component
export default function RootLayout() {
	const [stateLoaded, setStateLoaded] = useState(false);
	const [fontsLoaded, error] = useFonts(Fonts);

	// Handle font loading errors
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	// Callback function to hide the splash screen when layout is triggered
	const onLayout = useCallback(() => {
		SplashScreen.hideAsync();
	}, []);

	// Callback function executed before the persist gate is lifted
	const onBeforeLimit = useCallback(() => setStateLoaded(true), []);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} onBeforeLift={onBeforeLimit}>
				{/* Render the SafeAreaView and AppNavigator when fonts and state are loaded */}
				{fontsLoaded && stateLoaded && (
					<SafeAreaView onLayout={onLayout} style={styles.container}>
						<AppNavigator />
					</SafeAreaView>
				)}
			</PersistGate>
		</Provider>
	);
}

// Define styles for the component
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
