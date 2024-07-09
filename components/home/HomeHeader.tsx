import { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { useRouter } from 'expo-router'

import IconButton from '@/components/IconButton'
import { Colors } from '@/constants/Colors'

const HomeScreenHeader: FC = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  return (
    <View style={styles.header}>
      <View style={styles.headerIcons}>
        <IconButton
          type="Ionicons"
          name="settings-outline"
          color={theme.text}
          onPress={() => {
            router.push('/settings')
          }}
        />
        <IconButton
          type="Ionicons"
          name="notifications-outline"
          color={theme.text}
          onPress={() => {
            router.push('/notifications')
          }}
        />
      </View>

      <TouchableOpacity style={styles.addressButton}>
        <Text style={[styles.addressText, { color: theme.text }]}>0x3f4...0f90</Text>
        <IconButton
          type="Ionicons"
          name="chevron-down"
          size={16}
          color={theme.text}
          onPress={() => console.log('Address dropdown pressed')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addressButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    marginRight: 5,
  },
})

export default HomeScreenHeader
