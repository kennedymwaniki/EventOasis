import api from './axios'
import type { PaginatedPaymentsResponse } from '@/types/types'

export const getPayments = async () => {
  const response = await api.get<PaginatedPaymentsResponse>('/payments')
  return response.data
}
export const getPayment = async (paymentId: number) => {
  const response = await api.get<PaymentResponse>(`/payments/${paymentId}`)
  return response.data
}
export const createPayment = async (data: any) => {
  const response = await api.post('/payments', data)
  return response.data
}
