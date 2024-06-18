import React from 'react'
import { View } from 'react-native'
import BlockIcons from './BlockIcons'

export default function ReferralDemo() {
  const img1 = require('@/assets/images/user-plus.png')
  const img2 = require('@/assets/images/academic-cap.png')
  const img3 = require('@/assets/images/chat-bubble-left-right.png')
  const img4 = require('@/assets/images/square-3-stack-3d.png')
  return (
    <View style={{ flexDirection: 'row', columnGap: 10, marginTop: 25 }}>
      <BlockIcons imagerl={img1} text="Referral" />
      <BlockIcons imagerl={img2} text="Learn" />
      <BlockIcons imagerl={img3} text="Community" />
      <BlockIcons imagerl={img4} text="Live" />
    </View>
  )
}
