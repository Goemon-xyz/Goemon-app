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
import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity, useColorScheme } from 'react-native'

export default function Settings() {
  const colorScheme = useColorScheme() as string | undefined
  const isDark = colorScheme === 'dark'
  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF' }]}>
      <ThemedText style={styles.heading}>Preferences</ThemedText>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.innerRow}>
              <ColorThemeSVG isDark={isDark} />
              <ThemedText style={styles.text}>Color Theme</ThemedText>
            </View>
            <SunSVG isDark={isDark} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.innerRow}>
              <LocalCurrencySVG isDark={isDark} />
              <ThemedText style={styles.text}>Local Currency</ThemedText>
            </View>
            <View style={styles.innerRow}>
              <ThemedText style={[styles.text, { color: 'rgba(136, 136, 145, 1)' }]}>
                USD
              </ThemedText>
              <RightArrowSVG isDark={isDark} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.innerRow}>
              <LanguageSVG isDark={isDark} />
              <ThemedText style={styles.text}>Language</ThemedText>
            </View>
            <View style={styles.innerRow}>
              <ThemedText style={[styles.text, { color: 'rgba(136, 136, 145, 1)' }]}>
                English
              </ThemedText>
              <RightArrowSVG isDark={isDark} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.innerRow}>
              <PrivacySVG isDark={isDark} />
              <ThemedText style={styles.text}>Privacy</ThemedText>
            </View>
            <RightArrowSVG isDark={isDark} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.innerRow}>
              <FaceIdSVG isDark={isDark} />
              <ThemedText style={styles.text}>Face ID</ThemedText>
            </View>
            <RightArrowSVG isDark={isDark} />
          </View>
        </TouchableOpacity>
      </View>
      <ThemedText style={styles.heading}>Support</ThemedText>
      <View style={styles.innerContainer}>
        <View>
          <TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.innerRow}>
                <ShareFeedbackSVG isDark={isDark} />
                <ThemedText style={styles.text}>Share Feedback</ThemedText>
              </View>
              <RightArrowSVG isDark={isDark} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.innerRow}>
                <GetHelpSVG isDark={isDark} />
                <ThemedText style={styles.text}>Get Help</ThemedText>
              </View>
              <RightArrowSVG isDark={isDark} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ThemedText style={styles.heading}>About</ThemedText>
      <View style={styles.innerContainer}>
        <View>
          <TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.innerRow}>
                <PrivacyPolicySVG isDark={isDark} />
                <ThemedText style={styles.text}>Privacy Policy</ThemedText>
              </View>
              <RightArrowSVG isDark={isDark} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.innerRow}>
                <TermOfServiceSVG isDark={isDark} />
                <ThemedText style={styles.text}>Term of Service</ThemedText>
              </View>
              <RightArrowSVG isDark={isDark} />
            </View>
          </TouchableOpacity>
        </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    marginHorizontal: 10,
  },
})

{
  /* <SettingItem IconComponent={ColorThemeSVG} title="Color Theme" isDark={isDark} RightComponent={SunSVG} />
<SettingItem IconComponent={LocalCurrencySVG} title="Local Currency" isDark={isDark} RightComponent={RightArrowSVG} rightText="USD" />
<SettingItem IconComponent={LanguageSVG} title="Language" isDark={isDark} RightComponent={RightArrowSVG} rightText="English" />
<SettingItem IconComponent={PrivacySVG} title="Privacy" isDark={isDark} RightComponent={RightArrowSVG} />
<SettingItem IconComponent={FaceIdSVG} title="Face ID" isDark={isDark} RightComponent={RightArrowSVG} />
<SettingItem IconComponent={ShareFeedbackSVG} title="Share Feedback" isDark={isDark} RightComponent={RightArrowSVG} />
<SettingItem IconComponent={GetHelpSVG} title="Get Help" isDark={isDark} RightComponent={RightArrowSVG} />
<SettingItem IconComponent={PrivacyPolicySVG} title="Privacy Policy" isDark={isDark} RightComponent={RightArrowSVG} />
<SettingItem IconComponent={TermOfServiceSVG} title="Term of Service" isDark={isDark} RightComponent={RightArrowSVG} /> */
}
