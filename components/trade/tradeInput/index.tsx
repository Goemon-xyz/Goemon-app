import Coin from '@/assets/coins/svg'
import DownArrowSVg from '@/assets/icons/market/Filter-Button/down-arrow'
import { ThemedText } from '@/components/ThemedText'
import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

function TradeInput() {
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10 }}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
          placeholder="10.00"
          placeholderTextColor="#aaa"
        />
      </View>
      <TouchableOpacity style={styles.coinContainer}>
        <Coin type="Ethereum" height={20} width={20} />
        <ThemedText style={styles.coinText}>ETH</ThemedText>
        <DownArrowSVg fill={'#fff'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: 161,
    backgroundColor: 'rgba(48, 48, 51, 1)',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 80,
    height: 30,
    borderRadius: 14,
    backgroundColor: 'rgba(23, 24, 27, 1)',
    paddingHorizontal: 5,
  },
  coinText: {
    color: '#fff',
    marginHorizontal: 5,
    fontSize: 14,
    marginTop: 2,
  },
})

export default TradeInput
