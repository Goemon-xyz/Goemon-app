import { FC } from 'react'
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import useUserStore from '@/store/useUserStore'
import { Colors } from '@/constants/Colors'
import ReferLearnCommunityLive from '@/components/tabs/home/top-section/refer-learn-community-live'
import Header from '@/components/ui/home/HomeHeader'
import HotSection from '@/components/ui/home//HotSection'
import ListSection from '@/components/ui/home//ListSection'
import { ThemedText } from '@/components'

const HomeScreen: FC = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  const isLoggedIn = useUserStore((state) => state.isLoggedIn)

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      <TouchableOpacity
        style={[styles.signInButton, { backgroundColor: theme.button }]}
        onPress={() => router.push('/signin')}
      >
        <ThemedText style={[styles.signInText, { color: theme.buttonText }]}>Sign in</ThemedText>
      </TouchableOpacity>
      <ReferLearnCommunityLive />
      <HotSection />
      <ListSection />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  signInButton: {
    width: 250,
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  signInText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    marginTop: 5,
  },
})

export default HomeScreen
