import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/tickets')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/tickets"!</div>
}
