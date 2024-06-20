import Settings from '@/app/settings'
import { ThemedButton } from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'

function Market() {
  return (
    <SafeAreaView>
      <ThemedText>Market</ThemedText>
      <Link href="/settings">
        <ThemedText>Settings</ThemedText>
      </Link>
    </SafeAreaView>
  )
}

export default Market
