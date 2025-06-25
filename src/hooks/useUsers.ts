import { useQuery } from '@tanstack/react-query'
import { getUser, getUsers } from '@/apis/usersApi'

export const useUsers = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return {
    users,
    isLoading,
    error,
  }
}

export const useUserById = (userId: number) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
  })
  return {
    user,
    isLoading,
    error,
  }
}
