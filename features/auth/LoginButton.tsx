import useAppDispatch from '@/common/hooks/useAppDispatch';
import { Button } from 'react-native';
import { login } from './authSlice';

/* Render a button that triggers a login action when pressed */

export default () => {
	const dispatch = useAppDispatch();
	return (
		<Button
			title='Login'
			onPress={() => {
				dispatch(login({}));
			}}
		/>
	);
};
