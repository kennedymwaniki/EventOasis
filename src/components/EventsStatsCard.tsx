import { Calendar } from 'lucide-react'
import { useEvents } from '@/hooks/useEvents'

const EventsStatsCard = () => {
  const { events, isLoading, error } = useEvents()

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              Total Events
            </p>
            <p className="text-3xl font-bold text-gray-900">Loading...</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Calendar className="text-blue-600 text-xl" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              Total events
            </p>
            <p className="text-xl font-bold text-red-600">Error</p>
            <p className="text-xs text-red-500 mt-1">Failed to load</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <Calendar className="text-red-600 text-xl" />
          </div>
        </div>
      </div>
    )
  }

  const totalEvents = events?.meta.totalItems || 0
  const currentPageEvents = events?.meta.itemsPerPage || 0

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Total Events</p>
          <p className="text-3xl font-bold text-gray-900">{totalEvents}</p>
          <p className="text-xs text-gray-500 mt-1">
            {currentPageEvents} on current page
          </p>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">
          <Calendar className="text-blue-600 text-xl" />
        </div>
      </div>
    </div>
  )
}

export default EventsStatsCard
