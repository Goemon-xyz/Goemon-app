import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText'

const SettingItem = ({ IconComponent, title, isDark, RightComponent, rightText }) => {
  return (
    <TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.innerRow}>
          <IconComponent isDark={isDark} />
          <ThemedText style={styles.text}>{title}</ThemedText>
        </View>
        <View style={styles.innerRow}>
          {rightText && (
            <ThemedText style={[styles.text, { color: 'rgba(136, 136, 145, 1)' }]}>
              {rightText}
            </ThemedText>
          )}
          <RightComponent isDark={isDark} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
