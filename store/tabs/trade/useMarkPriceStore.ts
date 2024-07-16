import { create } from 'zustand'

type InfoData = {
  label: string
  value: string
}

type Store = {
  markPrice: string
  infoData: InfoData[]
  setMarkPrice: (newPrice: string) => void
  setInfoData: (newData: InfoData[]) => void
}

const useMarkPriceStore = create<Store>((set) => ({
  markPrice: '$0.00147',
  infoData: [
    { label: 'Maturity Date', value: '26 Apr' },
    { label: 'Strike Price', value: '0.22$' },
    { label: 'Vol Change', value: '0%' },
  ],
  setMarkPrice: (newPrice) => set({ markPrice: newPrice }),
  setInfoData: (newData) => set({ infoData: newData }),
}))

export default useMarkPriceStore
