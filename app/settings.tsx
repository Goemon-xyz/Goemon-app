import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { SettingItem } from '@/assets/icons/setting'
import {
  PrivacyPolicySVG,
  TermOfServiceSVG,
  ColorThemeSVG,
  FaceIdSVG,
  LanguageSVG,
  LocalCurrencySVG,
  PrivacySVG,
  SunSVG,
  RightArrowSVG,
  GetHelpSVG,
  ShareFeedbackSVG,
} from '@/assets/icons/setting'
import { ThemedText } from '@/components/ThemedText'
import { useThemeStore, useSyncWithSystemTheme } from '@/store/useThemeStore'

const settingsData = [
  {
    IconComponent: ColorThemeSVG,
    title: 'Color Theme',
    RightComponent: SunSVG,
    rightText: undefined,
    onPress: 'toggleTheme',
  },
  {
    IconComponent: LocalCurrencySVG,
    title: 'Local Currency',
    RightComponent: RightArrowSVG,
    rightText: 'USD',
  },
  {
    IconComponent: LanguageSVG,
    title: 'Language',
    RightComponent: RightArrowSVG,
    rightText: 'English',
  },
  {
    IconComponent: PrivacySVG,
    title: 'Privacy',
    RightComponent: RightArrowSVG,
    rightText: undefined,
  },
  {
    IconComponent: FaceIdSVG,
    title: 'Face ID',
    RightComponent: RightArrowSVG,
    rightText: undefined,
  },
  {
    IconComponent: ShareFeedbackSVG,
    title: 'Share Feedback',
    RightComponent: RightArrowSVG,
    rightText: undefined,
  },
  {
    IconComponent: GetHelpSVG,
    title: 'Get Help',
    RightComponent: RightArrowSVG,
    rightText: undefined,
  },
  {
    IconComponent: PrivacyPolicySVG,
    title: 'Privacy Policy',
    RightComponent: RightArrowSVG,
    rightText: undefined,
  },
  {
    IconComponent: TermOfServiceSVG,
    title: 'Term of Service',
    RightComponent: RightArrowSVG,
    rightText: undefined,
  },
]

const Settings = () => {
  useSyncWithSystemTheme()
  const isDark = useThemeStore((state) => state.isDark)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  const handlePress = (action) => {
    if (action === 'toggleTheme') {
      toggleTheme()
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#FFF' }]}>
      {renderSection('Preferences', settingsData.slice(0, 5), isDark, handlePress)}
      {renderSection('Support', settingsData.slice(5, 7), isDark, handlePress)}
      {renderSection('About', settingsData.slice(7), isDark, handlePress)}
    </View>
  )
}

const renderSection = (sectionTitle, data, isDark, handlePress) => (
  <View key={sectionTitle}>
    <ThemedText style={[styles.heading, { color: isDark ? '#FFF' : '#000' }]}>
      {sectionTitle}
    </ThemedText>
    <View style={styles.innerContainer}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(item.onPress)}>
          <SettingItem
            IconComponent={item.IconComponent}
            title={item.title}
            isDark={isDark}
            RightComponent={item.RightComponent}
            rightText={item.rightText}
          />
        </TouchableOpacity>
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  innerContainer: {
    padding: 16,
  },
})

export default Settings
