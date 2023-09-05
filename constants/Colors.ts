export const tintColorLight = '#2D8CFF';
const tintColorDark = '#FFFFFF'; // White

export default {
	light: {
		text: '#000000', // Black
		background: '#FFFFFF', // White
		tint: tintColorLight,
		tabIconDefault: '#CCCCCC', // Light gray
		tabIconSelected: tintColorLight,
		primary: '#007BFF', // Blue
		secondary: '#6C757D', // Slate gray
		tertiary: '#D1D1D1', // Light gray
		button: '#2D8CFF', // Blue
		accent: '#FFC107', // Yellow
		error: '#FF0000', // Red
		success: '#008000', // Green
		warning: '#FFA500', // Orange
		disabled: '#A1A1A1', // Gray
	},
	dark: {
		text: '#FFFFFF', // White
		background: '#000000', // Black
		tint: tintColorDark,
		tabIconDefault: '#CCCCCC', // Light gray
		tabIconSelected: tintColorDark,
		primary: '#2196F3', // Dark blue
		secondary: '#8E8E93', // Medium gray (slate)
		tertiary: '#444444', // Dark gray
		button: '#03A9F4', // Light blue
		accent: '#FFD700', // Gold
		error: '#FF0000', // Red
		success: '#008000', // Green
		warning: '#FFA500', // Orange
		disabled: '#787878', // Medium gray
	},
};
