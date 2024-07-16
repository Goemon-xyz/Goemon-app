import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import useMarkPriceStore from '@/store/tabs/trade/useMarkPriceStore'

function MarkPrice() {
  const markPrice = useMarkPriceStore((state) => state.markPrice)
  const infoData = useMarkPriceStore((state) => state.infoData)

  return (
    <View>
      <View style={styles.row}>
        <ThemedText style={styles.label}>Mark Price:</ThemedText>
        <ThemedText style={styles.value}>{markPrice}</ThemedText>
      </View>
      <View style={styles.infoContainer}>
        {infoData.map((item, index) => (
          <View key={index} style={styles.infoBox}>
            <ThemedText style={styles.infoLabel}>{item.label}</ThemedText>
            <ThemedText style={styles.infoValue}>{item.value}</ThemedText>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginRight: 4,
    marginLeft: 24,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    width: 113,
    height: 44,
    backgroundColor: 'rgba(45, 168, 206, 0.16)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 10,
  },
  infoValue: {
    fontSize: 16,
    marginTop: -6,
    fontWeight: 'bold',
  },
})

export default MarkPrice
