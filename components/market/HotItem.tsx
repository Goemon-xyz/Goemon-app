import { FC } from 'react'
import { View, Text, useColorScheme } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { Colors } from '@/constants/Colors'
import { listItemStyles as styles } from './styles'
import { HotItem } from './types'
import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import DogecoinSVG from '@/assets/coins/svg/dogecoinSVG'
import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'

const MarketScreenHotItem: FC = ({ item }: { item: HotItem }) => {
  const colorScheme = useColorScheme()
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light
  return (
    <View style={styles.listItem}>
      {item.symbol === 'BTC' && <BitcoinSVG width={30} height={30} />}
      {item.symbol === 'ETH' && <EthcoinSVG width={30} height={24} />}
      {item.symbol === 'DOGE' && <DogecoinSVG width={30} height={30} />}
      <View style={styles.coinInfo}>
        <Text style={[styles.coinName, { color: colors.text }]}>{item.symbol}</Text>
        <Text style={[styles.coinSymbol, { color: colors.secondaryText }]}>{item.date}</Text>
      </View>
      <View style={styles.leverageInfo}>
        <Text style={[styles.leverage, { color: colors.primary }]}>{item.leverage}</Text>
        <View style={styles.typeContainer}>
          <Text style={[styles.type, { color: colors.primary }]}>{item.type}</Text>
        </View>
      </View>
      <View style={styles.volumeInfo}>
        <Ionicons name="flame" size={16} color="#FF6B00" />
        <Text style={[styles.volume, { color: colors.text }]}>{item.volume}</Text>
      </View>
    </View>
  )
}

export default MarketScreenHotItem
