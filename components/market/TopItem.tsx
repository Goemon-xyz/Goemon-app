import { FC } from 'react'
import { View, Text, Image, useColorScheme } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { Colors } from '@/constants/Colors'
import { listItemStyles as styles } from './styles'
import { TopItem } from './types'
import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import DogecoinSVG from '@/assets/coins/svg/dogecoinSVG'
import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'

const MarketScreenTopItem: FC = ({ item }: { item: TopItem }) => {
  const colorScheme = useColorScheme()
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light
  return (
    <View style={styles.listItem}>
        {item.symbol === 'BTC' && <BitcoinSVG width={24} height={24} />}
      {item.symbol === 'ETH' && <EthcoinSVG width={24} height={24} />}
      {item.symbol === 'DOGE' && <DogecoinSVG width={24} height={24} />}
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
