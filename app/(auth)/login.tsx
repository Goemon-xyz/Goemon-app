import { ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {usePrivy} from '@privy-io/expo';
import Animated, { useAnimatedRef } from 'react-native-reanimated'

// components
import { Colors } from '@/constants/Colors'
import { ThemedView } from '@/components/ThemedView'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'

// components
import LoginView from '@/components/login/LoginView';

export default function LoginScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const {isReady} = usePrivy();
  const theme = useTheme()
  const colors = Colors[theme.dark ? 'dark' : 'light']

  return (
    <SafeAreaView style={styles.container}>
        <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          {!isReady ? (
            <>
              <ActivityIndicator
                size={100}
                color="#2DA8CE"
                animating={isReady}
                style={{ paddingBottom: 118, paddingTop: 200, alignItems: 'center' }}
              />
              <Footer2 />
            </>
          ) : (
            <>
              <LoginView/>
              <Footer />
            </>
          )}
        </Animated.ScrollView>
      </ThemedView>
    </ThemedView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  }
})
