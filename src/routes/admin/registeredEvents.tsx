import { createFileRoute } from '@tanstack/react-router'
import RegisteredEventsTable from '@/components/RegisteredEventsTable'

export const Route = createFileRoute('/admin/registeredEvents')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <RegisteredEventsTable />
    </div>
  )
}
