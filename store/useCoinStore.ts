import { create } from 'zustand'
import { CoinData } from '@/types/tabs/home/history-hot-section/types'

interface CoinStoreState {
  history: CoinData[]
  hot: CoinData[]
  setHistory: (history: CoinData[]) => void
  setHot: (hot: CoinData[]) => void
}

const useCoinStore = create<CoinStoreState>((set) => ({
  history: [],
  hot: [],
  setHistory: (history) => set({ history }),
  setHot: (hot) => set({ hot }),
}))

export default useCoinStore
