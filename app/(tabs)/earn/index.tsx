import { ThemedText, ThemedView } from '@/components'
import MiddleTabScrollSection from '@/components/ui/home/middle-tabs-scroll-section'
import { SafeAreaView } from 'react-native'
import useStore from '@/store/useMiddleTabScrollStore'

function Earn() {
  const coins = useStore((state) => state.coins)
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
