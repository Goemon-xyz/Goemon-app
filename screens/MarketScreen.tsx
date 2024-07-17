import MarketTabs from '@/components/market/Market-Tabs'
import SearchBar from '@/components/market/SearchBar'
import { styles } from '@/components/market/styles'
import { CustomTheme } from '@/constants/Colors'
import { useTheme } from '@react-navigation/native'
import { useState, FC } from 'react'
import { View } from 'react-native'

const MarketScreen: FC = () => {
  const { colors } = useTheme() as CustomTheme
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={{ paddingHorizontal: 12 }}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <MarketTabs />
    </View>
  )
}

export default MarketScreen
