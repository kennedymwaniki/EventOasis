import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import { EventResponse, type Event } from '@/types/types'
import type { PaginatedEventsResponse } from '@/types/types'
import { createEvent, getEvent, getEvents } from '@/apis/eventsApi'

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

export const useCreateEvents = () => {
  const queryClient = useQueryClient()
  const {
    mutate: createevent,
    isPending,
    error,
  } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
      console.log('Event created successfully')
    },
    onError: () => {
      console.error('Error creating event')
    },
  })
  return {
    createevent,
    isPending,
    error,
  }
}
