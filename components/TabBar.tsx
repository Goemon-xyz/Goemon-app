import { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'

interface TabProps {
  items: string[]
  activeTab: string
  setActiveTab(tab: string): any
  additionalStyles?: Object
}

const TabBar: FC<TabProps> = ({ items, setActiveTab, activeTab, additionalStyles }: TabProps) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  return (
    <View style={[styles.tabContainer, additionalStyles]}>
      {items.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && { backgroundColor: '#212124' }]}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            style={[
              styles.tabText,
              { color: activeTab === tab ? theme.text : theme.secondaryText },
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
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  tabText: {
    fontWeight: 'bold',
  },
})

export default TabBar
