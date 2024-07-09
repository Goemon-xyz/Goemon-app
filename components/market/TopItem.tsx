import { FC } from 'react'
import { View, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { Colors, CustomTheme } from '@/constants/Colors'
import { listItemStyles as styles } from './styles'
import { TopItem } from './types'

const MarketScreenTopItem: FC = ({ item }: { item: TopItem }) => {
  const { colors } = useTheme() as CustomTheme
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: item.iconUrl }} style={styles.coinIcon} />
      <View style={styles.coinInfo}>
        <Text style={[styles.coinName, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.coinSymbol, { color: colors.secondaryText }]}>{item.symbol}</Text>
      </View>
      <View style={styles.priceInfo}>
        <Text style={[styles.coinPrice, { color: colors.text }]}>{item.price}</Text>
        <Text
          style={[
            styles.coinChange,
            { color: item.change.includes('+') ? Colors.green?.text : Colors.red?.text },
          ]}
        >
          {item.change}
        </Text>
      </View>
    </View>
  )
}

export default MarketScreenTopItem
