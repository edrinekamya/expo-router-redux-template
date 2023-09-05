// Import necessary modules and hook
import { View, ViewProps } from 'react-native';
import useThemeColor from '@/hooks/useThemeColor';

// Define the ThemedView component, a view with a background color based on the theme
export default function ThemedView(props: ViewProps) {
	// Destructure the style and other props from the incoming props
	const { style, ...otherProps } = props;

	// Retrieve the background color based on the theme
	const backgroundColor = useThemeColor('background');

	return (
		// Render a View component with the themed background color and other provided styles and props
		<View style={[{ backgroundColor }, style]} {...otherProps} />
	);
}
