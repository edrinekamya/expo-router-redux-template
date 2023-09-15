// Import necessary components and hooks
import { Ionicon } from '@/common/components/Icon';
import useAppSelector from '@/common/hooks/useAppSelector';
import { Redirect, Stack, router } from 'expo-router';

export default function () {
	// Check if the user is logged in using Redux state
	const loggedIn = useAppSelector((state) => state.auth.loggedIn);

	// Ensure non-authenticated users are redirected to authentication screen
	if (!loggedIn) {
		return <Redirect href={'/auth/'} />;
	}

	return (
		<Stack
			screenOptions={{
				animation: 'slide_from_left',
				headerLeft: () => (
					<Ionicon
						style={{
							marginRight: 16,
						}}
						onPress={router.back}
						name='arrow-back'
					/>
				),
				headerShadowVisible: false,
				headerStyle: {},
				headerTitleStyle: {
					fontFamily: 'SFBold',
				},
			}}
		/>
	);
}
