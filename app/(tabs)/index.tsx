import { Button, StyleSheet } from 'react-native';
import RootView from '@/components/shared/RootView';
import useAppDispatch from '@/hooks/useAppDispatch';
import { logout } from '@/redux/slices/authSlice';
import Text from '../../components/shared/Text';

// Define the TabOneScreen component for Tab One
export default function TabOneScreen() {
	// Access the app dispatch function
	const dispatch = useAppDispatch();

	return (
		<RootView style={styles.container}>
			<Text fontFamily='SFMedium' style={styles.title}>
				Tab One
			</Text>
			{/* Render a button that triggers a logout action when pressed */}
			<Button title='Logout' onPress={() => dispatch(logout({}))} />
		</RootView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
	},
});
