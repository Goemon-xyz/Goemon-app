import { ThemedText } from '@/components/ThemedText'
import React, { useState } from 'react'
import { View, TouchableOpacity, useColorScheme } from 'react-native'
import Slider from './slider'
import Icon from 'react-native-vector-icons/Ionicons'

function OptionsZeroLossComponent() {
  const [selectedOption, setSelectedOption] = useState('Option')
  const isDark = useColorScheme() === 'dark'

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => setSelectedOption('Option')}>
            <View
              style={{
                backgroundColor:
                  selectedOption === 'Option' ? 'rgba(45, 168, 206, 0.16)' : 'transparent',
                paddingHorizontal: 16,
                borderRadius: 6,
              }}
            >
              <ThemedText
                style={{
                  fontSize: 14,
                  color: selectedOption === 'Option' ? 'rgba(45, 168, 206, 1)' : 'white',
                }}
              >
                Option
              </ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedOption('0-Loss')}>
            <View
              style={{
                backgroundColor:
                  selectedOption === '0-Loss' ? 'rgba(45, 168, 206, 0.16)' : 'transparent',
                paddingHorizontal: 16,
                borderRadius: 6,
              }}
            >
              <ThemedText
                style={{
                  fontSize: 14,
                  color: selectedOption === '0-Loss' ? 'rgba(45, 168, 206, 1)' : 'white',
                }}
              >
                0-Loss
              </ThemedText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OptionsZeroLossComponent
