import React from 'react'
import { View, Text, Switch, Button } from 'react-native'
import { useState } from 'react'

export default function Footer2() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View style={{ paddingTop: 110 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 160 }}>
        <Text style={{ color: '#FAFAFA' }}>Remember me</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#2DA8CE' }}
          thumbColor={isEnabled ? 'white' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <Text style={{ color: '#888891' }}>
          Didn't get it? Click <Text style={{ color: '#2DA8CE' }}>here</Text> to try again
        </Text>
      </View>
    </View>
  )
}
