import React from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import MaturityCard from './MaturityCard'
import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import DogecoinSVG from '@/assets/coins/svg/dogecoinSVG'
import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'
import { ThemedText } from '@/components/ThemedText'
import useTradeSettingStore from '@/store/useTradeSettingStore'

const SelectYieldSection = () => {
  const { isAutoYield, setIsAutoYield } = useTradeSettingStore()

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

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ThemedText style={styles.heading}>Select Yield</ThemedText>
        <View style={styles.row}>
          <ThemedText style={styles.text}>Auto</ThemedText>
          <Switch
            value={isAutoYield}
            onValueChange={setIsAutoYield}
            trackColor={{ false: 'rgba(45, 168, 206, 1)', true: 'rgba(45, 168, 206, 1)' }}
          />
        </View>
      </View>
      <View style={styles.innerContainer}>
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
  innerContainer: {
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
  text: {
    fontSize: 12,
  },
})

export default SelectYieldSection
