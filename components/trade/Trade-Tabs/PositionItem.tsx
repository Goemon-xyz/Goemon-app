// components/trade/PositionItem.tsx
import React from 'react'
import { View, Text } from 'react-native'
import { Position } from '@/components/trade/Trade-Tabs/types'
import { styles } from '@/components/trade/Trade-Tabs/styles'

const PositionItem: React.FC<{ item: Position }> = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text>{item.position}</Text>
    <Text>{item.amount}</Text>
    <Text>{item.price}</Text>
  </View>
)

export default PositionItem
