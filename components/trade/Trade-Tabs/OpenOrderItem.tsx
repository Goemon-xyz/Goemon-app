// components/trade/OpenOrderItem.tsx
import React from 'react'
import { View, Text } from 'react-native'
import { OpenOrder } from '@/components/trade/Trade-Tabs/types'
import { styles } from '@/components/trade/Trade-Tabs/styles'

const OpenOrderItem: React.FC<{ item: OpenOrder }> = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text>{item.orderId}</Text>
    <Text>{item.symbol}</Text>
    <Text>{item.quantity}</Text>
  </View>
)

export default OpenOrderItem
