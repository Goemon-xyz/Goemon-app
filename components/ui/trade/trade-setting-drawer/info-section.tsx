import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors' // replace with the actual path
import { ThemedText } from '@/components/ThemedText'

const InfoSection = () => {
  const [info, setInfo] = useState({
    TradeSide: 'Buy',
    MaturityDate: '08:00:00, 29 2023',
    TimeToMaturity: '06:59:20, 29Day 3Month',
    Volume: '$2,643,181',
    Change: '-5.0%',
    Delta: '0.17',
    Gamma: '0.01267',
    Vega: '0.12',
    Theta: '-1.16',
    Rho: '0.00',
  })

  return (
    <View style={styles.container}>
      <ThemedText style={styles.heading}>Info</ThemedText>
      {Object.entries(info).map(([key, value], index) => (
        <View key={index} style={styles.item}>
          <ThemedText style={styles.key}>{key}</ThemedText>
          <ThemedText
            style={[
              styles.value,
              key === 'Change' ? (value.startsWith('-') ? styles.red : styles.green) : null,
            ]}
          >
            {value}
          </ThemedText>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 14,
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  key: {
    fontSize: 12,
    color: 'rgba(136, 136, 145, 1)',
    fontWeight: '500',
  },
  value: {
    fontSize: 12,
    fontWeight: '500',
  },
  red: {
    color: Colors.red.text,
  },
  green: {
    color: Colors.green.text,
  },
})

export default InfoSection
