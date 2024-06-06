import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import ScrollSection from './scroll-section'
import { ThemedText } from '@/components/ThemedText'
import ClockSVG from '@/assets/icons/home/history-hot-section/clock'
import DoubleArrowSVG from '@/assets/icons/home/history-hot-section/doubleArrow'
import FireSVG from '@/assets/icons/home/history-hot-section/fire'

function HistoryAndHotSection() {
  const colorScheme = useColorScheme()
  return (
    <ThemedView style={{ backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF' }}>
      <View>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <ClockSVG />
            <ThemedText style={styles.text}>History</ThemedText>
          </View>
          <DoubleArrowSVG />
        </View>
        <ScrollSection />
      </View>
      <View>
        <View style={styles.cards}>
          <View style={styles.topBar}>
            <FireSVG />
            <ThemedText style={styles.text}>Hot</ThemedText>
          </View>
          <DoubleArrowSVG />
        </View>
        <ScrollSection />
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0c0c0d',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },

  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },

  text: { margin: 4, fontSize: 16, fontWeight: 'bold' },
})

export default HistoryAndHotSection
