import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import MiddleTabScrollSection from '@/components/home/middle-tabs-scroll-section'
import { SafeAreaView } from 'react-native'

function Earn() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>Earn</ThemedText>
        <MiddleTabScrollSection />
      </ThemedView>
    </SafeAreaView>
  )
}

export default Earn
