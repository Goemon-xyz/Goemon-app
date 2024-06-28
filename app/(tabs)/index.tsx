import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import ReferralDemo from '@/components/ReferralDemo'
import HistoryAndHotSection from '@/components/ui/home/history-hot-section'
import TopNavBar from '@/components/tabs/home/top-section/top-nav-bar'
import ReferLearnCommunityLive from '@/components/tabs/home/top-section/refer-learn-community-live'
import WalletBalanceSection from '@/components/tabs/home/top-section/wallet-balance-section'
import CenterLoginSection from '@/components/tabs/home/top-section/center-Section'
import useUserStore from '@/store/useUserStore'

function Home() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)

  return (
    <SafeAreaView>
      <TopNavBar />
      {isLoggedIn ? <WalletBalanceSection /> : <CenterLoginSection />}
      <ReferLearnCommunityLive />
      <HistoryAndHotSection />
    </SafeAreaView>
  )
}

export default Home
