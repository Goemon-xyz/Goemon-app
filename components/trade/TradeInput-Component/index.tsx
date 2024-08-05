import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ThemedText } from '@/components'
import TradeInput from '@/components/trade/tradeInput'

const TradeInputComponent = () => {
  return (
    <View>
      <TradeInput />
      <View style={styles.tradeInputTextContainer}>
        <ThemedText style={styles.amountText}>Amount</ThemedText>
        <View style={styles.tradeValueContainer}>
          <ThemedText style={styles.valueText}>639455</ThemedText>
          <ThemedText style={styles.valueText}>Qty</ThemedText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tradeInputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
  },
  amountText: {
    color: 'rgba(136, 136, 145, 1)',
    fontSize: 10,
  },
  tradeValueContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginRight: 8,
  },
  valueText: {
    color: '#FFF',
    fontSize: 10,
  },
})

export default TradeInputComponent
