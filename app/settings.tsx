import { View, StyleSheet, useColorScheme } from 'react-native'
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

const settingsData = [
  {
    IconComponent: ColorThemeSVG,
    title: 'Color Theme',
    RightComponent: SunSVG,
    rightText: undefined,
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
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#FFF' }]}>
      {renderSection('Preferences', settingsData.slice(0, 5), isDark)}
      {renderSection('Support', settingsData.slice(5, 7), isDark)}
      {renderSection('About', settingsData.slice(7), isDark)}
    </View>
  )
}

const renderSection = (sectionTitle, data, isDark) => (
  <View key={sectionTitle}>
    <ThemedText style={styles.heading}>{sectionTitle}</ThemedText>
    <View style={styles.innerContainer}>
      {data.map((item, index) => (
        <SettingItem
          key={index}
          IconComponent={item.IconComponent}
          title={item.title}
          isDark={isDark}
          RightComponent={item.RightComponent}
          rightText={item.rightText}
        />
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
