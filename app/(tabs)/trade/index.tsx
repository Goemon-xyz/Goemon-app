import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SettingsIcon from '@/components/ui/trade/setting-icon'
import React from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native'
import LineGraph from '@/components/ui/trade/Graph/line-graph'
import BottomLineGraph from '@/components/ui/trade/Graph/bottom-line-graph'
import MarkPrice from '@/components/ui/trade/mark-price'
import OptionsZeroLossComponent from '@/components/ui/trade/options-zero-loss'
import SelectPairAndSeeRatesSection from '@/components/tabs/trade/trade-execution-page/select-pair-and-see-rates'
import SliderComponent from '@/components/ui/trade/options-zero-loss/slider'

const WIDTH = Dimensions.get('window').width

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
    randomNum = Math.max(min, Math.min(max, randomNum))

    numbers.push(randomNum)
    previousNum = randomNum
  }

  return numbers
}

const data: number[] = generateRandomNumbers(100, 1, 10000, 500)

export default function Trade() {
  return (
    <>
      <SelectPairAndSeeRatesSection />
      <View style={{ gap: 20 }}>
        <View style={{ paddingTop: 40 }}>
          <LineGraph data={data} color="#2297f3" label="label" stat="stat" />
        </View>
        <View style={{ marginTop: 221 }}>
          <BottomLineGraph data={data} color="#1C2E91" label="label" stat="stat" />
        </View>
      </View>
      <View style={{ marginTop: 80 }}>
        <MarkPrice />
      </View>
      <View style={{ marginTop: 80, marginLeft: 20 }}>
        <OptionsZeroLossComponent />
      </View>
      <SettingsIcon style={{ position: 'relative', left: WIDTH * 0.9, top: -40 }} />
      <SliderComponent />
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
