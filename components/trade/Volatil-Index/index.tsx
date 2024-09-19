import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import BottomLineGraph from '../Graph/bottom-line-graph'
import { generateRandomNumbers } from '@/utils/Trade/GenerateRandomNumbers'
import { ThemedText } from '@/components/ThemedText'

const data = generateRandomNumbers(100, 1, 10000, 500)
const WIDTH = Dimensions.get('window').width

function VolatileIndex() {
  return (
    <View>
      <View style={styles.header}>
        <ThemedText style={styles.headerText}>Volatile Index</ThemedText>
        <View style={styles.indexValueContainer}>
          <ThemedText style={styles.indexValue}>39.14</ThemedText>
          <ThemedText style={styles.indexValue}>(-0.13%)</ThemedText>
        </View>
      </View>
      <View style={styles.horizontalLine} />

      <BottomLineGraph data={data} color="#1C2E91" label="label" stat="stat" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: WIDTH,
    height: 20,
    backgroundColor: '#16161B',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 10,
  },
  indexValueContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  indexValue: {
    color: 'rgba(45, 168, 206, 1)',
    fontSize: 10,
  },
  horizontalLine: {
    width: WIDTH,
    height: 1,
    backgroundColor: '#23242E',
  },
})

export default VolatileIndex
