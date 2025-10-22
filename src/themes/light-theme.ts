import { DefaultTheme } from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light: '#FFFFFF',
    dark: '#000000',
    gray: '#737373',
    primary100: '#FF2C55', // red accent
    primary110: '#E82549',
    primary150: '#FF5C7A',
    primary200: '#FFE5EA',
    primary300: '#FFF5F7',
    primary400: '#FFF9FA',
    textPrimary: '#1C1C28',
    textSecondary: '#6B6B6B',
    textRed: '#C81919',
    textRed100: '#FF3B30',
    textGreen: '#1DB954',
    textGreen100: '#4BD964',
    background100: '#FFFFFF',
    background110: '#FAFAFA',
    background150: '#F5F5F5',
    background200: '#EDEDED',
    background210: '#FFFFFF',
  },
};

export type lighThemeT = typeof lightTheme;
