import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import HistoryAndHotSection from '@/components/ui/home/history-hot-section'
import TradeSettingDrawer from '@/components/ui/trade/trade-setting-drawer'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

function Trade() {
  return (
    <SafeAreaView>
      <HistoryAndHotSection />
      <TradeSettingDrawer />
    </SafeAreaView>
  )
}

export default Trade
