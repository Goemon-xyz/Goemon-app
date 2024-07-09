import { StyleSheet, View } from 'react-native'
import MaxSlippageSection from './max-slippage-section'
import SelectYieldSection from './select-yield-section'
import InfoSection from './info-section'

function TradeSettingDrawer() {
  return (
    <View>
      <MaxSlippageSection />
      <View style={styles.component}>
        <SelectYieldSection />
      </View>
      <View style={styles.component}>
        <InfoSection />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    marginBottom: 8,
  },
})

export default TradeSettingDrawer
