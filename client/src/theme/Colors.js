import { Appearance } from 'react-native';

const darkTheme = {
    appBackground: '#0f0f0f',
    cardBackground: '#fff',
    cardShadowColor: '#717171',
};

const lightTheme = {
    appBackground: '#f0f0f0',
    cardBackground: '#fff',
    cardShadowColor: '#171717',
};

const colorScheme = Appearance.getColorScheme();
export default (colorScheme === 'dark') ? darkTheme: lightTheme;