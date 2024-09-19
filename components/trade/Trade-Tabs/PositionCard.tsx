import Coin from '@/assets/coins/svg'
import IconButton from '@/components/IconButton'
import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function PositionCard() {
  return (
    <TouchableOpacity style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.coinContainer}>
          <Coin type="Ethereum" height={35} width={35} />
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.symbolText}>ETH</ThemedText>
          <ThemedText style={styles.dateText}>29Dec23-1900-C</ThemedText>
        </View>
        <View style={styles.sizeContainer}>
          <ThemedText style={styles.labelText}>SIZE</ThemedText>
          <ThemedText style={styles.sizeText}>10.00</ThemedText>
        </View>
        <View style={styles.pnlContainer}>
          <ThemedText style={styles.labelText}>PNL</ThemedText>
          <ThemedText style={styles.pnlText}>+520$</ThemedText>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            type="Ionicons"
            name="chevron-down"
            size={20}
            color="#FFF"
            onPress={() => {
              console.log('clicked')
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  container: {
    height: 70,
    width: 355,
    backgroundColor: '#212025',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  coinContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    marginRight: 10,
  },
  symbolText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  dateText: {
    fontSize: 12,
    color: 'rgba(136, 136, 145, 1)',
  },
  sizeContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  labelText: {
    marginLeft: 5,
    fontSize: 10,
    color: 'rgba(136, 136, 145, 1)',
  },
  sizeText: {
    fontSize: 14,
    color: '#FFF',
  },
  pnlContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  pnlText: {
    fontSize: 14,
    color: 'rgba(88, 189, 125, 1)',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default PositionCard
