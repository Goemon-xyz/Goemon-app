import React from 'react'
import { SafeAreaView, View } from 'react-native'
import LineGraph from '@/components/ui/trade/Graph/line-graph'
import BottomLineGraph from '@/components/ui/trade/Graph/bottom-line-graph'
import MarkPrice from '@/components/ui/trade/mark-price'
import OptionsZeroLossComponent from '@/components/ui/trade/options-zero-loss'
import SelectPairAndSeeRatesSection from '@/components/tabs/trade/trade-execution-page/select-pair-and-see-rates'
import SettingsIcon from '@/components/ui/trade/setting-icon'
function generateRandomNumbers(
  size: number,
  min: number,
  max: number,
  fluctuation: number
): number[] {
  const numbers: number[] = []
  let previousNum = Math.floor(Math.random() * (max - min + 1)) + min

  for (let i = 0; i < size; i++) {
    let randomNum = previousNum + Math.floor(Math.random() * (fluctuation * 2 + 1)) - fluctuation
    randomNum = Math.max(min, Math.min(max, randomNum)) // Ensure the number is within the min and max

    numbers.push(randomNum)
    previousNum = randomNum
  }

  return numbers
}

const data: number[] = generateRandomNumbers(100, 1, 10000, 500)

function Market() {
  return (
    <SafeAreaView>
      <SelectPairAndSeeRatesSection />
      <View style={{ gap: 20 }}>
        <View style={{ paddingTop: 80 }}>
          <LineGraph data={data} color="#2297f3" label="label" stat="stat" />
        </View>
        <View style={{ marginTop: 221 }}>
          <BottomLineGraph data={data} color="#1C2E91" label="label" stat="stat" />
        </View>
      </View>
      <View style={{ marginTop: 80 }}>
        <MarkPrice />
      </View>
      <View style={{ marginTop: 80 }}>
        <OptionsZeroLossComponent />
      </View>
      <SettingsIcon />
    </SafeAreaView>
  )
}

export default Market
