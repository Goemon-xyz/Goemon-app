import React from 'react'
import { View, StyleSheet, useColorScheme } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemedText } from '@/components/ThemedText'
import { Link } from 'expo-router'
import usUserStore from '@/store/useUserStore'

function TopNavBar() {
  const isDark = useColorScheme() === 'dark'
  const { userId } = usUserStore((state) => ({
    userId: state.userId,
  }))

  const leftButtons = [
    {
      name: 'settings-outline',
      icon: <Icon name="settings-outline" size={26} color={isDark ? '#fff' : '#000'} />,
      link: '/settings',
      isLink: true,
    },
    {
      name: 'notifications-none',
      icon: <MaterialIcons name="notifications-none" size={26} color={isDark ? '#fff' : '#000'} />,
      isLink: false,
    },
  ]

  return (
    <View style={[styles.container, isDark ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.leftSection}>
        {leftButtons.map((button, index) => (
          <TouchableOpacity key={index}>
            {button.isLink && button.link ? (
              <Link href={button.link}>{button.icon}</Link>
            ) : (
              button.icon
            )}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.rightSection}>
        <ThemedText style={isDark ? styles.darkText : styles.lightText}>{userId}</ThemedText>
        <FontAwesome6 name="angle-down" size={20} color={isDark ? '#fff' : '#000'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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

export default TopNavBar
