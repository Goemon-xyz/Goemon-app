import { create } from 'zustand'
import { COIN_ROW_DATA } from '@/constants/tabs/home/middle-tabs-scroll-section/index'

type Coin = {
  coinName: string
  coinFullName: string
  cardType: string
  lastPrize: number
  change: number
}

type State = {
  coins: Coin[]
  setCoins: (newCoins: Coin[]) => void
  updateCoin: (index: number, newCoin: Coin) => void
}

const useMiddleTabScrollStore = create<State>((set) => ({
  coins: COIN_ROW_DATA,
  setCoins: (newCoins) => set({ coins: newCoins }),
  updateCoin: (index, newCoin) =>
    set((state) => {
      const updatedCoins = [...state.coins]
      updatedCoins[index] = newCoin
      return { coins: updatedCoins }
    }),
}))

export default useMiddleTabScrollStore
