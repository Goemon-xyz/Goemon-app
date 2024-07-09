import React from 'react'
import { useState } from 'react'

import { Text, View, Image, useColorScheme, StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

import { AntDesign } from '@expo/vector-icons'
import Coin from '@/assets/coins/svg'

interface CardData {
  coinName: string
  cardType: string
  conversionCurrency: string
  rate: number
  profitLossPercentage: number
  date: string
}

function Card({ data }: { data: CardData }) {
  const { coinName, cardType, conversionCurrency, rate, profitLossPercentage, date } = data

  const [coinNameState, setCoinName] = useState<string>(coinName)
  const [cardTypeState, setCardType] = useState<string>(cardType)
  const [conversionCurrencyState, setConversionCurrency] = useState<string>(conversionCurrency)
  const [rateState, setRate] = useState<number>(rate)
  const [profitLossPercentageState, setProfitLossPercentage] =
    useState<number>(profitLossPercentage)
  const [dateState, setDate] = useState<string>(date)
  const colorScheme = useColorScheme()

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === 'dark' ? '#1A1A1A' : '#F7F8FA' },
      ]}
    >
      <View style={[styles.innerContainer]}>
        <Coin type={cardTypeState} height={14} width={14} />
        <ThemedText style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 4 }}>
          {coinNameState}
        </ThemedText>
        <ThemedText style={{ fontSize: 10, color: '#B8B8B8' }}>/USD</ThemedText>
      </View>
      <View style={{ backgroundColor: 'transparent' }}>
        <ThemedText style={{ fontSize: 14, marginVertical: -4 }}>{rateState}</ThemedText>
        <ThemedText
          style={[
            styles.percentage,
            { color: profitLossPercentageState > 0 ? '#58BD7D' : '#FF6838' },
          ]}
        >
          {profitLossPercentageState > 0 ? '+' : ''}
          {profitLossPercentageState}%
        </ThemedText>
        <View style={styles.date}>
          <ThemedText style={{ fontSize: 12, marginRight: 4 }}>{dateState}</ThemedText>
          <AntDesign name="arrowright" size={12} color="white" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 100,
    width: 100,
    padding: 8,
    flexDirection: 'column',
  },

  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 1,
  },

  percentage: {
    fontSize: 10,
    marginTop: -4,
  },

  date: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -8,
    backgroundColor: 'transparent',
  },
})

export default Card
