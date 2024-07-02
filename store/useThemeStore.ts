import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { create } from 'zustand'

type State = {
  isDark: boolean
  toggleTheme: () => void
  setDarkMode: (isDark: boolean) => void
}

const useThemeStore = create<State>((set) => ({
  isDark: true,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setDarkMode: (isDark) => set({ isDark }),
}))

// Custom hook to synchronize Zustand state with system theme
const useSyncWithSystemTheme = () => {
  const colorScheme = useColorScheme()
  const setDarkMode = useThemeStore((state) => state.setDarkMode)

  useEffect(() => {
    setDarkMode(colorScheme === 'dark')
  }, [colorScheme, setDarkMode])
}

export { useThemeStore, useSyncWithSystemTheme }
