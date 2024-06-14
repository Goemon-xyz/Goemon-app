import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface SettingItemProps {
  IconComponent: React.FC<{ isDark: boolean }>
  title: string
  isDark: boolean
  RightComponent?: React.FC<{ isDark: boolean }>
  rightText?: string
}

const SettingItem: React.FC<SettingItemProps> = ({
  IconComponent,
  title,
  isDark,
  RightComponent,
  rightText,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.innerRow}>
          <ColorThemeSVG isDark={isDark} />
          <ThemedText style={styles.text}>Color Theme</ThemedText>
        </View>
        <SunSVG isDark={isDark} />
      </View>
    </TouchableOpacity>
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

export default SettingItem
