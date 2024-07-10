import { FC, useState } from 'react'
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native'
import { useRouter } from 'expo-router'
import { FlashList, ListRenderItem } from '@shopify/flash-list'

import { Colors } from '@/constants/Colors'
import Tabs from '../TabBar'
import { HOME_MARKET_TAB_ITEMS } from '@/constants'
import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import DogecoinSVG from '@/assets/coins/svg/dogecoinSVG'
import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'

interface ListItem {
  name: string
  symbol: string
  price: string
  change: string
}

const ListSection: FC = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  const [activeTab, setActiveTab] = useState('Top')

  // Todo: replace dummy mock data with the data we get from api or 3rd party source.
  const listItems: ListItem[] = [
    { name: 'Bitcoin', symbol: 'BTC', price: '43214.18', change: '+5.25%' },
    { name: 'Ethereum', symbol: 'ETH', price: '1649.18', change: '+5.25%' },
    { name: 'Dogecoin', symbol: 'DOGE', price: '0.1828', change: '-2.35%' },
    { name: 'Solana', symbol: 'SOL', price: '98.00', change: '+5.11%' },
  ]

  const renderListHeader = () => {
    return (
      <View style={styles.topListHeader}>
        {['Name', 'Last Price', 'Change'].map((item) => (
          <Text key={item} style={[{ color: theme.text, fontSize: 12 }]}>
            {item}
          </Text>
        ))}
      </View>
    )
  }

  const renderListItem: ListRenderItem<ListItem> = ({ item }) => (
    <View style={styles.listItem}>
      <View style={[{ flexDirection: 'row', gap: 8 }]}>
        {item.symbol === 'BTC' && <BitcoinSVG width={30} height={30} />}
        {item.symbol === 'ETH' && <EthcoinSVG width={30} height={30} />}
        {item.symbol === 'DOGE' && <DogecoinSVG width={30} height={30} />}
        <View>
          <Text style={[styles.coinName, { color: theme.text }]}>{item.name}</Text>
          <Text style={[styles.coinSymbol, { color: theme.secondaryText }]}>{item.symbol}</Text>
        </View>
      </View>
      <Text style={[styles.coinPrice, { color: theme.text }]}>${item.price}</Text>
      <Text
        style={[styles.coinChange, { color: item.change.includes('+') ? '#4CAF50' : '#FF5252' }]}
      >
        {item.change}
      </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Tabs
        additionalStyles={{
          justifyContent: 'space-around',
        }}
        items={Object.values(HOME_MARKET_TAB_ITEMS)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <View style={styles.topListContainer}>
        <FlashList
          data={listItems}
          renderItem={renderListItem}
          estimatedItemSize={60}
          ListHeaderComponent={renderListHeader}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  tabButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 5,
  },
  tabButtonText: {
    fontWeight: 'bold',
  },
  topListContainer: {
    flex: 1,
  },
  topListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  coinName: {
    fontWeight: 'bold',
  },
  coinSymbol: {
    fontSize: 12,
  },
  priceInfo: {
    alignItems: 'center',
  },
  coinPrice: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
  },
  coinChange: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
})

export default ListSection
