import { create } from 'zustand'

const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 18)
}

type State = {
  isLoggedIn: boolean
  userId: string
  logIn: () => void
  logOut: () => void
}

const useStore = create<State>((set) => ({
  isLoggedIn: false,
  userId: '0'.repeat(16),
  logIn: () => set({ isLoggedIn: true, userId: generateRandomId() }),
  logOut: () => set({ isLoggedIn: false, userId: '0'.repeat(16) }),
}))

export default useStore
