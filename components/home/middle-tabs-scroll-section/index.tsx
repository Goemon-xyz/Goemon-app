import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Card from '@/components/home/middle-tabs-scroll-section/card'

function MiddleTabScrollSection() {
  const data = [
    {
      coinName: 'BTC',
      coinFullName: 'Bitcoin',
      cardType: 'Bitcoin',
      lastPrize: 56.123,
      change: +3.23,
    },
    {
      coinName: 'ETH',
      coinFullName: 'Ethereum',
      cardType: 'Ethereum',
      lastPrize: 734.23,
      change: -3.745,
    },
    {
      coinName: 'DOGE',
      coinFullName: 'DogeCoin',
      cardType: 'Dogecoin',
      lastPrize: 5326.4,
      change: +76.23,
    },
    {
      coinName: 'BTC',
      coinFullName: 'Bitcoin',
      cardType: 'Bitcoin',
      lastPrize: 567.23,
      change: +3.23,
    },
    {
      coinName: 'ETH',
      coinFullName: 'Ethereum',
      cardType: 'Ethereum',
      lastPrize: 734.23,
      change: -3.745,
    },
    {
      coinName: 'DOGE',
      coinFullName: 'DogeCoin',
      cardType: 'Dogecoin',
      lastPrize: 5326.4,
      change: +76.23,
    },
    {
      coinName: 'BTC',
      coinFullName: 'Bitcoin',
      cardType: 'Bitcoin',
      lastPrize: 56.123,
      change: +3.23,
    },
    {
      coinName: 'ETH',
      coinFullName: 'Ethereum',
      cardType: 'Ethereum',
      lastPrize: 734.23,
      change: -3.745,
    },
    {
      coinName: 'DOGE',
      coinFullName: 'DogeCoin',
      cardType: 'Dogecoin',
      lastPrize: 5326.4,
      change: +76.23,
    },
    {
      coinName: 'BTC',
      coinFullName: 'Bitcoin',
      cardType: 'Bitcoin',
      lastPrize: 567.23,
      change: +3.23,
    },
    {
      coinName: 'ETH',
      coinFullName: 'Ethereum',
      cardType: 'Ethereum',
      lastPrize: 734.23,
      change: -3.745,
    },
    {
      coinName: 'DOGE',
      coinFullName: 'DogeCoin',
      cardType: 'Dogecoin',
      lastPrize: 5326.4,
      change: +76.23,
    },
  ]
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View>
        {data.map((item, index) => (
          <ThemedView key={index}>
            <TouchableOpacity>
              <Card data={item} />
            </TouchableOpacity>
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

export default MiddleTabScrollSection
