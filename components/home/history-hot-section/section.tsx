import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ThemedText } from '@/components'
import ScrollSection from './scroll-section'
import { SvgProps } from 'react-native-svg'
import { DoubleArrowSVG } from '@/assets/icons/home/history-hot-section'
import { CoinData } from '@/types/tabs/home/history-hot-section/types'

interface SectionProps {
  title: string
  Icon: React.FC<SvgProps>
  data: CoinData[]
}

const Section: React.FC<SectionProps> = ({ title, Icon, data }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Icon />
          <ThemedText style={styles.text}>{title}</ThemedText>
        </View>
        <DoubleArrowSVG />
      </View>
      <ScrollSection data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  text: {
    margin: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Section
