/**
 * The primary brand color used throughout the application.
 */
export const brandColor = '#1E90FF';

/**
 * Colors object that defines the color palette for both light and dark themes.
 *
 * You can add more color tokens to suit your specific use cases like ChatBubbles, Cards etc.
 */
const Colors = {
	light: {
		background: '#F5F5F5',
		primary: '#FFFFFF',
		secondary: '#D3D3D3',
		tertiary: '#D3D3D3',
		text: '#000000',
		button: brandColor,
		accent: brandColor,
		error: '#FF0000',
		success: '#008000',
		warning: '#FFA500',
		disabled: '#D3D3D3',
		tabIconDefault: '#808080',
		tabIconSelected: brandColor,
		grey: '#808080',
		placeholder: '#D3D3D3',
	},
	dark: {
		background: '#000000',
		primary: '#111111',
		secondary: '#A9A9A9',
		tertiary: '#A9A9A9',
		text: '#F5F5F5',
		button: brandColor,
		accent: brandColor,
		error: '#FF0000',
		success: '#008000',
		warning: '#FFA500',
		disabled: '#A9A9A9',
		tabIconDefault: '#808080',
		tabIconSelected: brandColor,
		grey: '#808080',
		placeholder: '#696969',
	},
};

/**
 * Type alias for color names, allowing easy access to color keys.
 */
export type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

/**
 * Export the customizable color palette for use throughout your application.
 */
export default Colors;
