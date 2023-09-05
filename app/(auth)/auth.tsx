import RootView from '@/components/shared/RootView';
import Text from '@/components/shared/Text';
import useAppDispatch from '@/hooks/useAppDispatch';
import { login } from '@/redux/slices/authSlice';
import { Button } from 'react-native';

// Define the AuthScreen component, intended as a starting point for authentication
export default function AuthScreen() {
	// Access the app dispatch function
	const dispatch = useAppDispatch();

	return (
		<RootView
			style={{
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text fontSize={24} fontFamily='SFHeavy'>
				Welcome
			</Text>
			{/* Render a button that triggers a login action when pressed */}
			<Button title='Login' onPress={() => dispatch(login({}))} />
		</RootView>
	);
}
