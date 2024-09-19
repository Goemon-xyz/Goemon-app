import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'

import { generateRandomNumbers } from '@/utils/Trade/GenerateRandomNumbers'
import { ThemedText } from '@/components/ThemedText'
import LineGraph from '../Graph/line-graph'
import FillArrowDownSVG from '@/assets/icons/trade/Main-Graph/arrow-down'
import LockSVG from '@/assets/icons/trade/Main-Graph/lock'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const data = generateRandomNumbers(100, 1, 10000, 500)
const WIDTH = Dimensions.get('window').width

function MainGraph() {
  return (
    <View>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          {['1m', '15m', '1h', '4h', '1d'].map((text) => (
            <TouchableOpacity key={text}>
              <ThemedText style={styles.headerText}>{text}</ThemedText>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.moreButton}>
            <ThemedText style={styles.headerText}>More</ThemedText>
            <View style={styles.arrowDown}>
              <FillArrowDownSVG />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <LockSVG />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="candlestick-chart" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* HORIZONTAL LINT */}
      <View style={styles.horizontalLine} />

      {/* GRAPH */}
      <LineGraph data={data} color="#1C2E91" label="label" stat="stat" />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    height: 30,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  headerText: {
    color: 'rgba(136, 136, 145, 1)',
    fontSize: 10,
    marginLeft: 10,
  },
  moreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  arrowDown: {
    marginTop: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
  },
  horizontalLine: {
    width: WIDTH,
    height: 1,
    backgroundColor: '#23242E',
  },
})

export default MainGraph
