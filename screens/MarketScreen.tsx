import { useState, FC } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { CustomTheme } from '@/constants/Colors'
import { HOME_MARKET_TAB_ITEMS as TAB_ITEMS } from '@/constants'
import Tabs from '@/components/HomeMarketTabs'
import MarketScreenHotItem from '@/components/market/HotItem'
import MarketScreenTopItem from '@/components/market/TopItem'
import MarketScreenOptionsItem from '@/components/market/OptionsItem'
import { styles } from '@/components/market/styles'
import { TopItem, HotItem, OptionsItem } from '@/components/market/types'
import { topItems, hotItems, optionsItems } from '@/components/market/sampleData'

interface MappingItem {
  data: TopItem[] | HotItem[] | OptionsItem[]
  ItemComponent: React.ComponentType<{ item: TopItem | HotItem | OptionsItem }>
}

const MarketScreen: FC = () => {
  const { colors } = useTheme() as CustomTheme
  const [activeTab, setActiveTab] = useState<string>('Top')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const mapping = {
    [TAB_ITEMS.TOP]: {
      data: topItems,
      ItemComponent: MarketScreenTopItem,
    },
    [TAB_ITEMS.HOT]: {
      data: hotItems,
      ItemComponent: MarketScreenHotItem,
    },
    [TAB_ITEMS.OLOSS]: {
      data: optionsItems,
      ItemComponent: MarketScreenOptionsItem,
    },
    [TAB_ITEMS.OPTIONS]: {
      data: optionsItems,
      ItemComponent: MarketScreenOptionsItem,
    },
  }

  const renderItem = ({ item }) => {
    const { ItemComponent } = mapping[activeTab] as MappingItem
    return <ItemComponent item={item} />
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

      {Object.values(TAB_ITEMS).includes(activeTab) && (
        <FlatList
          data={mapping[activeTab]?.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  )
}

export default MarketScreen
