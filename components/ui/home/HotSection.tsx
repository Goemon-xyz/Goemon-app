import { FC } from 'react'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import { useRouter } from 'expo-router'
import { FlashList, ListRenderItem } from '@shopify/flash-list'

import IconButton from '@/components/IconButton'
import { Colors } from '@/constants/Colors'
import { FireSVG } from '@/assets/icons/home/history-hot-section'

interface HotItem {
  symbol: string
  volume: string
  date: string
  type: string
}

const HotSection: FC = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  // Todo: replace dummy mock data with the data we get from api or 3rd party source.
  const hotItems: HotItem[] = [
    { symbol: 'DOGE', volume: '150K$', date: '28Dec23-1900', type: 'Option' },
    { symbol: 'PENDLE', volume: '250K$', date: '26Apr24-6.50', type: '0-Loss' },
    { symbol: 'LIDO', volume: '185K$', date: '26Jun24-6.50', type: '0-Loss' },
    { symbol: 'ETH', volume: '150K$', date: '28Dec23-1900', type: 'Option' },
  ]

  const renderHotItem: ListRenderItem<HotItem> = ({ item }) => (
    <View style={[styles.hotItem, { backgroundColor: theme.card }]}>
      <Text style={[styles.hotItemSymbol, { color: theme.text }]}>{item.symbol}</Text>
      <Text style={[styles.hotItemVolume, { color: theme.button }]}>vol. {item.volume}</Text>
      <Text style={[styles.hotItemDate, { color: theme.secondaryText }]}>{item.date}</Text>
      <View style={[styles.hotItemType, { backgroundColor: `${theme.button}30` }]}>
        <Text style={[styles.hotItemTypeText, { color: theme.button }]}>{item.type}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <FireSVG />
          <Text style={[styles.sectionTitle, { color: '#FF6E40' }]}>Hot</Text>
        </View>
        <IconButton
          type="Ionicons"
          name="chevron-forward"
          size={20}
          color={theme.text}
          onPress={() => console.log('Hot section chevron pressed')}
        />
      </View>
      <View style={styles.hotListContainer}>
        <FlashList
          data={hotItems}
          renderItem={renderHotItem}
          estimatedItemSize={150}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  hotListContainer: {
    height: 150,
  },
  hotItem: {
    borderRadius: 8,
    padding: 10,
    marginLeft: 20,
    width: 120,
  },
  hotItemSymbol: {
    fontWeight: 'bold',
  },
  hotItemVolume: {
    fontWeight: 'bold',
  },
  hotItemDate: {
    fontSize: 12,
  },
  hotItemType: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  hotItemTypeText: {
    fontSize: 12,
  },
})

export default HotSection
