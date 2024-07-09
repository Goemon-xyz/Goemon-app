import { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '@/constants/Colors'
import { HOME_MARKET_TAB_ITEMS as TAB_ITEMS } from '@/constants'

interface TabProps {
  activeTab: string
  setActiveTab(tab: string): any
}

const HomeMarketTabs: FC<TabProps> = ({ setActiveTab, activeTab }: TabProps) => {
  const { colors } = useTheme() as CustomTheme

  return (
    <View style={styles.tabContainer}>
      {Object.values(TAB_ITEMS).map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && { backgroundColor: colors.primary }]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[styles.tabText, { color: activeTab === tab ? colors.background : colors.text }]}
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
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tabText: {
    fontWeight: 'bold',
  },
})

export default HomeMarketTabs
