import React from 'react'
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import useUserStore from '@/store/useUserStore'
import { Link } from 'expo-router'

function CenterLoginSection() {
  const logIn = useUserStore((state) => state.logIn)
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: isDark ? '#000' : '#fff',
      }}
    >
      <TouchableOpacity
        style={{
          height: 50,
          width: 189,
          backgroundColor: 'rgba(45, 168, 206, 1)',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}
        onPress={logIn}
      >
        <Link href={'/login'}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Sign in</Text>
        </Link>
      </TouchableOpacity>
    </View>
  )
}

export default CenterLoginSection
