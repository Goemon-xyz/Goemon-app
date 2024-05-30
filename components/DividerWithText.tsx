import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'

type DividerWithTextProps = {
  text: string
  lineStyle?: ViewStyle
  textStyle?: TextStyle
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text, lineStyle, textStyle }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, lineStyle]} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
      <View style={[styles.line, lineStyle]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#888891',
  },
  textContainer: {
    paddingHorizontal: 2,
  },
  text: {
    color: '#888891',
    paddingHorizontal: 7,
  },
})

export default DividerWithText
