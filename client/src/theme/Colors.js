import { Appearance } from 'react-native';

const darkTheme = {
};

const lightTheme = {
    appBackground: '#f0f0f0',
    cardBackground: '#fff',
    cardShadowColor: '#171717',
};

const colorScheme = Appearance.getColorScheme();
export default (colorScheme === 'dark') ? darkTheme: lightTheme;