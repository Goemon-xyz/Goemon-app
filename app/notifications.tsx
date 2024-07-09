import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import {  CustomTheme } from '@/constants/Colors'

// Todo: use FlashList here

interface Notification {
  id: string
  type: 'withdraw' | 'unlock' | 'open' | 'close' | 'deposit'
  title: string
  description: string
  time: string
  details?: {
    coin?: string
    date?: string
    size?: string
    type?: string
    pnl?: string
  }
}

const NotificationsScreen: React.FC = () => {
  const router = useRouter()
  const { colors } = useTheme() as CustomTheme

  const notifications: Notification[] = [
    {
      id: '1',
      type: 'withdraw',
      title: 'Withdraw Complete',
      description: '2 ETH is now completed withdraw',
      time: '12mins ago',
    },
    {
      id: '2',
      type: 'unlock',
      title: 'Unlock Complete',
      description: '2 ETH is now available for withdrawal',
      time: '30mins ago',
    },
    {
      id: '3',
      type: 'open',
      title: 'Open position',
      description: 'DOGE: 25Dec24-1900-C',
      time: '1month ago',
      details: {
        coin: 'DOGE',
        date: '25Dec24-1900-C',
        size: '11.23',
        type: 'Option',
      },
    },
    {
      id: '4',
      type: 'close',
      title: 'Close position',
      description: 'DOGE: 26Apr24-0.22-C',
      time: '3month ago',
      details: {
        coin: 'DOGE',
        date: '26Apr24-0.22-C',
        size: '2.5000,000',
        type: '0-Loss',
        pnl: '+2,020$',
      },
    },
    {
      id: '5',
      type: 'open',
      title: 'Open position',
      description: 'DOGE: 26Apr24-0.22-C',
      time: '4month ago',
      details: {
        coin: 'DOGE',
        date: '26Apr24-0.22-C',
        size: '2.5000,000',
        type: '0-Loss',
      },
    },
    {
      id: '6',
      type: 'deposit',
      title: 'Deposit Complete',
      description: '2500 USDC is now available for trading',
      time: '10month ago',
    },
  ]

  const renderNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'withdraw':
      case 'deposit':
        return <Ionicons name="arrow-down-outline" size={24} color={colors.icon} />
      case 'unlock':
        return <Ionicons name="lock-open-outline" size={24} color={colors.icon} />
      case 'open':
      case 'close':
        return (
          <View
            style={[styles.coinIcon, { backgroundColor: type === 'open' ? '#4CAF50' : '#FFA000' }]}
          >
            <Text style={styles.coinIconText}>D</Text>
          </View>
        )
      default:
        return null
    }
  }

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationIcon}>{renderNotificationIcon(item.type)}</View>
      <View style={styles.notificationContent}>
        <Text style={[styles.notificationTitle, { color: colors.text }]}>{item.title}</Text>
        <Text style={[styles.notificationDescription, { color: colors.text }]}>
          {item.description}
        </Text>
        {item.details && (
          <View style={styles.detailsContainer}>
            <Text style={[styles.detailText, { color: colors.text }]}>
              Size: {item.details.size}
            </Text>
            <View style={styles.tagContainer}>
              <Text style={[styles.tagText, { color: colors.primary }]}>{item.details.type}</Text>
            </View>
            {item.details.pnl && (
              <Text style={[styles.pnlText, { color: '#4CAF50' }]}>{item.details.pnl}</Text>
            )}
          </View>
        )}
      </View>
      <Text style={[styles.notificationTime, { color: colors.text }]}>{item.time}</Text>
    </View>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },

  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  coinIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinIconText: {
    color: 'white',
    fontWeight: 'bold',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    opacity: 0.6,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  detailText: {
    fontSize: 12,
    marginRight: 8,
  },
  tagContainer: {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  tagText: {
    fontSize: 12,
  },
  pnlText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },
})

export default NotificationsScreen
