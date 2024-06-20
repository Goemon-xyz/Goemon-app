import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

function Portfolio() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>Portfolio</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}

export default Portfolio
