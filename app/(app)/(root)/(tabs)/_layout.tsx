import { Ionicon } from '@/common/components/Icon';
import Text from '@/common/components/Text';
import useThemeColor from '@/common/hooks/useThemeColor';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, Tabs, router } from 'expo-router';
import React, { useEffect, useState } from 'react';

// Define the TabBarIcon function, used for rendering icons in the tab bar
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} {...props} />;
}

const Greeting = () => {
	const [greeting, setGreeting] = useState('');

	// Function to determine the time of day and set the greeting message
	const getGreeting = () => {
		const currentHour = new Date().getHours();

		if (currentHour >= 5 && currentHour < 12) {
			setGreeting('Good morning');
		} else if (currentHour >= 12 && currentHour < 18) {
			setGreeting('Good afternoon');
		} else {
			setGreeting('Good evening');
		}
	};

	useEffect(() => {
		getGreeting();
	}, []);

	return (
		<Text fontFamily='SFHeavy' fontSize={24}>
			{greeting}
		</Text>
	);
};

// Define the TabLayout component
export default function TabLayout() {
	const tabBarActiveTintColor = useThemeColor('accent');
	const primaryColor = useThemeColor('primary');

	return (
		<>
			<Stack.Screen
				options={{
					navigationBarColor: primaryColor,
					headerShown: false,
				}}
			/>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor,
					headerShadowVisible: false,
					headerTitleStyle: {
						fontFamily: 'SFMedium',
					},
					tabBarLabelStyle: {
						fontFamily: 'SFMedium',
					},
					tabBarStyle: {
						backgroundColor: primaryColor,
						borderTopWidth: 0,
					},
					headerStyle: {
						backgroundColor: primaryColor,
					},
				}}>
				<Tabs.Screen
					name='index'
					options={{
						title: 'Tab One',
						headerTitle: () => <Greeting />,
						tabBarIcon: ({ color }) => (
							<TabBarIcon name='home' color={color} />
						),
						headerRight: () => (
							<Ionicon
								onPress={() => router.push('/settings')}
								name='settings-outline'
								style={{
									marginHorizontal: 16,
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name='two'
					options={{
						title: 'Tab Two',
						tabBarIcon: ({ color }) => (
							<TabBarIcon name='user-circle' color={color} />
						),
					}}
				/>
			</Tabs>
		</>
	);
}
