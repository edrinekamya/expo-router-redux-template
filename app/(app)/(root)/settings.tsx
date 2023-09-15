import { Ionicon } from '@/common/components/Icon';
import Row from '@/common/components/Row';
import Screen from '@/common/components/Screen';
import Text from '@/common/components/Text';
import View from '@/common/components/View';
import ThemeIcon from '@/features/settings/ThemeIcon';
import { Stack } from 'expo-router';

export default function () {
	return (
		<>
			<Stack.Screen options={{ title: 'Settings' }} />
			<Screen style={{ padding: 16 }}>
				<Row
					backgroundColor='primary'
					style={{
						padding: 16,
						borderRadius: 16,
						columnGap: 16,
					}}>
					<Ionicon size={32} name='contrast' />
					<Text
						fontSize={16}
						fontFamily='SFMedium'
						style={{ flex: 1 }}>
						Theme
					</Text>
					<Row>
						<ThemeIcon name='sunny' theme='light' />
						<ThemeIcon name='contrast' theme='auto' />
						<ThemeIcon name='moon' theme='dark' />
					</Row>
				</Row>
			</Screen>
		</>
	);
}
