import api from './axios'

export const getTickets = async () => {
  const response = await api.get('/tickets')
  return response.data
}
export const getticket = async (ticketId: number) => {
  const response = await api.get(`/tickets/${ticketId}`)
  return response.data
}
export const createticket = async (data: any) => {
  const response = await api.post('/tickets', data)
  return response.data
}
