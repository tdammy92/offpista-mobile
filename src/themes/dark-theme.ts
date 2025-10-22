import { DefaultTheme } from '@react-navigation/native';

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light: '#FFFFFF',
    dark: '#000000',
    gray: '#9CA3AF',
    primary100: '#FF2C55', // same red accent for consistency
    primary110: '#E82549',
    primary150: '#FF5C7A',
    primary200: '#3A3A3A',
    primary300: '#2A2A2A',
    primary400: '#1E1E1E',
    textPrimary: '#FFFFFF',
    textSecondary: '#A1A1AA',
    textRed: '#FF3B30',
    textRed100: '#FF6B6B',
    textGreen: '#37AC47',
    textGreen100: '#2ECC71',
    background100: '#0E0E0E', // deep black
    background110: '#121212',
    background150: '#181818',
    background200: '#1E1E1E',
    background210: '#242424',
  },
};
