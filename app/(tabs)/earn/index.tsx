import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import MiddleTabScrollSection from '@/components/home/middle-tabs-scroll-section'
import UpDownPairButton from '@/components/market/Button-pair'
import { SafeAreaView, View } from 'react-native'

function Earn() {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 80 }}>
        <UpDownPairButton />
      </View>
    </SafeAreaView>
  )
}

export default Earn
