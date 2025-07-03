// import { ref } from 'process'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { deleteUser, getUser, getUsers } from '@/apis/usersApi'

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

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const {
    isPending,
    error,
    mutate: removeUser,
  } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success('User deleted successfully', {
        position: 'top-right',
      })
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: () => {
      toast.error(`Error deleting user`)
    },
  })
  return {
    isPending,
    error,
    removeUser,
  }
}
