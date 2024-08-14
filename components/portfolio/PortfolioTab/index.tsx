// components/portfolio/PortfolioTab/index.tsx
import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '@/constants/Colors'

interface PortfolioTabsProps {
  activeTab: string
  setActiveTab(tab: string): void
  tabItems: string[]
}

const PortfolioTabs: FC<PortfolioTabsProps> = ({ activeTab, setActiveTab, tabItems }) => {
  const { colors } = useTheme() as CustomTheme

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default PortfolioTabs
