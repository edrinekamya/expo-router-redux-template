// Import necessary modules and constants
import { useState } from 'react';
import { TextInput as Input, StyleSheet } from 'react-native';
import { CustomTextProps } from './Text';
import { ColorName } from '@/constants/Colors';
import useThemeColor from '../hooks/useThemeColor';

// Define props for the custom TextInput component, including customizable text styling properties and backgroundColor option
export type TextInputProps = Input['props'] &
	CustomTextProps & { backgroundColor?: ColorName };

// Define the custom TextInput component
export default function TextInput({
	backgroundColor,
	color = 'text',
	fontFamily,
	fontSize,
	style,
	onFocus,
	onBlur,
	...props
}: TextInputProps) {
	const [key, setKey] = useState<ColorName>('grey');
	const borderColor = useThemeColor(key);

	// Retrieve themed colors
	const _color = useThemeColor(color);
	const _backgroundColor = backgroundColor
		? useThemeColor(backgroundColor)
		: 'transparent';
	const placeholderColor = useThemeColor('placeholder');

	return (
		<Input
			{...props}
			onFocus={(e) => {
				setKey('primary');
				onFocus && onFocus(e);
			}}
			onBlur={(e) => {
				setKey('grey');
				onBlur && onBlur(e);
			}}
			placeholderTextColor={placeholderColor}
			style={[
				style,
				{
					borderWidth: StyleSheet.hairlineWidth,
					borderColor,
					fontFamily,
					fontSize,
					color: _color,
					padding: 8,
					backgroundColor: _backgroundColor,
				},
			]}
		/>
	);
}
