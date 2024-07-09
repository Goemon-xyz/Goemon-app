import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface MaturityCardProps {
  coinSVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  coinType: string
  platform: string
  percentage: string
}

const MaturityCard: React.FC<MaturityCardProps> = ({
  coinSVG: CoinSVG,
  coinType,
  platform,
  percentage,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
        <View style={styles.row}>
          <CoinSVG height={20} width={20} />
          <ThemedText style={{ fontSize: 12 }}>{coinType}</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.text}>{platform}</ThemedText>
          <Text style={[{ color: 'rgba(107, 107, 107, 1)' }, styles.text]}>|</Text>
          <Text style={[{ color: 'rgba(45, 168, 206, 1)' }, styles.text]}>{percentage}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 110,
    backgroundColor: 'rgba(31, 31, 31, 1)',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
  },
})

export default MaturityCard
