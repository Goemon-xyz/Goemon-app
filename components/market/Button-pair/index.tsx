import DownSVG from '@/assets/icons/market/Up-Down-Button-Pair/down'
import UpSVG from '@/assets/icons/market/Up-Down-Button-Pair/up'
import { ThemedText } from '@/components/ThemedText'
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

function UpDownPairButton() {
  const [isUpActive, setIsUpActive] = useState(true)

  const handleUpPress = () => {
    setIsUpActive(true)
  }

  const handleDownPress = () => {
    setIsUpActive(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.leftView,
          { backgroundColor: isUpActive ? 'rgba(6, 102, 66, 1)' : 'rgba(33, 33, 36, 1)' },
        ]}
        onPress={handleUpPress}
      >
        <View style={styles.innerContainer}>
          <UpSVG color={isUpActive ? '#9DE7BD' : '#888891'} />
          <ThemedText style={styles.text}>Up</ThemedText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.rightView,
          { backgroundColor: isUpActive ? 'rgba(33, 33, 36, 1)' : 'rgba(6, 102, 66, 1)' },
        ]}
        onPress={handleDownPress}
      >
        <View
          style={[
            styles.condView,
            { borderLeftColor: isUpActive ? 'rgba(6, 102, 66, 1)' : 'rgba(33, 33, 36, 1)' },
          ]}
        />
        <View style={styles.innerContainer}>
          <DownSVG color={isUpActive ? '#888891' : '#9DE7BD'} />
          <ThemedText style={styles.text}>Down</ThemedText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 30,
    flexDirection: 'row',
  },
  leftView: {
    width: '45%',
    height: '100%',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
  },
  rightView: {
    width: '55%',
    height: '100%',
    position: 'relative',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 16,
  },
  condView: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderBottomWidth: 30,
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: 0,
  },
})

export default UpDownPairButton
