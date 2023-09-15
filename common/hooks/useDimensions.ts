// Import necessary modules and hooks
import { useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

// Custom hook for obtaining dimensions
export function useDimensions() {
	// Initialize a shared value for dimensions
	const dimensions = useSharedValue(
		Platform.OS === 'web'
			? {
					width: window.innerWidth,
					height: window.innerHeight,
			  }
			: Dimensions.get('window')
	);

	// Set up an effect for handling window resize events (Web only)
	useEffect(() => {
		const handleResize = () => {
			dimensions.value = {
				width: window.innerWidth,
				height: window.innerHeight,
			};
		};

		// Add event listener for window resize (Web only)
		if (Platform.OS === 'web') {
			window.addEventListener('resize', handleResize);
		}

		// Clean up event listener on component unmount (Web only)
		return () => {
			if (Platform.OS === 'web') {
				window.removeEventListener('resize', handleResize);
			}
		};
	}, []);
	return dimensions;
}
