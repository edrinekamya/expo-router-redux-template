import { ViewProps } from 'react-native';
import ThemedView from './ThemedView';

export default function RootView({ style, ...props }: ViewProps) {
	return <ThemedView style={[{ flex: 1 }, style]} {...props} />;
}
