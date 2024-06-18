import MinusSVG from '@/assets/icons/trade/trade-seeting-drawer/svg/minusSVG'
import PlusSVG from '@/assets/icons/trade/trade-seeting-drawer/svg/plusSVG'
import React from 'react'
import { View, Text } from 'react-native'

function TradeSettingDrawer() {
  return (
    <View>
      <Text style={{ color: '#FFF' }}>Trade Setting</Text>
      <PlusSVG />
      <MinusSVG />
    </View>
  )
}

export default TradeSettingDrawer
