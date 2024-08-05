import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function PlaceOrderButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Place Order</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    width: 351,
    backgroundColor: 'rgba(88, 189, 125, 1)',
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 46,
    fontWeight: 'semibold',
  },
})

export default PlaceOrderButton
