import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Link } from 'expo-router'

function Market() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>Home</ThemedText>
      </ThemedView>
      <Link href="/login" style={{ color: 'white' }}>
        Sign in
      </Link>
    </SafeAreaView>
  )
}

export default Market
