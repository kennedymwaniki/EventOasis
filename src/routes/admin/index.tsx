import { createFileRoute } from '@tanstack/react-router'
import UsersStatsCard from '@/components/UsersStatsCard'
import EventsStatsCard from '@/components/EventsStatsCard'
import RegisteredEventsStatsCard from '@/components/RegisteredEventsStatsCard'

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-6">
      <div className="flex gap-4">
        <UsersStatsCard />
        <EventsStatsCard />
        <RegisteredEventsStatsCard />
      </div>
    </div>
  )
}
