// components/trade/OrderHistoryItem.tsx
import React from 'react'
import { View, Text } from 'react-native'
import { OrderHistory } from '@/components/trade/Trade-Tabs/types'
import { styles } from '@/components/trade/Trade-Tabs/styles'

const OrderHistoryItem: React.FC<{ item: OrderHistory }> = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text>{item.orderId}</Text>
    <Text>{item.date}</Text>
    <Text>{item.status}</Text>
  </View>
)

export default OrderHistoryItem
