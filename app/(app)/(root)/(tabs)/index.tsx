import Screen from '@/common/components/Screen';
import Text from '@/common/components/Text';
import LogoutButton from '@/features/auth/LogoutButton';
import { StyleSheet } from 'react-native';

// Define the TabOneScreen component for Tab One
export default function () {
	return (
		<Screen style={styles.container}>
			<Text fontFamily='SFMedium' style={styles.title}>
				Tab One
			</Text>
			<LogoutButton />
		</Screen>
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
