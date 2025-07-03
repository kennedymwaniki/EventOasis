import { Link } from '@tanstack/react-router'
import {
  Calendar,
  CreditCard,
  Home,
  Settings,
  Ticket,
  Users,
} from 'lucide-react'

const AdminSidenav = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 h-svh flex flex-col gap-4">
      <nav className="flex-1 p-4 space-y-4">
        <Link
          to="/admin"
          activeProps={{ className: 'bg-indigo-500/30 text-white' }}
          className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-500/30 hover:text-white rounded-lg transition-all duration-200"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Overview</span>
        </Link>

        <Link
          to="/admin/events"
          activeProps={{ className: 'bg-indigo-500/30 text-white' }}
          className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-500/30 hover:text-white rounded-lg transition-all duration-200"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-medium">Event Management</span>
        </Link>

        <Link
          to="/admin/users"
          activeProps={{ className: 'bg-indigo-500/30 text-white' }}
          className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-500/30 hover:text-white rounded-lg transition-all duration-200"
        >
          <Users className="w-5 h-5" />
          <span className="font-medium">User Management</span>
        </Link>

        {/* <Link
          to="/admin/payments"
          activeProps={{ className: 'bg-indigo-500/30 text-white' }}
          className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-500/30 hover:text-white rounded-lg transition-all duration-200"
        >
          <CreditCard className="w-5 h-5" />
          <span className="font-medium">Payments</span>
        </Link> */}

        <Link
          to="/admin/registeredEvents"
          activeProps={{ className: 'bg-indigo-500/30 text-white' }}
          className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-600/30 hover:text-white rounded-lg transition-all duration-200"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">event Registrations</span>
        </Link>
      </nav>

      <div className="p-4">
        <button className="flex items-center gap-3 px-4 py-3 text-indigo-100 hover:bg-indigo-700 hover:text-white rounded-lg transition-all duration-200 w-full">
          <Home className="w-5 h-5 rotate-180" />
          <span className="font-medium">Sign out</span>
        </button>
      </div>
    </div>
  )
}

export default AdminSidenav
