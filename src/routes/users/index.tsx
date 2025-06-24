import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4 text-indigo-600">
      <p>welcome to the users section</p>
      <p>
        Here we manage user profiles, settings, and other related
        functionalities.
      </p>
    </div>
  )
}
