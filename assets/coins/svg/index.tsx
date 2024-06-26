import React from 'react'
import { View } from 'react-native'
import DogecoinSVG from '@/assets/coins/svg/dogecoinSVG'
import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import EthereumSVG from '@/assets/coins/svg/ethcoinSVG'

const coinComponents = {
  Bitcoin: BitcoinSVG,
  Ethereum: EthereumSVG,
  Dogecoin: DogecoinSVG,
}

interface CoinProps {
  type: string
  height?: number
  width?: number
}

const Coin: React.FC<CoinProps> = ({ type, height = 20, width = 20 }) => {
  const CoinSVG = coinComponents[type] || View
  return <CoinSVG height={height} width={width} />
}

export default Coin
