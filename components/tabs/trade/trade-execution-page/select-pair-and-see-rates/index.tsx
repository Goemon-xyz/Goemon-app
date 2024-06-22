import React from 'react'
import { View, Text } from 'react-native'
import SelectPairCard from './select-pair'
import SeeRatesCard from './see-rates'

function SelectPairAndSeeRatesSection() {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        <SelectPairCard type="Ethereum" pair="ETH-USD" />
        <SeeRatesCard rate="$1834.48" percentage="-125%" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        <SelectPairCard type="Bitcoin" pair="BTC-USD" />
        <SeeRatesCard rate="$5346.14" percentage="+63.3%" />
      </View>
    </>
  )
}

export default SelectPairAndSeeRatesSection
