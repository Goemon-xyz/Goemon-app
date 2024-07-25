import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Slider from '@react-native-community/slider'

const CustomSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={5}
          minimumTrackTintColor="#FFF"
          maximumTrackTintColor="#FFF"
          thumbTintColor="#FFF"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    width: 200,
    // height: 2,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valueText: {
    fontSize: 20,
    marginBottom: 10,
  },
})

export default CustomSlider
