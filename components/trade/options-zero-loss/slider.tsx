import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Slider from '@react-native-community/slider'
import { ThemedText } from '@/components/ThemedText'

function SliderComponent() {
  const [sliderValue, setSliderValue] = useState(0)
  const sliderWidth = Dimensions.get('window').width * 0.5

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ position: 'relative', width: sliderWidth, height: 40 }}>
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="rgba(136, 136, 145, 1)"
          thumbTintColor="#FFFFFF"
          style={{ width: '100%', height: 40 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stopPoint: {
    position: 'absolute',
    width: 2,
    height: 10,
    backgroundColor: '#5D5D62',
    top: 15,
  },
})

export default SliderComponent
