import { useQuery } from '@tanstack/react-query'
import type { PaginatedPaymentsResponse } from '@/types/types'
import { getPayments } from '@/apis/paymentsApi'

export const usePayments = () => {
  const { data, isLoading, isError, error } =
    useQuery<PaginatedPaymentsResponse>({
      queryKey: ['payments'],
      queryFn: () => getPayments(),
    })
  return { payments: data, isLoading, isError, error }
}
