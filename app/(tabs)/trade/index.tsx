import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import SelectPairAndSeeRatesSection from '@/components/trade/trade-execution-page/select-pair-and-see-rates'
import SettingsIcon from '@/components/trade/setting-icon'
import MarkPrice from '@/components/trade/mark-price'
import OptionsZeroLossComponent from '@/components/trade/options-zero-loss'
import VolatileIndex from '@/components/trade/Volatil-Index'
import MainGraph from '@/components/trade/Main-Graph'
import TradeInputComponent from '@/components/trade/TradeInput-Component/index'
import CustomSliderComponent from '@/components/trade/CustomSlider-Component/index'
import PlaceOrderButton from '@/components/trade/Place-Order-Button'
import TradeTabs from '@/components/trade/Trade-Tabs'

const WIDTH = Dimensions.get('window').width

export default function Trade() {
  return (
    <ScrollView>
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
      <View style={styles.tradeInputsContainer}>
        <CustomSliderComponent />
        <TradeInputComponent />
      </View>
      <View style={styles.placeOrderButton}>
        <PlaceOrderButton />
      </View>
      <View>
        <TradeTabs />
      </View>
      {/* <SettingsIcon style={styles.settingsIcon} /> */}
    </ScrollView>
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
    marginTop: 20,
  },
  markPriceContainer: {
    marginTop: 20,
  },
  optionsZeroLossContainer: {
    marginTop: 30,
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
  placeOrderButton: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
