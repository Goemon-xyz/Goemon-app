import React, { useState } from 'react'

import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native'
import MaturityCard from './MaturityCard'
import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import DogecoinSVG from '@/assets/coins/svg/dogecoinSVG'
import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'
import { ThemedText } from '@/components/ThemedText'

const SelectYieldSection = () => {
  const data = [
    {
      coinSVG: BitcoinSVG,
      coinType: 'Bitcoin',
      platform: 'BTC',
      percentage: '2.5%',
    },
    {
      coinSVG: DogecoinSVG,
      coinType: 'Ethereum',
      platform: 'ETH',
      percentage: '3.5%',
    },
    {
      coinSVG: EthcoinSVG,
      coinType: 'Litecoin',
      platform: 'LTC',
      percentage: '1.5%',
    },
  ]

  const [isAuto, setIsAuto] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ThemedText style={styles.heading}>Select Yield</ThemedText>
        <View style={styles.row}>
          <ThemedText style={{ fontSize: 12 }}>Auto</ThemedText>
          <Switch
            value={isAuto}
            onValueChange={setIsAuto}
            trackColor={{ false: 'rgba(45, 168, 206, 1)', true: 'rgba(45, 168, 206, 1)' }}
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        {data.map((item, index) => (
          <MaturityCard
            key={index}
            coinSVG={item.coinSVG}
            coinType={item.coinType}
            platform={item.platform}
            percentage={item.percentage}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  InnerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heading: {
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
})

export default SelectYieldSection
