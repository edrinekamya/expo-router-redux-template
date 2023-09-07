import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import Text from '@/components/shared/Text';
import ThemedView from '@/components/shared/ThemedView';

// Define the NotFoundScreen component, representing a 404 error screen
export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<ThemedView style={styles.container}>
				<Text style={styles.title}>This screen doesn't exist.</Text>
			</ThemedView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
