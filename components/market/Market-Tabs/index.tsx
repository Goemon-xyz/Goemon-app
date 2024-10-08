// MarketScreen.tsx
import React, { useState, FC } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '@/constants/Colors'
import { HOME_MARKET_TAB_ITEMS as TAB_ITEMS } from '@/constants'
import Tabs from '@/components/Tabs'
import MarketScreenHotItem from '@/components/market/HotItem'
import MarketScreenTopItem from '@/components/market/TopItem'
import MarketScreenOptionsItem from '@/components/market/OptionsItem'
import { styles } from '@/components/market/styles'
import { TopItem, HotItem, OptionsItem } from '@/components/market/types'
import { topItems, hotItems, optionsItems } from '@/components/market/sampleData'
import MiddleTabScrollSection from '@/components/home/middle-tabs-scroll-section'
import FilterButton from '@/components/market/FilterButton'
import SortAmountSVG from '@/assets/icons/market/Hot-tab/sort-amount-down'
import HotTab from '@/components/market/Hot-tab/index'

interface MappingItem {
  data: TopItem[] | HotItem[] | OptionsItem[]
  ItemComponent: React.ComponentType<{ item: TopItem | HotItem | OptionsItem }>
}

const Header: FC = () => {
  const { colors } = useTheme() as CustomTheme
  return (
    <View style={styles.Header}>
      {['Name', 'Last Price', 'Change'].map((item) => (
        <Text key={item} style={[{ color: 'rgba(136, 136, 145, 1)', fontSize: 12 }]}>
          {item}
        </Text>
      ))}
    </View>
  )
}

const HotHeader: FC = () => {
  const { colors } = useTheme() as CustomTheme
  return (
    <View style={styles.Header}>
      {['Trade Pair', 'Eff-Lvg', 'Vol'].map((item) => (
        <TouchableOpacity key={item} style={styles.HotheaderItemContainer}>
          <Text style={{ color: 'rgba(136, 136, 145, 1)', fontSize: 12 }}>{item}</Text>
          <SortAmountSVG width={17} height={17} fill="rgba(136, 136, 145, 1)" />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const MarketTabs: FC = () => {
  const { colors } = useTheme() as CustomTheme
  const [activeTab, setActiveTab] = useState<string>(TAB_ITEMS.TOP)
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
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabItems={Object.values(TAB_ITEMS)} />

      {(activeTab === TAB_ITEMS.OLOSS || activeTab === TAB_ITEMS.OPTIONS) && (
        <View style={styles.filterContainer}>
          <FilterButton label="Trade" icon="chevron-down" onPress={() => {}} />
          <FilterButton label="Maturity" icon="chevron-down" onPress={() => {}} />
          <FilterButton label="UpDown" isActive onPress={() => {}} />
        </View>
      )}

      {activeTab === TAB_ITEMS.TOP ? (
        <>
          <Header />
          <MiddleTabScrollSection />
        </>
      ) : activeTab === TAB_ITEMS.HOT ? (
        <>
          <HotHeader />
          <HotTab />
        </>
      ) : (
        <HotTab />
      )}
    </View>
  )
}

export default MarketTabs
