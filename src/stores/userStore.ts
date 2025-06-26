import { create } from 'zustand'
import { useUsers } from '@/hooks/useUsers'

export const useUsersStore = create((set) => ({
  users: null,
  fetchUser: () => {
    const { users, error } = useUsers()
    if (error) {
      console.error('Failed to fetch user:', error)
      return
    }
    set({ users })
  },
  clearUser: () => set({ users: null }),
}))
