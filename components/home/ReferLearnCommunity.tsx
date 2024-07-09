import React from 'react'
import { View, StyleSheet, useColorScheme } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemedText } from '@/components/ThemedText'

function ReferLearnCommunityLive() {
  const isDark = useColorScheme() === 'dark'

  const buttonsData = [
    {
      name: 'Refer & Earn',
      icon: <FontAwesome5 name="coins" size={24} color={isDark ? '#fff' : '#000'} />,
    },
    {
      name: 'Learn',
      icon: <FontAwesome name="graduation-cap" size={24} color={isDark ? '#fff' : '#000'} />,
    },
    { name: 'Community', icon: <Entypo name="chat" size={24} color={isDark ? '#fff' : '#000'} /> },
    { name: 'Live', icon: <Octicons name="stack" size={24} color={isDark ? '#fff' : '#000'} /> },
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

export default ReferLearnCommunityLive
