import { ThemedText } from '@/components/ThemedText'
import WalletBalanceSection from '@/components/home/top-section/wallet-balance-section'
import React from 'react'
import { View, Text } from 'react-native'
import DepositWithdrawUnlock from '../DepositWithdrawUnlock'

function SummaryComponent() {
  return (
    <View>
      <WalletBalanceSection />
      <DepositWithdrawUnlock />
    </View>
  )
}

export default SummaryComponent
