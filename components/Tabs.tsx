// components/Tabs.tsx
import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '@/constants/Colors'

interface TabsProps {
  activeTab: string
  setActiveTab(tab: string): void
  tabItems: string[]
}

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab, tabItems }) => {
  const { colors } = useTheme() as CustomTheme

  return (
    <View style={styles.tabContainer}>
      {tabItems.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && { backgroundColor: 'rgba(33, 33, 36, 1)' }]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[
              styles.tabText,
              { color: activeTab === tab ? 'rgba(250, 250, 250, 1)' : colors.text },
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default Tabs
