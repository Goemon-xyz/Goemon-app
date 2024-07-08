/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'

const tintColorLight = '#000'
const tintColorDark = '#fff'

export const CustomLightTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    text: '#11181C',
    textInverted: '#fff',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: '#2196F3',
    secondary: '#03DAC6',
    error: '#B00020',
    card: '#F0F0F0',
    border: '#E1E3E5',
    secondaryText: '#666666',
    button: '#2196F3',
    buttonText: '#FFFFFF',
  },
}

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    text: '#ECEDEE',
    textInverted: '#000',
    background: '#000000',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: '#BB86FC',
    secondary: '#03DAC6',
    error: '#CF6679',
    card: '#1E1E1E',
    border: '#2C2C2C',
    secondaryText: '#AAAAAA',
    button: '#2196F3',
    buttonText: '#FFFFFF',
  },
}

export const Colors = {
  light: CustomLightTheme.colors,
  dark: CustomDarkTheme.colors,
  red: {
    text: 'rgba(255, 104, 56, 1)',
  },
  green: {
    text: 'rgba(88, 189, 125, 1)',
  },
}

export type AppTheme = typeof CustomLightTheme
export type AppColors = typeof CustomLightTheme.colors
