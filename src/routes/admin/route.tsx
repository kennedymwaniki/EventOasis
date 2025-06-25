import { Outlet, createFileRoute } from '@tanstack/react-router'
import AdminSidenav from '@/components/AdminSidenav'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex">
      <div>
        <AdminSidenav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
