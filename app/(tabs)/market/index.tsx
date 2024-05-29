import { ThemedButton } from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'

function Market() {
  const [state, setState] = useState('')
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>market</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}

export default Market
