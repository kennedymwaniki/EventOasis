import { Monitor, Music, Ticket, Users } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/')({
  component: RouteComponent,
})

const categories = [
  {
    name: 'Music',
    events: 156,
    icon: Music,
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    btn: 'text-purple-600 border-purple-600',
  },
  {
    name: 'Sports',
    events: 89,
    icon: Users,
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    btn: 'text-blue-600 border-blue-600',
  },
  {
    name: 'Theater',
    events: 64,
    icon: Ticket,
    bg: 'bg-pink-100',
    text: 'text-pink-600',
    btn: 'bg-indigo-600 text-white',
    active: true,
  },
  {
    name: 'Technology',
    events: 42,
    icon: Monitor,
    bg: 'bg-green-100',
    text: 'text-green-600',
    btn: 'text-green-600 border-green-600',
  },
]

function RouteComponent() {
  return (
    <div className="p-6 bg-fuchsia-50 min-h-screen">
      <h2 className="text-indigo-900 ml-4 text-2xl font-bold">
        Event Categories
      </h2>

      <p className="text-gray-700 ml-4 mt-2 mb-6">
        Explore various categories of events to find what interests you the
        most.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <div
              key={cat.name}
              className={`${cat.bg} rounded-lg p-6 flex flex-col justify-between shadow-sm transition-transform transform hover:scale-105`}
            >
              <div className="flex flex-col items-center">
                <Icon className={`h-10 w-10 mb-4 ${cat.text}`} />
                <p className={`text-lg font-semibold ${cat.text}`}>
                  {cat.name}
                </p>
                <p className="text-gray-600">{cat.events} events</p>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  className={`rounded-md px-6 py-2 text-sm font-semibold border transition-colors duration-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 ${
                    cat.active ? cat.btn : cat.btn
                  }`}
                >
                  Browse Events
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
