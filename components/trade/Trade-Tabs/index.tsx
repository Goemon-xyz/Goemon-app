import React, { useState, FC } from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '@/constants/Colors'
import { TRADE_TAB_ITEMS } from '@/constants'
import Tabs from '@/components/Tabs'
import PositionCard from '@/components/trade/Trade-Tabs/PositionCard'
import { styles } from '@/components/trade/Trade-Tabs/styles'

const TradeTabs: FC = () => {
  const { colors } = useTheme() as CustomTheme
  const [activeTab, setActiveTab] = useState<string>(TRADE_TAB_ITEMS.POSITION)

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={Object.values(TRADE_TAB_ITEMS)}
      />

      <PositionCard />
    </View>
  )
}

export default TradeTabs
