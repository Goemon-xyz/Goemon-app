import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ThemedView } from '@/components'
import Card from './card'
import { CoinData } from '@/types/tabs/home/history-hot-section/types'

interface ScrollSectionProps {
  data: CoinData[]
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ data }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <ThemedView key={index} style={{ marginHorizontal: 10, borderRadius: 10 }}>
            <Card data={item} />
          </ThemedView>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    margin: 10,
  },
})

export default ScrollSection
