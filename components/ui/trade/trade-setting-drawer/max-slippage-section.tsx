import MinusSVG from '@/assets/icons/trade/trade-seeting-drawer/svg/minusSVG'
import PlusSVG from '@/assets/icons/trade/trade-seeting-drawer/svg/plusSVG'
import { ThemedText } from '@/components/ThemedText'
import React, { useState } from 'react'
import { View, Text, Switch, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'

const MaxSlippageSection = () => {
  const [isAuto, setIsAuto] = useState(false)
  const [percentage, setPercentage] = useState(0)

  const handleDecrease = () => {
    setPercentage((prevPercentage) => Math.max(0, prevPercentage - 5))
  }

  const handleIncrease = () => {
    setPercentage((prevPercentage) => prevPercentage + 5)
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ThemedText style={styles.heading}>Max Slippage</ThemedText>
        <View style={styles.row}>
          <ThemedText style={{ fontSize: 12 }}>Auto</ThemedText>
          <Switch
            value={isAuto}
            onValueChange={setIsAuto}
            trackColor={{ false: 'rgba(45, 168, 206, 1)', true: 'rgba(45, 168, 206, 1)' }}
          />
        </View>
      </View>
      <View style={styles.row2}>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
          <MinusSVG />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={`${percentage}%`}
          editable={!isAuto}
          keyboardType="numeric"
          onChangeText={(text) => setPercentage(Number(text.replace('%', '')))}
        />
        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
          <PlusSVG />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  input: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(48, 48, 51, 1)',
    color: 'rgba(136, 136, 145, 1)',
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(136, 136, 145, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
})

export default MaxSlippageSection
