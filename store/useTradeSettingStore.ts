import { create } from 'zustand'

type State = {
  isAutoSlippage: boolean
  slippagePercentage: number
  isAutoYield: boolean
  setIsAutoSlippage: (isAutoSlippage: boolean) => void
  setSlippagePercentage: (slippagePercentage: number) => void
  setIsAutoYield: (isAutoYield: boolean) => void
}

const useTradeSettingStore = create<State>((set) => ({
  isAutoSlippage: false,
  slippagePercentage: 0,
  isAutoYield: false,
  setIsAutoSlippage: (isAutoSlippage) => set({ isAutoSlippage }),
  setSlippagePercentage: (slippagePercentage) => set({ slippagePercentage }),
  setIsAutoYield: (isAutoYield) => set({ isAutoYield }),
}))

export default useTradeSettingStore
