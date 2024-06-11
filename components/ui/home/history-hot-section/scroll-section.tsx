import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Card from './card'

function ScrollSection() {
  const data = [
    {
      coinName: 'ETH',
      cardType: 'Ethereum',
      conversionCurrency: 'USD',
      rate: 0.8974,
      profitLossPercentage: -1.5,
      date: '22.Apr',
    },
    {
      coinName: 'DOGE',
      cardType: 'Dogecoin',
      conversionCurrency: 'USD',
      rate: 18.2843,
      profitLossPercentage: +0.5,
      date: '21.Apr',
    },
    {
      coinName: 'BTC',
      cardType: 'Bitcoin',
      conversionCurrency: 'USD',
      rate: 5.8754,
      profitLossPercentage: -2.35,
      date: '18.Apr',
    },
    {
      coinName: 'ETH',
      cardType: 'Ethereum',
      conversionCurrency: 'USD',
      rate: 0.8974,
      profitLossPercentage: -1.5,
      date: '22.Apr',
    },
    {
      coinName: 'DOGE',
      cardType: 'Dogecoin',
      conversionCurrency: 'USD',
      rate: 18.2843,
      profitLossPercentage: +0.5,
      date: '21.Apr',
    },
    {
      coinName: 'BTC',
      cardType: 'Bitcoin',
      conversionCurrency: 'USD',
      rate: 5.8754,
      profitLossPercentage: -2.35,
      date: '18.Apr',
    },
  ]
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <ThemedView key={index} style={{ marginHorizontal: 10, borderRadius: 10 }}>
            <Card data={item} />
          </ThemedView>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 1,
    margin: 10,
  },
})

export default ScrollSection
