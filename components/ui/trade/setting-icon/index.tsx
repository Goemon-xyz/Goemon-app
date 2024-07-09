import React, { useCallback, useRef } from 'react'
import { TouchableOpacity, View, useColorScheme } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import BottomSheet, { BottomSheetRefProps } from '@/components/ui/BottomDrawer/BottomSheet'
import TradeSettingDrawer from '@/components/ui/trade/trade-setting-drawer'

export default function SettingsIcon() {
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
    <>
      <TouchableOpacity onPress={onPress}>
        <Icon name="settings-outline" size={20} color={isDark ? '#fff' : '#000'} />
      </TouchableOpacity>
      <BottomSheet ref={ref} heading="Trade Settings" isDark={isDark}>
        <TradeSettingDrawer />
      </BottomSheet>
    </>
  )
}
