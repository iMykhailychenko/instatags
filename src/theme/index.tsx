import { Appearance } from 'react-native';

interface IColors {
    // single
    dark: string;
    white: string;

    // 700
    blue700: string;
    red700: string;
    gray700: string;

    // 600
    gray600: string;

    // 500
    gray500: string;

    // 400
    gray400: string;

    // 300
    gray300: string;

    // 200
    gray200: string;

    // 100
    gray100: string;
    green100: string;
    blue100: string;
    red100: string;
    violet100: string;
    yellow100: string;
}

interface IThemes {
    dark: IColors;
    light: IColors;
}

const values: IThemes = {
    light: {
        dark: '#000000',
        white: '#ffffff',
        // 700
        blue700: '#0066cc',
        red700: '#ff0000',
        gray700: '#313134',

        // gray
        gray200: '#cfcfd6',
        gray300: '#9c99a2',
        gray400: '#75727c',
        gray500: '#5e5e69',
        gray600: '#48484f',

        // 100
        gray100: '#f2f2f2',
        green100: '#e2f4de',
        blue100: '#d9f0f8',
        red100: '#ffc4c4',
        violet100: '#efe5fe',
        yellow100: '#fcf6f0',
    },
    dark: {
        dark: '#ffffff',
        white: '#000000',
        // 700
        blue700: '#0066cc',
        red700: '#ff0000',
        gray700: '#f2f2f2',

        // gray
        gray200: '#48484f',
        gray300: '#5e5e69',
        gray400: '#75727c',
        gray500: '#9c99a2',
        gray600: '#cfcfd6',

        // soft
        gray100: '#313134',
        green100: '#e2f4de',
        blue100: '#1c8fd0',
        red100: '#ffc4c4',
        violet100: '#efe5fe',
        yellow100: '#fcf6f0',
    },
};

export const Colors = values[Appearance.getColorScheme() || 'light'];
