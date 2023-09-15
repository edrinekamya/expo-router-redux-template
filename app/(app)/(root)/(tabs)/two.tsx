import Screen from '@/common/components/Screen';
import Text from '@/common/components/Text';
import { StyleSheet } from 'react-native';

export default function () {
	return (
		<Screen style={styles.container}>
			<Text fontFamily='SFMedium' style={styles.title}>
				Tab Two
			</Text>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
	},
});
