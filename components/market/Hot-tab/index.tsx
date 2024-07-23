import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import HotTabCard from '@/components/market/Hot-tab/hot-tab-card'

const data = [
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
  {
    type: 'Bitcoin',
    code: 'BTC',
    details: '29Jan24-54,000-C',
    multiplier: '0.40X',
    loss: '0-Loss',
    price: '250K$',
    isHot: true,
  },
]

function HotTab() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <>
        {data.map((item, index) => (
          <View key={index} style={{ paddingVertical: 4 }}>
            <HotTabCard
              type={item.type}
              code={item.code}
              details={item.details}
              multiplier={item.multiplier}
              loss={item.loss}
              price={item.price}
              isHot={item.isHot}
            />
          </View>
        ))}
      </>
    </ScrollView>
  )
}

export default HotTab
