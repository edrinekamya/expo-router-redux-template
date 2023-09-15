import Screen from '@/common/components/Screen';
import Text from '@/common/components/Text';
import LoginButton from '@/features/auth/LoginButton';

// Define the AuthScreen component, intended as a starting point for authentication
export default function () {
	return (
		<Screen
			style={{
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text fontSize={24} fontFamily='SFHeavy'>
				Welcome
			</Text>
			<LoginButton />
		</Screen>
	);
}
