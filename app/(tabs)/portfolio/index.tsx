import HomeScreenHeader from '@/components/home/HomeHeader'

import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useState } from 'react'
import SummaryComponent from '@/components/portfolio/SummaryComponent'
import PortfolioTabs from '@/components/portfolio/PortfolioTab'

const PROFILE_TAB_ITEMS = {
  SUMMARY: 'Summary',
  POSITIONS: 'Positions',
  TRADE_HISTORY: 'Trade History',
  OTHERS: 'Others',
}

function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>(PROFILE_TAB_ITEMS.SUMMARY)
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
      <View>
        <PortfolioTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabItems={Object.values(PROFILE_TAB_ITEMS)}
        />
        {activeTab === PROFILE_TAB_ITEMS.SUMMARY && <SummaryComponent />}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
})

export default Portfolio
