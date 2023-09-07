import Colors from '@/constants/Colors';
import useColorScheme from './useColorScheme';

// Define a custom hook for accessing theme colors
export default function useThemeColor(
	colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
	// Retrieve the current color scheme from the app
	const theme = useColorScheme();

	// Return the corresponding color based on the provided color name and current color scheme
	return Colors[theme][colorName];
}
