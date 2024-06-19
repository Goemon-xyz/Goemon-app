import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import MiddleTabScrollSection from '@/components/ui/home/middle-tabs-scroll-section'
import Card from '@/components/ui/home/middle-tabs-scroll-section/card'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

function Earn() {
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText>Earn</ThemedText>
        <MiddleTabScrollSection />
      </ThemedView>
    </SafeAreaView>
  )
}

export default Earn
