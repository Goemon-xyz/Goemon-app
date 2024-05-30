import React from 'react'
import { useState } from 'react'

import { Text, View, Image, useColorScheme } from 'react-native'
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
    <ThemedView
      style={{
        borderRadius: 10,
        height: 100,
        width: 100,
        backgroundColor: colorScheme === 'dark' ? '#151718' : '#e9edef',
        padding: 8,
        flexDirection: 'column',
      }}
    >
      <ThemedView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colorScheme === 'dark' ? '#151718' : '#e9edef',
          paddingVertical: 1,
        }}
      >
        <Coin type={cardTypeState} />
        <ThemedText style={{ fontSize: 14, fontWeight: 'bold', marginVertical: 4 }}>
          {coinNameState}
        </ThemedText>
        <ThemedText style={{ fontSize: 10, color: '#B8B8B8' }}>/USD</ThemedText>
      </ThemedView>
      <ThemedView style={{ backgroundColor: 'transparent' }}>
        <ThemedText style={{ fontSize: 14, color: '#FFFFFF', marginVertical: -4 }}>
          {rateState}
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 10,
            color: profitLossPercentageState > 0 ? '#58BD7D' : '#FF6838',
            marginTop: -4,
          }}
        >
          {profitLossPercentageState > 0 ? '+' : ''}
          {profitLossPercentageState}%
        </ThemedText>
        <ThemedView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -8,
            backgroundColor: 'transparent',
          }}
        >
          <ThemedText style={{ fontSize: 12, color: '#FAFAFA', marginRight: 4 }}>
            {dateState}
          </ThemedText>
          <AntDesign name="arrowright" size={12} color="white" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

export default Card
