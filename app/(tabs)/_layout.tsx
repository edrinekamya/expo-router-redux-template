import Text from '@/components/shared/Text';
import useThemeColor from '@/hooks/useThemeColor';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';

// Define the TabBarIcon function, used for rendering icons in the tab bar
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  // Render a FontAwesome icon with the specified size and color
  return <FontAwesome size={28} {...props} />;
}


const Greeting = () => {
	// State to hold the greeting message
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

	// Call getGreeting when the component mounts
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
	// Retrieve the active tab bar color from the theme
	const tabBarActiveTintColor = useThemeColor('tint');

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor,
				headerTitleStyle: {
					fontFamily: 'SFMedium',
				},
				tabBarLabelStyle: {
					fontFamily: 'SFMedium',
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
	);
}
