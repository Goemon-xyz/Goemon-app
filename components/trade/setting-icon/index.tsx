import React, { useCallback, useRef } from 'react'
import { TouchableOpacity, View, useColorScheme, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import BottomSheet, { BottomSheetRefProps } from '@/components/BottomDrawer/BottomSheet'
import TradeSettingDrawer from '@/components/trade/trade-setting-drawer'

interface SettingsIconProps {
  style?: StyleProp<ViewStyle>
}

export default function SettingsIcon({ style }: SettingsIconProps) {
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
      <TouchableOpacity onPress={onPress} style={style}>
        <Icon name="settings-outline" size={20} color={isDark ? '#fff' : '#000'} />
      </TouchableOpacity>
      <BottomSheet ref={ref} heading="Trade Settings" isDark={isDark}>
        <TradeSettingDrawer />
      </BottomSheet>
    </>
  )
}
