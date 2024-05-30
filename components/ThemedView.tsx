import { View, type ViewProps } from 'react-native'

import { useThemeColor } from '@/components/hooks/useThemeColor'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')
  ppo

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}
