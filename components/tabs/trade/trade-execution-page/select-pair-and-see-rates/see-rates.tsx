import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'
import { ThemedText } from '@/components/ThemedText'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

function SeeRatesCard({ rate, percentage }) {
  const isPositive = parseFloat(percentage) > 0

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={[styles.rateText, isPositive ? styles.positiveText : styles.negativeText]}>
          {rate}
        </Text>
        <View
          style={[
            styles.innerContainer,
            isPositive ? styles.positiveBackground : styles.negativeBackground,
          ]}
        >
          <Text
            style={[styles.percentageText, isPositive ? styles.positiveText : styles.negativeText]}
          >
            {percentage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: 145,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rateText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(255, 104, 56, 1)',
    marginRight: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    height: 24,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  positiveBackground: {
    backgroundColor: 'rgba(88, 189, 125, 0.16)',
  },
  negativeBackground: {
    backgroundColor: 'rgba(255, 104, 56, 0.16)',
  },
  percentageText: {
    fontSize: 14,
    alignItems: 'center',
  },
  positiveText: {
    color: 'rgba(88, 189, 125, 1)',
  },
  negativeText: {
    color: 'rgba(255, 104, 56, 1)',
  },
})

export default SeeRatesCard
