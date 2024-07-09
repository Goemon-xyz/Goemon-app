import { useEffect } from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useColorScheme } from 'react-native'
import { ThirdwebProvider } from 'thirdweb/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThirdwebProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="notifications"
              options={{ title: 'Notifications', headerBackTitle: 'Back' }}
            />
            <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
            <Stack.Screen
              name="settings"
              options={{
                title: 'Settings',
                headerShadowVisible: true,
                headerTitleAlign: 'center',
                headerBackTitle: 'Back',
                headerStyle: {
                  backgroundColor:
                    colorScheme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
                },
                headerTintColor:
                  colorScheme === 'dark' ? 'rgba(250, 250, 250, 1)' : 'rgba(0, 0, 0, 1)',
                headerTitleStyle: {
                  fontFamily: 'Poppins',
                  fontWeight: '700',
                  fontSize: 20,
                },
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </GestureHandlerRootView>
    </ThirdwebProvider>
  )
}
