import { ColorName } from '@/constants/Colors';
import {
	FontAwesome,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { TouchableHighlight, TouchableOpacity, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import useThemeColor from '../hooks/useThemeColor';

export type IconProps = {
	color?: ColorName;
	backgroundColor?: ColorName;
	size?: number;
	asButton?: boolean;
} & TouchableHighlight['props'];

// Factory function to create custom icon components.
function createIcon<
	T extends
		| keyof React.JSX.IntrinsicElements
		| React.JSXElementConstructor<any>
>(FontFamily: any) {
	return ({
		name,
		size = 24,
		color = 'text',
		backgroundColor = 'accent',
		asButton,
		style,
		...props
	}: IconProps & { name: ComponentProps<T>['name'] }) => {
		// Calculate colors for the icon and its container.
		const iconColor = useThemeColor(color);
		const containerColor = useThemeColor(backgroundColor);

		// Determine the underlay color for touchable components.
		const underlayColor = iconColor + '20';

		// Calculate container size and style.
		const containerSize = size + 8;
		const containerStyle: ViewStyle = {
			height: containerSize,
			width: containerSize,
			borderRadius: containerSize,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: asButton ? containerColor : 'transparent',
		};

		// Define the IconComponent.
		const IconComponent = () => (
			<FontFamily color={iconColor} name={name} size={size} />
		);

		// Return the icon component as a TouchableOpacity or TouchableHighlight.
		return (
			<Animated.View style={style}>
				{asButton ? (
					<TouchableOpacity
						{...props}
						activeOpacity={0.5}
						style={containerStyle}>
						<IconComponent />
					</TouchableOpacity>
				) : (
					<TouchableHighlight
						{...props}
						underlayColor={underlayColor}
						style={containerStyle}>
						<IconComponent />
					</TouchableHighlight>
				)}
			</Animated.View>
		);
	};
}

// Export various custom icon components with corresponding font families.
export const Ionicon = createIcon<typeof Ionicons>(Ionicons);
export const MaterialIcon = createIcon<typeof MaterialIcons>(MaterialIcons);
export const FontAwesomeIcon = createIcon<typeof FontAwesome>(FontAwesome);
export const MaterialCommunityIcon = createIcon<typeof MaterialCommunityIcons>(
	MaterialCommunityIcons
);
