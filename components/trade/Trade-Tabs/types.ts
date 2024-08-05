// components/trade/types.ts
export interface Position {
  id: string
  position: string
  amount: number
  price: number
}

export interface OpenOrder {
  id: string
  orderId: string
  symbol: string
  quantity: number
}

export interface OrderHistory {
  id: string
  orderId: string
  date: string
  status: string
}
