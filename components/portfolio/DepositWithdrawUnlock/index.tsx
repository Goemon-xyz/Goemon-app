import React from 'react'
import { View, StyleSheet, useColorScheme } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemedText } from '@/components/ThemedText'

function DepositWithdrawUnlock() {
  const isDark = useColorScheme() === 'dark'

  const buttonsData = [
    {
      name: 'Deposit',
      icon: <FontAwesome5 name="piggy-bank" size={24} color={isDark ? '#fff' : '#000'} />,
    },
    {
      name: 'Withdraw',
      icon: <MaterialIcons name="attach-money" size={24} color={isDark ? '#fff' : '#000'} />,
    },
    {
      name: 'Unlock',
      icon: <Entypo name="lock-open" size={24} color={isDark ? '#fff' : '#000'} />,
    },
  ]

  return (
    <View style={[styles.container, isDark ? styles.darkContainer : styles.lightContainer]}>
      {buttonsData.map((button, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity style={styles.button}>
            {button.icon}
            <ThemedText style={[styles.text, isDark ? styles.darkText : styles.lightText]}>
              {button.name}
            </ThemedText>
          </TouchableOpacity>
          {index < buttonsData.length - 1 && <View style={styles.divider} />}
        </React.Fragment>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
  divider: {
    height: 29,
    width: 1,
    backgroundColor: 'rgba(73, 73, 80, 1)',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
})

export default DepositWithdrawUnlock
