import React from 'react'
import { View, StyleSheet, useColorScheme } from 'react-native'
import SettingItem from '@/components/ui/settings/setting-item'
import PrivacyPolicySVG from '@/assets/icons/setting/about/svg/privacy_policy'
import TermOfServiceSVG from '@/assets/icons/setting/about/svg/term_of_service'
import ColorThemeSVG from '@/assets/icons/setting/preference/svg/color_theme'
import FaceIdSVG from '@/assets/icons/setting/preference/svg/face_id'
import LanguageSVG from '@/assets/icons/setting/preference/svg/language'
import LocalCurrencySVG from '@/assets/icons/setting/preference/svg/local_currency'
import PrivacySVG from '@/assets/icons/setting/preference/svg/privacy'
import SunSVG from '@/assets/icons/setting/preference/svg/sun'
import RightArrowSVG from '@/assets/icons/setting/right_arrow'
import GetHelpSVG from '@/assets/icons/setting/support/svg/get_help'
import ShareFeedbackSVG from '@/assets/icons/setting/support/svg/share_feedback'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function Settings() {
  const colorScheme = useColorScheme() as string | undefined
  const isDark = colorScheme === 'dark'
  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF' }]}>
      <ThemedText style={styles.heading}>Preferences</ThemedText>
      <View style={styles.innerContainer}>
        <SettingItem
          IconComponent={ColorThemeSVG}
          title="Color Theme"
          isDark={isDark}
          RightComponent={SunSVG}
          rightText={undefined}
        />
        <SettingItem
          IconComponent={LocalCurrencySVG}
          title="Local Currency"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText="USD"
        />
        <SettingItem
          IconComponent={LanguageSVG}
          title="Language"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText="English"
        />
        <SettingItem
          IconComponent={PrivacySVG}
          title="Privacy"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText={undefined}
        />
        <SettingItem
          IconComponent={FaceIdSVG}
          title="Face ID"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText={undefined}
        />
      </View>
      <ThemedText style={styles.heading}>Support</ThemedText>
      <View style={styles.innerContainer}>
        <SettingItem
          IconComponent={ShareFeedbackSVG}
          title="Share Feedback"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText={undefined}
        />
        <SettingItem
          IconComponent={GetHelpSVG}
          title="Get Help"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText={undefined}
        />
      </View>
      <ThemedText style={styles.heading}>About</ThemedText>
      <View style={styles.innerContainer}>
        <SettingItem
          IconComponent={PrivacyPolicySVG}
          title="Privacy Policy"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText={undefined}
        />
        <SettingItem
          IconComponent={TermOfServiceSVG}
          title="Term of Service"
          isDark={isDark}
          RightComponent={RightArrowSVG}
          rightText={undefined}
        />
      </View>
    </View>
  )
}

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
