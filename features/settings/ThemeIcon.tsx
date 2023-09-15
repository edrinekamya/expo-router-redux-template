import useAppDispatch from '@/common/hooks/useAppDispatch';
import useAppSelector from '@/common/hooks/useAppSelector';
import useThemeColor from '@/common/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Pressable } from 'react-native';
import Animated, {
	interpolate,
	interpolateColor,
	useAnimatedStyle,
	useDerivedValue,
	withSpring,
} from 'react-native-reanimated';
import { Theme, updateTheme } from './settingsSlice';

export interface ThemeIconProps {
	theme: Theme;
	name: ComponentProps<typeof Ionicons>['name'];
}

export default ({ name, theme }: ThemeIconProps) => {
	const dispatch = useAppDispatch();
	const greyColor = useThemeColor('grey');
	const selectedColor = useThemeColor('accent');
	const selected = useAppSelector((state) => state.settings.theme === theme);
	const padding = useDerivedValue(
		() => withSpring(selected ? 8 : 4),
		[selected]
	);

	const style = useAnimatedStyle(() => ({
		padding: padding.value,
		borderRadius: interpolate(padding.value, [4, 8], [8, 64]),
		backgroundColor: interpolateColor(
			padding.value,
			[4, 8],
			['transparent', selectedColor + '30']
		),
	}));

	return (
		<Pressable
			disabled={selected}
			onPress={() => dispatch(updateTheme(theme))}>
			<Animated.View style={style}>
				<Ionicons
					size={28}
					color={selected ? selectedColor : greyColor}
					name={name}
				/>
			</Animated.View>
		</Pressable>
	);
};
