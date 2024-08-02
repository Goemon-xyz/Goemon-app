import React from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SettingsIcon from '@/components/trade/setting-icon'
import LineGraph from '@/components/trade/Graph/line-graph'
import BottomLineGraph from '@/components/trade/Graph/bottom-line-graph'
import MarkPrice from '@/components/trade/mark-price'
import OptionsZeroLossComponent from '@/components/trade/options-zero-loss'
import SelectPairAndSeeRatesSection from '@/components/trade/trade-execution-page/select-pair-and-see-rates'
import SliderComponent from '@/components/trade/options-zero-loss/slider'
import VolatileIndex from '@/components/trade/Volatil-Index'
import CustomSlider from '@/components/trade/Slider'
import TradeInput from '@/components/trade/tradeInput'
import { ThemedText } from '@/components'
import { generateRandomNumbers } from '@/utils/Trade/GenerateRandomNumbers'
import MainGraph from '@/components/trade/Main-Graph'

const WIDTH = Dimensions.get('window').width
const data = generateRandomNumbers(100, 1, 10000, 500)

export default function Trade() {
  return (
    <>
      <SelectPairAndSeeRatesSection />
      <View style={styles.graphSection}>
        <View style={styles.lineGraphContainer}>
          <MainGraph />
        </View>
        <View style={styles.volatileIndexContainer}>
          <VolatileIndex />
        </View>
      </View>
      <View style={styles.markPriceContainer}>
        <MarkPrice />
      </View>
      <View style={styles.optionsZeroLossContainer}>
        <OptionsZeroLossComponent />
      </View>
      <SettingsIcon style={styles.settingsIcon} />
      {/* TRADE INPUT */}
      <View style={styles.tradeInputsContainer}>
        <View>
          <CustomSlider />
          <View style={styles.sliderTextContainer}>
            <ThemedText style={styles.availableText}>Available</ThemedText>
            <View style={styles.sliderValueContainer}>
              <ThemedText style={styles.valueText}>20,000</ThemedText>
              <ThemedText style={styles.valueText}>ETH</ThemedText>
            </View>
          </View>
        </View>
        <View>
          <TradeInput />
          <View style={styles.tradeInputTextContainer}>
            <ThemedText style={styles.amountText}>Amount</ThemedText>
            <View style={styles.tradeValueContainer}>
              <ThemedText style={styles.valueText}>639455</ThemedText>
              <ThemedText style={styles.valueText}>Qty</ThemedText>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  graphSection: {
    gap: 20,
  },
  lineGraphContainer: {
    paddingTop: 20,
  },
  volatileIndexContainer: {
    marginTop: 340,
  },
  markPriceContainer: {
    marginTop: 80,
  },
  optionsZeroLossContainer: {
    marginTop: 80,
    marginLeft: 20,
    paddingBottom: 20,
  },
  settingsIcon: {
    position: 'relative',
    left: WIDTH * 0.9,
    top: -40,
  },
  tradeInputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sliderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
  },
  availableText: {
    color: 'rgba(136, 136, 145, 1)',
    fontSize: 10,
    marginLeft: 10,
  },
  sliderValueContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  valueText: {
    color: '#FFF',
    fontSize: 10,
  },
  tradeInputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 16,
    marginTop: 4,
  },
  amountText: {
    color: 'rgba(136, 136, 145, 1)',
    fontSize: 10,
  },
  tradeValueContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginRight: 8,
  },
})
