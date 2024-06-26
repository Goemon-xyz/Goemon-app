import { StyleSheet, TouchableOpacity, View, useColorScheme, Text } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetRefProps } from '@/components/ui/BottomDrawer/BottomSheet'
import TradeSettingDrawer from '@/components/ui/trade/trade-setting-drawer'

export default function Trade() {
  const isDark = useColorScheme() === 'dark'

  const ref = useRef<BottomSheetRefProps>(null)

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive()
    if (isActive) {
      ref?.current?.scrollTo(0)
    } else {
      ref?.current?.scrollTo(-200)
    }
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Trade Settings</Text>
        </TouchableOpacity>
        <BottomSheet ref={ref} heading="Trade Settings" isDark={isDark}>
          <TradeSettingDrawer />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 2,
    backgroundColor: 'white',
    opacity: 0.6,
    padding: 10,
  },
})
