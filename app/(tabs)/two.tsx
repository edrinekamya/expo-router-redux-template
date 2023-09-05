import RootView from '@/components/shared/RootView';
import Row from '@/components/shared/Row';
import Text from '@/components/shared/Text';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useThemeColor from '@/hooks/useThemeColor';
import { Theme, setTheme } from '@/redux/slices/settingSlice';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const ThemeIcon = ({
	icon,
	theme,
}: {
	theme: Theme;
	icon: ComponentProps<typeof Ionicons>['name'];
}) => {
	const dispatch = useAppDispatch();
	const color = useThemeColor('disabled');
	const tintColor = useThemeColor('tint');
	const selected = useAppSelector((state) => state.settings.theme === theme);
	return (
		<Pressable
			disabled={selected}
			onPress={() => dispatch(setTheme(theme))}>
			{({ hovered }) => (
				<View
					style={{
						backgroundColor:
							hovered && !selected ? color + '50' : 'transparent',
						padding: 4,
						borderRadius: 8,
					}}>
					<Ionicons
						size={28}
						color={selected ? tintColor : color}
						name={icon}
					/>
				</View>
			)}
		</Pressable>
	);
};

export default function TabTwoScreen() {
	return (
		<RootView style={styles.container}>
			<Text fontFamily='SFMedium' style={styles.title}>
				Tab Two
			</Text>
			<Row>
				<ThemeIcon icon='sunny' theme='light' />
				<ThemeIcon icon='contrast' theme='auto' />
				<ThemeIcon icon='moon' theme='dark' />
			</Row>
		</RootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
	},
});
