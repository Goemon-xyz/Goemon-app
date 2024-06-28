import { create } from 'zustand'

type State = {
  isOpen: boolean
  balance: string
  change: string
  changePercentage: string
  toggleVisibility: () => void
  setBalance: (balance: string) => void
  setChange: (change: string) => void
  setChangePercentage: (changePercentage: string) => void
}

const useWalletStore = create<State>((set) => ({
  isOpen: true,
  balance: '163,22.12',
  change: '-123.23',
  changePercentage: '-1.23%',
  toggleVisibility: () => set((state) => ({ isOpen: !state.isOpen })),
  setBalance: (balance) => set({ balance }),
  setChange: (change) => set({ change }),
  setChangePercentage: (changePercentage) => set({ changePercentage }),
}))

export default useWalletStore
