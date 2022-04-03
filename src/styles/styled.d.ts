import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;
		colors: {
            dark: string;
            grey: string;
            blueText: string;
            lines: string;
            primaryText: string;
            placeholderText: string;
            green: string;
            lightGreen: string;
            danger: string;
		};
	}
}