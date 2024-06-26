import React, { useEffect } from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useColorScheme } from 'react-native'
import { ThirdwebProvider } from 'thirdweb/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet from '@/components/ui/BottomDrawer/BottomSheet'

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
<<<<<<< HEAD
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThirdwebProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </ThirdwebProvider>
    </GestureHandlerRootView>
=======
    <ThirdwebProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="settings"
            options={{
              title: 'Setting',
              headerShadowVisible: true,
              headerTitleAlign: 'center',
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
        </Stack>
      </ThemeProvider>
    </ThirdwebProvider>
>>>>>>> origin/shauryaagrawal2718/goe-38-trade-settings-page
  )
}
