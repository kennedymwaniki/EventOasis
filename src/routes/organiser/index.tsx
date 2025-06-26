import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organiser/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/organiser/"!</div>
}
