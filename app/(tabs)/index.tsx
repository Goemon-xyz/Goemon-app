import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Link } from 'expo-router'
import TopNavBar from '@/components/TopNavBar'
import { StyleSheet } from 'react-native'
import ReferralDemo from '@/components/ReferralDemo'

function Market() {
  return (
    <SafeAreaView>
      <ThemedView style={{ margin: 15, backgroundColor: 'black' }}>
        <TopNavBar />
        <Link href="/login" style={styles.button}>
          Sign in
        </Link>
        <ReferralDemo />
      </ThemedView>
    </SafeAreaView>
  )
}

export default Market

const styles = StyleSheet.create({
  button: {
    color: 'white',
    backgroundColor: '#2DA8CE',
    width: 221,
    height: 50,
    margin: 'auto',
    borderRadius: 8,
    marginTop: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
  },
})
