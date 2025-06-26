import { useQuery } from '@tanstack/react-query'
import { getEventsRegistrations } from '@/apis/eventRegistration'

export const useEventRegistration = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['eventRegistrations'],
    queryFn: getEventsRegistrations,
  })
  return {
    data,
    isLoading,
    error,
    refetch,
  }
}
