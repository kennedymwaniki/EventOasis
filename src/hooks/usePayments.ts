import { useQuery } from '@tanstack/react-query'
import type { Payment } from '@/types/types'
import { getPayments } from '@/apis/paymentsApi'

export const usePayments = () => {
  const { data, isLoading, isError, error } = useQuery<Array<Payment>>({
    queryKey: ['payments'],
    queryFn: () => getPayments(),
  })
  return { payments: data, isLoading, isError, error }
}
