import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ThemedText } from '@/components'
import CustomSlider from '@/components/trade/Slider'

const CustomSliderComponent = () => {
  return (
    <View>
      <CustomSlider />
      <View style={styles.sliderTextContainer}>
        <ThemedText style={styles.availableText}>Available</ThemedText>
        <View style={styles.sliderValueContainer}>
          <ThemedText style={styles.valueText}>20,000</ThemedText>
          <ThemedText style={styles.valueText}>ETH</ThemedText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
  },
  availableText: {
    color: 'rgba(136, 136, 145, 1)',
    fontSize: 10,
    marginLeft: 10,
  },
  sliderValueContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  valueText: {
    color: '#FFF',
    fontSize: 10,
  },
})

export default CustomSliderComponent
