import { FC } from 'react'
import { View, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { CustomTheme } from '@/constants/Colors'
import { listItemStyles as styles } from '@/components/market/styles'
import { OptionsItem } from '@/components/market/types'

const MarketScreenOptionsItem: FC = ({ item }: { item: OptionsItem }) => {
  const { colors } = useTheme() as CustomTheme
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: item.iconUrl }} style={styles.coinIcon} />
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

export default MarketScreenOptionsItem
