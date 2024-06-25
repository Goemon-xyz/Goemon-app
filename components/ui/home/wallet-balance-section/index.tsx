import ClosedEyeSVG from '@/assets/icons/home/wallet-balance-section/svg/closed_eye.'
import OpenEyeSVG from '@/assets/icons/home/wallet-balance-section/svg/open_eye'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button, useColorScheme } from 'react-native'

function WalletBalanceSection() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'
  const [isOpen, setIsOpen] = useState(true)
  const [balance, setBalance] = useState('163,22.12')
  const [change, setChange] = useState('-123.23')
  const [changePercentage, setChangePercentage] = useState('-1.23%')
  return (
    <ThemedView>
      <View style={styles.container}>
        <View>
          <View style={styles.row}>
            <ThemedText style={styles.title} type="title">
              Total Balance
            </ThemedText>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <OpenEyeSVG fillColor={isDark ? '#FAFAFA' : '#000000'} />
              ) : (
                <ClosedEyeSVG fillColor={isDark ? '#FAFAFA' : '#000000'} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={[styles.balance, { color: isDark ? '#FAFAFA' : '#000000' }]}>
              {isOpen ? balance : '**********'}
            </Text>
            <Text style={styles.currency}>USD</Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.change,
                {
                  color: change.startsWith('-') ? 'rgba(255, 104, 56, 1)' : 'rgba(88, 189, 125, 1)',
                },
              ]}
            >
              {change}
            </Text>
            <Text
              style={[
                styles.changePercentage,
                {
                  color: changePercentage.startsWith('-')
                    ? 'rgba(255, 104, 56, 1)'
                    : 'rgba(88, 189, 125, 1)',
                },
              ]}
            >
              {changePercentage}
            </Text>
            <Text style={styles.today}>Today</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
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
    color: 'rgba(250, 250, 250, 1)',
  },
  currency: {
    fontSize: 12,
    color: 'rgba(136, 136, 145, 1)',
    marginTop: 12,
  },
  change: {
    fontSize: 12,
    marginRight: 2,
    color: 'rgba(88, 189, 125, 1)',
  },
  changePercentage: {
    fontSize: 12,
    marginRight: 4,
    color: 'rgba(88, 189, 125, 1)',
  },
  today: {
    fontSize: 12,
    color: 'rgba(136, 136, 145, 1)',
  },
  button: {
    backgroundColor: 'rgba(45, 168, 206, 1)',
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
