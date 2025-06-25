import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">Welcome to the events section</h1>
      <p className="text-lg">Browse all upcoming events</p>
    </div>
  )
}
