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
    <div className="bg-slate-800 w-64 h-screen p-4">
      <nav className="space-y-2">
        <Link
          to="/admin"
          activeProps={{ className: 'bg-slate-700 text-amber-400' }}
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-amber-400 rounded-lg transition-all duration-200 group"
        >
          <Home className="w-5 h-5 text-amber-400" />
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          to="/admin/users"
          activeProps={{ className: 'bg-slate-700 text-amber-400' }}
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-amber-400 rounded-lg transition-all duration-200 group"
        >
          <Users className="w-5 h-5 text-amber-400" />
          <span className="font-medium">users</span>
        </Link>

        <Link
          to="/admin/tickets"
          activeProps={{ className: 'bg-slate-700 text-amber-400' }}
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-amber-400 rounded-lg transition-all duration-200 group"
        >
          <Ticket className="w-5 h-5 text-amber-400" />
          <span className="font-medium">Tickets</span>
        </Link>

        <Link
          to="/admin/events"
          activeProps={{ className: 'bg-slate-700 text-amber-400' }}
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-amber-400 rounded-lg transition-all duration-200 group"
        >
          <Calendar className="w-5 h-5 text-amber-400" />
          <span className="font-medium">Events</span>
        </Link>

        <Link
          to="/admin/settings"
          activeProps={{ className: 'bg-slate-700 text-amber-400' }}
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-amber-400 rounded-lg transition-all duration-200 group"
        >
          <Settings className="w-5 h-5 text-amber-400" />
          <span className="font-medium">Settings</span>
        </Link>

        <Link
          to="/admin/payments"
          activeProps={{ className: 'bg-slate-700 text-amber-400' }}
          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-amber-400 rounded-lg transition-all duration-200 group"
        >
          <CreditCard className="w-5 h-5 text-amber-400" />
          <span className="font-medium">Payments</span>
        </Link>
      </nav>
    </div>
  )
}

export default AdminSidenav
