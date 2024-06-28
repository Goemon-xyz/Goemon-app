// hooks/useThemeColor.js
import { useColorScheme } from 'react-native'
import { useThemeStore } from '@/store/useThemeStore'
import { Colors } from '@/constants/Colors'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const systemTheme = useColorScheme() ?? 'light'
  const isDark = useThemeStore((state) => state.isDark)
  const theme = isDark ? 'dark' : systemTheme
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}
