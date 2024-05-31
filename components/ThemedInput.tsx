import { useThemeColor } from '@/hooks/useThemeColor'
import React from 'react'
import { StyleSheet, TextInputProps, TextInput } from 'react-native'

export type ThemedInputProps = {
  lightColor?: string
  darkColor?: string
  Color?: string
} & TextInputProps

export function ThemedInput(props: ThemedInputProps) {
  const border = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'icon')
  return (
    <TextInput
      style={[styles.input, { borderColor: border }]}
      placeholderTextColor={props.Color}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Poppins',
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    padding: 16,
    borderRadius: 6,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212124',
  },
})
