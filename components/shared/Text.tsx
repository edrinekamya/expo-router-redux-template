// Import necessary modules and constants
import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
import useThemeColor from '@/hooks/useThemeColor';
import { Text as DefaultText, TextProps } from 'react-native';

// Define the Text component, a custom text component with additional styling options
export default function Text({
	style,
	fontFamily = 'SFRegular',
	color = 'text',
	fontSize,
	...props // Additional props that can be passed to the underlying DefaultText component (React Native TextProps)
}: TextProps & {
	fontFamily?: keyof typeof Fonts; // Accepts one of the keys defined in the Fonts constant
	color?: keyof typeof Colors.dark & keyof typeof Colors.light; // Accepts a key from either dark or light color schemes
	fontSize?: number;
}) {
	// Retrieve the themed color based on the specified color name
	const _color = useThemeColor(color);

	return (
		<DefaultText
			style={[{ color: _color, fontFamily, fontSize }, style]}
			{...props}
		/>
	);
}
