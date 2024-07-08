// app/market.tsx

import { useState, FC } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { AppColors } from '@/constants/Colors'
import { HOME_MARKET_TAB_ITEMS as TAB_ITEMS } from '@/constants'
import Tabs from '@/components/ui/HomeMarketTabs'

// Define types for different list items
type TopItem = {
  id: string
  name: string
  symbol: string
  price: string
  change: string
  iconUrl: string
}

type HotItem = {
  id: string
  symbol: string
  date: string
  leverage: string
  type: string
  volume: string
  iconUrl: string
}

type OptionsItem = {
  id: string
  symbol: string
  date: string
  leverage: string
  type: string
  volume: string
  iconUrl: string
}

const MarketScreen: FC = () => {
  const { colors } = useTheme() as { colors: AppColors }
  const [activeTab, setActiveTab] = useState('Top')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample data for each tab
  const topItems: TopItem[] = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$43,214.18',
      change: '+5.25%',
      iconUrl: 'https://example.com/btc.png',
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$1,649.18',
      change: '+5.25%',
      iconUrl: 'https://example.com/eth.png',
    },
  ]

  const hotItems: HotItem[] = [
    {
      id: '1',
      symbol: 'PENDLE',
      date: '26Apr24-6.50-C',
      leverage: '0.40X',
      type: '0-Loss',
      volume: '250K$',
      iconUrl: 'https://example.com/pendle.png',
    },
    {
      id: '2',
      symbol: 'PENDLE',
      date: '26Jun24-6.50-C',
      leverage: '0.71X',
      type: '0-Loss',
      volume: '185K$',
      iconUrl: 'https://example.com/pendle.png',
    },
  ]

  const optionsItems: OptionsItem[] = [
    {
      id: '1',
      symbol: 'PENDLE',
      date: '26Apr24-6.50-C',
      leverage: '0.40X',
      type: '0-Loss',
      volume: '250K$',
      iconUrl: 'https://example.com/pendle.png',
    },
    {
      id: '2',
      symbol: 'PENDLE',
      date: '26Jun24-6.50-C',
      leverage: '0.71X',
      type: '0-Loss',
      volume: '185K$',
      iconUrl: 'https://example.com/pendle.png',
    },
  ]

  const renderTopItem = ({ item }: { item: TopItem }) => (
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
            { color: item.change.includes('+') ? colors.green?.text : colors.red?.text },
          ]}
        >
          {item.change}
        </Text>
      </View>
    </View>
  )

  const renderHotItem = ({ item }: { item: HotItem }) => (
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

  const renderOptionsItem = ({ item }: { item: OptionsItem }) => (
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

  const renderListForActiveTab = () => {
    switch (activeTab) {
      case TAB_ITEMS.TOP:
        return (
          <FlatList data={topItems} renderItem={renderTopItem} keyExtractor={(item) => item.id} />
        )
      case TAB_ITEMS.HOT:
        return (
          <FlatList data={hotItems} renderItem={renderHotItem} keyExtractor={(item) => item.id} />
        )
      case TAB_ITEMS.OLOSS:
      case TAB_ITEMS.OPTIONS:
        return (
          <FlatList
            data={optionsItems}
            renderItem={renderOptionsItem}
            keyExtractor={(item) => item.id}
          />
        )
      default:
        return null
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[styles.searchInput, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Search..."
        placeholderTextColor={colors.secondaryText}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {(activeTab === TAB_ITEMS.OLOSS || activeTab === TAB_ITEMS.OPTIONS) && (
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={[styles.filterButtonText, { color: colors.primary }]}>Trade</Text>
            <Ionicons name="chevron-down" size={16} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={[styles.filterButtonText, { color: colors.primary }]}>Maturity</Text>
            <Ionicons name="chevron-down" size={16} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterButton, styles.activeFilterButton]}>
            <Text style={[styles.filterButtonText, { color: colors.background }]}>Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={[styles.filterButtonText, { color: colors.primary }]}>Down</Text>
          </TouchableOpacity>
        </View>
      )}
      {renderListForActiveTab()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  searchInput: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tabText: {
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  coinInfo: {
    flex: 1,
  },
  coinName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  coinSymbol: {
    fontSize: 14,
  },
  priceInfo: {
    alignItems: 'flex-end',
  },
  coinPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  coinChange: {
    fontSize: 14,
  },
  leverageInfo: {
    alignItems: 'center',
  },
  leverage: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  typeContainer: {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  type: {
    fontSize: 12,
  },
  volumeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volume: {
    marginLeft: 4,
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(33, 150, 243, 0.5)',
  },
  activeFilterButton: {
    backgroundColor: '#2196F3',
  },
  filterButtonText: {
    marginRight: 4,
  },
  depositContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  depositText: {
    marginRight: 8,
  },
  depositButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 4,
  },
  depositIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  depositButtonText: {
    fontWeight: 'bold',
  },
})

export default MarketScreen
