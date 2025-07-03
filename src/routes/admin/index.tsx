import { createFileRoute } from '@tanstack/react-router'
import UsersStatsCard from '@/components/UsersStatsCard'
import EventsStatsCard from '@/components/EventsStatsCard'
import RegisteredEventsStatsCard from '@/components/RegisteredEventsStatsCard'
import PaymentStatCard from '@/components/PaymentsStatsCard'
import UsersTable from '@/components/UsersTable'

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-clip">
        <UsersStatsCard />
        <EventsStatsCard />
        <RegisteredEventsStatsCard />
        <PaymentStatCard />
      </div>

      <div>
        <UsersTable />
      </div>
    </div>
  )
}
