// components/trade/sampleData.ts
import { Position, OpenOrder, OrderHistory } from './types'

export const positionItems: Position[] = [
  { id: '1', position: 'Position 1', amount: 100, price: 50 },
  { id: '2', position: 'Position 2', amount: 200, price: 150 },
  // Add more sample data as needed
]

export const openOrderItems: OpenOrder[] = [
  { id: '1', orderId: 'Order 1', symbol: 'BTC/USD', quantity: 1 },
  { id: '2', orderId: 'Order 2', symbol: 'ETH/USD', quantity: 5 },
  // Add more sample data as needed
]

export const orderHistoryItems: OrderHistory[] = [
  { id: '1', orderId: 'Order 1', date: '2023-08-01', status: 'Completed' },
  { id: '2', orderId: 'Order 2', date: '2023-08-02', status: 'Cancelled' },
  // Add more sample data as needed
]
