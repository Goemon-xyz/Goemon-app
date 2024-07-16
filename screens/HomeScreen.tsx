import { FC, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import useUserStore from '@/store/useUserStore'
import { Colors } from '@/constants/Colors'
import ReferLearnCommunityLive from '@/components/home/ReferLearnCommunity'
import Header from '@/components/home/HomeHeader'
import HotSection from '@/components/home//HotSection'
import { ThemedText } from '@/components'
import { usePrivy } from '@privy-io/expo'

const HomeScreen: FC = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  // const isLoggedIn = useUserStore((state) => state.isLoggedIn)

  const { user, logout } = usePrivy()
  const { getAccessToken } = usePrivy()

  useEffect(() => {
    const fetchAccessToken = async () => {
      if (user) {
        const accessToken = await getAccessToken()
        console.log('accessToken is', accessToken)
      }
    }

    fetchAccessToken()
  }, [user])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      {!user ? (
        <TouchableOpacity
          style={[styles.signInButton, { backgroundColor: theme.button }]}
          onPress={() => router.push('/(auth)/login')}
        >
          <ThemedText style={[styles.signInText, { color: theme.buttonText }]}>Sign in</ThemedText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.signInButton, { backgroundColor: theme.button }]}
          onPress={logout}
        >
          <ThemedText style={[styles.signInText, { color: theme.buttonText }]}>Logout</ThemedText>
        </TouchableOpacity>
      )}
      <ReferLearnCommunityLive />
      <HotSection />
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
