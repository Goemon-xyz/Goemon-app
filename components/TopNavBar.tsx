import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

export default function TopNavBar() {
  const add = '0x3f4...0f90'
  return (
    <View
      style={{ backgroundColor: 'black', flexDirection: 'row', columnGap: 120, paddingTop: 10 }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
        <Image
          style={{ width: 26, height: 26 }}
          source={require('@/assets/images/u_setting.png')}
        />
        <Image
          style={{ width: 26, height: 26 }}
          source={require('@/assets/images/u_headphones.png')}
        />
        <Image
          style={{ width: 26, height: 26 }}
          source={require('@/assets/images/bell-alert.png')}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
        <Text style={{ color: 'white' }}>{add}</Text>
        <Image
          style={{ width: 26, height: 26 }}
          source={require('@/assets/images/u_angle-down.png')}
        />
      </View>
    </View>
  )
}
