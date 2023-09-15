const Fonts = {
	SFLight: require('@/assets/fonts/sf-pro-text-light.ttf'),
	SFRegular: require('@/assets/fonts/sf-pro-text-regular.ttf'),
	SFMedium: require('@/assets/fonts/sf-pro-text-medium.ttf'),
	SFBold: require('@/assets/fonts/sf-pro-text-semibold.ttf'),
	SFHeavy: require('@/assets/fonts/sf-pro-text-heavy.ttf'),
};

export type FontFamily = keyof typeof Fonts;

export default Fonts;
