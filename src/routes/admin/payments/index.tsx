import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/payments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/payments/"!</div>
}
