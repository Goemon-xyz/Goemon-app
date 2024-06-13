import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import WalletBalanceSection from '@/components/ui/home/wallet-balance-section'
import { View, Text, SafeAreaView } from 'react-native'

function Portfolio() {
  return (
    <SafeAreaView>
      <ThemedView style={{ marginTop: 20 }}>
        <WalletBalanceSection />
      </ThemedView>
    </SafeAreaView>
  )
}

export default Portfolio
