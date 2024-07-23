import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import HotTab from '@/components/market/Hot-tab'
import HotTabCard from '@/components/market/Hot-tab/hot-tab-card'

import TradeSettingDrawer from '@/components/trade/trade-setting-drawer'
import MaturityCard from '@/components/trade/trade-setting-drawer/MaturityCard'
import InfoSection from '@/components/trade/trade-setting-drawer/info-section'
import MaxSlippageSection from '@/components/trade/trade-setting-drawer/max-slippage-section'
import SelectYieldSection from '@/components/trade/trade-setting-drawer/select-yield-section'

import React from 'react'

import { View, Text, SafeAreaView } from 'react-native'

function Portfolio() {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 80 }}>
        <HotTab />
      </View>
    </SafeAreaView>
  )
}

export default Portfolio
