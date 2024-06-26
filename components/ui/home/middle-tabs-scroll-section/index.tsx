import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import Card from '@/components/ui/home/middle-tabs-scroll-section/card'
import useStore from '@/store/useMiddleTabScrollStore'

function MiddleTabScrollSection() {
  const coins = useStore((state) => state.coins)
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View>
        {coins.map((item, index) => (
          <ThemedView key={index}>
            <Card data={item} index={index} />
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
    paddingVertical: 1,
    margin: 10,
  },
})

export default MiddleTabScrollSection
