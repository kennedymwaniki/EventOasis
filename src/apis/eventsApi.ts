import api from './axios'
import type { EventResponse, PaginatedEventsResponse } from '@/types/types'

export const getEvents = async () => {
  const response = await api.get<PaginatedEventsResponse>('/events')
  return response.data
}
export const getEvent = async (eventId: number) => {
  const response = await api.get<EventResponse>(`/events/${eventId}`)
  return response.data
}
export const createEvent = async (data: any) => {
  const response = await api.post<Event>('/events', data)
  return response.data
}
