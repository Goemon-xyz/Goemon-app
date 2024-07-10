import { HotItem, TopItem, OptionsItem } from './types'

export const topItems: TopItem[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$43,214.18',
    change: '+5.25%',
    iconUrl: 'https://example.com/btc.png',
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$1,649.18',
    change: '+5.25%',
    iconUrl: 'https://example.com/eth.png',
  },
]

export const hotItems: HotItem[] = [
  {
    id: '1',
    symbol: 'BTC',
    date: '26Apr24-6.50-C',
    leverage: '0.40X',
    type: '0-Loss',
    volume: '250K$',
    iconUrl: 'https://example.com/pendle.png',
  },
  {
    id: '2',
    symbol: 'ETH',
    date: '26Jun24-6.50-C',
    leverage: '0.71X',
    type: '0-Loss',
    volume: '185K$',
    iconUrl: 'https://example.com/pendle.png',
  },
]

export const optionsItems: OptionsItem[] = [
  {
    id: '1',
    symbol: 'BTC',
    date: '26Apr24-6.50-C',
    leverage: '0.40X',
    type: '0-Loss',
    volume: '250K$',
    iconUrl: 'https://example.com/pendle.png',
  },
  {
    id: '2',
    symbol: 'ETH',
    date: '26Jun24-6.50-C',
    leverage: '0.71X',
    type: '0-Loss',
    volume: '185K$',
    iconUrl: 'https://example.com/pendle.png',
  },
]
