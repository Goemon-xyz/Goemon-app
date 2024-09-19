import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native'
import ClosedEyeSVG from '@/assets/icons/home/wallet-balance-section/svg/closed_eye'
import OpenEyeSVG from '@/assets/icons/home/wallet-balance-section/svg/open_eye'
import { ThemedText } from '@/components/ThemedText'
import useWalletStore from '@/store/useWalletStore'

function WalletBalanceSection() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  const { isOpen, balance, change, changePercentage, toggleVisibility } = useWalletStore()

  const themeStyles = {
    container: {
      backgroundColor: isDark ? '#000' : '#fff',
    },
    text: {
      color: isDark ? '#FAFAFA' : '#000000',
    },
    button: {
      backgroundColor: isDark ? 'rgba(45, 168, 206, 1)' : 'rgba(30, 144, 255, 1)',
    },
  }

  const changeColor = change.startsWith('-') ? 'rgba(255, 104, 56, 1)' : 'rgba(88, 189, 125, 1)'
  const changePercentageColor = changePercentage.startsWith('-')
    ? 'rgba(255, 104, 56, 1)'
    : 'rgba(88, 189, 125, 1)'

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View>
        <View style={styles.row}>
          <ThemedText style={[styles.title, themeStyles.text]}>Total Balance</ThemedText>
          <TouchableOpacity onPress={toggleVisibility}>
            {isOpen ? (
              <OpenEyeSVG fillColor={themeStyles.text.color} />
            ) : (
              <ClosedEyeSVG fillColor={themeStyles.text.color} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={[styles.balance, themeStyles.text]}>{isOpen ? balance : '**********'}</Text>
          <Text style={styles.currency}>USD</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.change, { color: changeColor }]}>{change}</Text>
          <Text style={[styles.changePercentage, { color: changePercentageColor }]}>
            {changePercentage}
          </Text>
          <Text style={styles.today}>Today</Text>
        </View>
      </View>
      {/* <View>
        <TouchableOpacity style={[styles.button, themeStyles.button]}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    marginRight: 10,
  },
  balance: {
    fontSize: 24,
    marginRight: 10,
  },
  currency: {
    fontSize: 12,
    color: 'rgba(136, 136, 145, 1)',
    marginTop: 12,
  },
  change: {
    fontSize: 12,
    marginRight: 2,
  },
  changePercentage: {
    fontSize: 12,
    marginRight: 4,
  },
  today: {
    fontSize: 12,
    color: 'rgba(136, 136, 145, 1)',
  },
  button: {
    height: 50,
    width: 121,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(250, 250, 250, 1)',
    fontSize: 16,
  },
})

export default WalletBalanceSection
