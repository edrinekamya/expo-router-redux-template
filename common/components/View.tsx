// Import necessary modules and hook
import { ColorName } from '@/constants/Colors';
import { View as DefaultView } from 'react-native';
import useThemeColor from '../hooks/useThemeColor';

export type ViewProps = DefaultView['props'] & {
	backgroundColor?: ColorName;
};

// Define the ThemedView component, a view with a background color based on the theme
export default function View(props: ViewProps) {
	const { style, backgroundColor, ...otherProps } = props;

	// Retrieve the background color based on the theme
	const color = backgroundColor
		? useThemeColor(backgroundColor)
		: 'transparent';

	return (
		<DefaultView
			style={[{ backgroundColor: color }, style]}
			{...otherProps}
		/>
	);
}
