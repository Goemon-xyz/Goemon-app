import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import SelectPairAndSeeRatesSection from '@/components/tabs/trade/trade-execution-page/select-pair-and-see-rates'
import HistoryAndHotSection from '@/components/ui/home/history-hot-section'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

function Trade() {
  return (
    <SafeAreaView>
      <SelectPairAndSeeRatesSection />
    </SafeAreaView>
  )
}

export default Trade
