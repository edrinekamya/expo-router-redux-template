// Import necessary modules and type for ViewProps.
import { ViewProps } from 'react-native';
import View from './View';

// Create a Screen component that fills available space.
export default function Screen({ style, ...props }: ViewProps) {
	return (
		<View
			backgroundColor='background' // Set the background color.
			style={[{ flex: 1 }, style]} // Apply flex styling.
			{...props}
		/>
	);
}
