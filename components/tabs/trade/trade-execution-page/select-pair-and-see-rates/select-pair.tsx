import Coin from '@/assets/coins/svg'
import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'
import { ThemedText } from '@/components/ThemedText'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Appearance } from 'react-native'

function SelectPairCard({ type, pair }) {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme())

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme)
    })

    return () => subscription.remove()
  }, [])

  const isDarkMode = colorScheme === 'dark'

  return (
    <TouchableOpacity style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <Image
        source={require('@/assets/icons/trade/select-pair-see-rates/bars-3-bottom-left.png')}
      />
      <Coin type={type} height={25} width={25} />
      <ThemedText style={styles.textStyle}>{pair}</ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '700',
  },
  darkMode: {
    backgroundColor: 'rgba(33, 33, 36, 1)',
  },
  lightMode: {
    backgroundColor: 'white',
  },
})

export default SelectPairCard
