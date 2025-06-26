import { createFileRoute } from '@tanstack/react-router'
import { useEvents } from '@/hooks/useEvents'

export const Route = createFileRoute('/admin/events')({
  component: RouteComponent,
})

function RouteComponent() {
  const { events, error, isLoading } = useEvents()
  console.log('Events:', events)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )
  }
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    )
  }

  if (!events?.data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        No events available
      </div>
    )
  }
  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.data.map((event) => (
        <div
          key={event.id}
          className="border p-4 bg-sgray-399/20 mb-2 rounded-lg m-4"
        >
          <h2 className="text-lg font-semibold">{event.event_name}</h2>
          <p>{event.event_description}</p>
          <p>{event.event_date}</p>
          <p>{event.event_location}</p>
        </div>
      ))}
    </div>
  )
}
