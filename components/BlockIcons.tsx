import React from 'react'
import { View, Image, Text } from 'react-native'

export default function BlockIcons(props) {
  return (
    <View
      style={{
        width: 76,
        height: 62,
        alignItems: 'center',
        backgroundColor: '#18181B',
        borderRadius: 8,
      }}
    >
      <View style={{ alignItems: 'center', paddingTop: 5 }}>
        <Image source={props.imagerl} style={{ width: 30, height: 30 }} />
        <Text style={{ color: 'white', paddingTop: 5 }}>{props.text}</Text>
      </View>
    </View>
  )
}
