import React from 'react'
import { useState } from 'react'
import { Text, View, Image, useColorScheme, StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { AntDesign } from '@expo/vector-icons'
import Coin from '@/assets/coins/svg'
import useStore from '@/store/useMiddleTabScrollStore'

interface CardData {
  coinName: string
  coinFullName: string
  cardType: string
  lastPrize: number
  change: number
}

function Card({ data, index }: { data: CardData; index: number }) {
  const { coinName, coinFullName, cardType, lastPrize, change } = data
  const updateCoin = useStore((state) => state.updateCoin)

  const [coinNameState, setCoinName] = useState<string>(coinName)
  const [coinFullNameState, setCoinFullName] = useState<string>(coinFullName)
  const [cardTypeState, setCardType] = useState<string>(cardType)
  const [lastPrizeState, setLastPrize] = useState<number>(lastPrize)
  const [changeState, setChange] = useState<number>(change)
  const colorScheme = useColorScheme()

  // function Card() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginRight: 11, alignSelf: 'center' }}>
          <Coin type={cardTypeState} height={35} width={35} />
        </View>
        <View>
          <ThemedText style={{ fontSize: 16 }}>{coinNameState}</ThemedText>
          <ThemedText style={{ fontSize: 14, color: '#888891' }}>{coinFullNameState}</ThemedText>
        </View>
      </View>
      <ThemedText style={{ fontSize: 18, color: changeState > 0 ? '#58BD7D' : '#FF6838' }}>
        ${lastPrizeState}
      </ThemedText>
      <View
        style={{
          height: 21,
          backgroundColor: changeState > 0 ? 'rgba(88, 189, 125, 0.3)' : 'rgba(255, 104, 56, 0.3)',
          borderRadius: 4,
          paddingHorizontal: 10,
        }}
      >
        <ThemedText
          style={{
            fontSize: 14,
            color: changeState > 0 ? '#58BD7D' : '#FF6838',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          {changeState > 0 ? '+' : ''}
          {changeState}%
        </ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    padding: 20,
  },
})

export default Card
