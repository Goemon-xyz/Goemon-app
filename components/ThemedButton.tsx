import { useThemeColor } from '@/hooks/useThemeColor'
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  ImageStyle,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native'
import { ThemedText } from './ThemedText'

export type ThemedButtonProps = {
  lightColor?: string
  darkColor?: string
  onPress?: () => void
  title: string
  loading?: boolean
  loadingTitle?: string
  variant?: 'primary' | 'secondary'
  style?: ViewStyle
  icon?: number | { uri: string }
  iconStyle?: ImageStyle
  iconPosition?: 'left' | 'right'
  textStyle?: TextStyle
  Color?: string
}

export function ThemedButton(props: ThemedButtonProps) {
  const {
    lightColor,
    darkColor,
    onPress,
    title,
    loading,
    loadingTitle,
    variant = 'primary',
    style,
    icon,
    iconStyle,
    iconPosition = 'left',
    textStyle,
    Color,
  } = props

  const bgColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tint')
  const textColorInverted = useThemeColor({ light: lightColor, dark: darkColor }, 'textInverted')
  const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  const buttonTextColor = Color

  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.5}
      style={[
        styles.button,
        {
          borderColor: variant === 'secondary' ? bgColor : 'transparent',
          borderWidth: variant === 'secondary' ? 1 : 0,
          backgroundColor: variant === 'secondary' ? 'transparent' : bgColor,
        },
        style,
      ]}
      onPress={onPress}
    >
      {loading && <ActivityIndicator animating={loading} color={buttonTextColor} />}
      {!loading && icon && iconPosition === 'left' && (
        <Image source={icon} style={[styles.icon, iconStyle]} />
      )}
      <View style={styles.textContainer}>
        {!loading && (
          <ThemedText style={[styles.text, { color: buttonTextColor }, textStyle]}>
            {loading ? loadingTitle : title}
          </ThemedText>
        )}
      </View>
      {!loading && icon && iconPosition === 'right' && (
        <Image source={icon} style={[styles.icon, iconStyle]} />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: '#212124',
    gap: 12,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    // color: '#888891',
  },
})

export default ThemedButton
