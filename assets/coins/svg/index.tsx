import React from 'react'
import { View } from 'react-native'
import DogecoinSVG from './dogecoinSVG'
import BitcoinSVG from './bitcoinSVG'
import EthereumSVG from './ethcoinSVG'

interface CoinPropsTypes {
  type: string
  height: number
  width: number
}

function Coin({ type, height, width }: CoinPropsTypes) {
  let CoinSVG
  switch (type) {
    case 'Bitcoin':
      CoinSVG = BitcoinSVG
      break
    case 'Ethereum':
      CoinSVG = EthereumSVG
      break
    case 'Dogecoin':
      CoinSVG = DogecoinSVG
      break
    default:
      CoinSVG = View
  }

  return <CoinSVG height={height} width={width} />
}

export default Coin
