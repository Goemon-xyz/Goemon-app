import Coin from '@/assets/coins/svg'
import { FireSVG } from '@/assets/icons/home/history-hot-section'
import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

function HotTabCard({ type, code, details, multiplier, loss, price, isHot }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.coinSection}>
        <Coin type={type} height={32} width={32} />
        <View>
          <ThemedText style={styles.coinText}>{code}</ThemedText>
          <ThemedText style={styles.coinDetailsText}>{details}</ThemedText>
        </View>
      </View>
      <View>
        <View style={styles.multiplierContainer}>
          <ThemedText style={styles.multiplierText}>{multiplier}</ThemedText>
        </View>
        <View style={styles.lossSection}>
          <ThemedText style={styles.lossText}>{loss}</ThemedText>
          <Coin type="Ethereum" height={13} width={13} />
        </View>
      </View>
      <View style={styles.fireSection}>
        {isHot && <FireSVG width={24} height={24} />}
        <ThemedText style={styles.fireText}>{price}</ThemedText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 27,
    paddingVertical: 10,
  },
  coinSection: {
    flexDirection: 'row',
    gap: 11,
    alignItems: 'center',
  },
  coinText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coinDetailsText: {
    fontSize: 10,
    color: 'rgba(136, 136, 145, 1)',
  },
  multiplierContainer: {
    height: 21,
    backgroundColor: 'rgba(45, 168, 206, 0.16)',
    borderRadius: 6,
    justifyContent: 'center',
  },
  multiplierText: {
    fontSize: 14,
    color: 'rgba(45, 168, 206, 1)',
    paddingHorizontal: 10,
  },
  lossSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  lossText: {
    fontSize: 10,
    color: 'rgba(136, 136, 145, 1)',
  },
  fireSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  fireText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default HotTabCard
