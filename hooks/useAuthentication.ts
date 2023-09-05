import { router, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import useAppSelector from './useAppSelector';

// This hook will protect the route access based on user authentication.
export function useAuthentication() {
	const segments = useSegments();
	const loggedIn = useAppSelector((state) => state.auth.loggedIn);

	useEffect(() => {
		const inAuthGroup = segments[0] === '(auth)';

		if (
			// If the user is not signed in and the initial segment is not anything in the auth group.
			!loggedIn &&
			!inAuthGroup
		) {
			// Redirect to the sign-in page.
			router.replace('/(auth)/auth');
		} else if (loggedIn && inAuthGroup) {
			// Redirect away from the sign-in page.
			router.replace('/(tabs)');
		}
	}, [loggedIn, segments]);
}
