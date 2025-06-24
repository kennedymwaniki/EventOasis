import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between shadow-lg h-16 items-center ">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>

        <div className="px-2 font-bold">
          <Link
            to="/demo/form/simple"
            activeProps={{ className: 'text-blue-500' }}
          >
            Simple Form
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link
            to="/demo/form/address"
            activeProps={{ className: 'text-blue-500' }}
          >
            Address Form
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/store" activeProps={{ className: 'text-blue-500' }}>
            Store
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/users" activeProps={{ className: 'text-blue-500' }}>
            Users
          </Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/events" activeProps={{ className: 'text-blue-500' }}>
            Events
          </Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/tickets" activeProps={{ className: 'text-blue-500' }}>
            Tickets
          </Link>
        </div>
      </nav>
    </header>
  )
}
