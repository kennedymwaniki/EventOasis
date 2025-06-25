import { Link } from '@tanstack/react-router'
import { CalendarCog } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className=" flex-shrink-0 flex items-center text-2xl font-bold text-amber-600 hover:text-gray-700 transition-colors"
            >
              <CalendarCog className="h-8 w-8 text-amber-600 " />
              EventOasis
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/events"
              className="text-gray-700 hover:text-amber-400 font-medium transition-colors"
              activeProps={{ className: 'text-blue-600' }}
            >
              Events
            </Link>
            <Link
              to="/users"
              className="text-gray-700 hover:text-amber-400 font-medium transition-colors"
              activeProps={{ className: 'text-amber-600' }}
            >
              Users
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-amber-400 font-medium transition-colors"
              activeProps={{ className: 'text-amber-600' }}
            >
              Categories
            </Link>
            <Link
              to="/tickets"
              className="text-gray-700 hover:text-amber-400 font-medium transition-colors"
              activeProps={{ className: 'text-amber-600' }}
            >
              Tickets
            </Link>
            <Link
              to="/admin"
              className="text-gray-700 hover:text-amber-400 font-medium transition-colors"
              activeProps={{ className: 'text-amber-600' }}
            >
              Admin
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center text-gray-700 hover:text-amber-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-amber-900 font-medium transition-colors px-2 py-1"
                activeProps={{ className: 'text-blue-600' }}
              >
                Home
              </Link>
              <Link
                to="/users"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-amber-900 font-medium transition-colors px-2 py-1"
                activeProps={{ className: 'text-blue-600' }}
              >
                Users
              </Link>
              <Link
                to="/categories"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-amber-900 font-medium transition-colors px-2 py-1"
                activeProps={{ className: 'text-blue-600' }}
              >
                Categories
              </Link>
              <Link
                to="/tickets"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-amber-900 font-medium transition-colors px-2 py-1"
                activeProps={{ className: 'text-blue-600' }}
              >
                Tickets
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-amber-900 font-medium transition-colors px-2 py-1"
                activeProps={{ className: 'text-blue-600' }}
              >
                Login
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="border-t border-gray-200 pt-3 mt-3 space-y-3">
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-gray-900 font-medium transition-colors text-center px-4 py-2"
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
