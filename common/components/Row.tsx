// Import necessary modules and components

import View, { ViewProps } from './View';

// Define the Row component, a view with horizontal layout for creating rows
export default function Row({ style, ...props }: ViewProps) {
	return (
		// Render a View component with horizontal layout and alignment settings, inheriting other provided props and styles
		<View
			{...props}
			style={[{ flexDirection: 'row', alignItems: 'center' }, style]}
		/>
	);
}
