import { useQuery } from '@tanstack/react-query'
// import { EventResponse, type Event } from '@/types/types'
import type { PaginatedEventsResponse } from '@/types/types'
import { getEvent, getEvents } from '@/apis/eventsApi'

export const useEvents = () => {
  const {
    data: events,
    error,
    isLoading,
  } = useQuery<PaginatedEventsResponse>({
    queryKey: ['events'],
    queryFn: getEvents,
  })

  return {
    events,
    isLoading,
    error,
  }
}

export const useEventById = (eventId: number) => {
  const {
    data: event,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['event', eventId],
    queryFn: () => getEvent(eventId),
  })
  return {
    event,
    isLoading,
    error,
  }
}
