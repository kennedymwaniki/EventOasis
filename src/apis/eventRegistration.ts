import api from './axios'
import type { EventRegistration } from '@/types/types'

export const getEventsRegistrations = async () => {
  const response = await api.get<Array<EventRegistration>>(
    '/eventsRegistration',
  )
  return response.data
}
export const getEventRegistration = async (eventId: number) => {
  const response = await api.get<EventRegistration>(
    `/eventsRegistration/${eventId}`,
  )
  return response.data
}
export const createEventRegistration = async (data: any) => {
  const response = await api.post('/eventsRegistration', data)
  return response.data
}
export const updateEventRegistration = async (eventId: number, data: any) => {
  const response = await api.put(`/eventsRegistration/${eventId}`, data)
  return response.data
}
