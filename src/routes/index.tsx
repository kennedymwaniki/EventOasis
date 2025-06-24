import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center mt-4">
      <h2 className="text-4xl font-serif">Welcome to event oasis</h2>
      <p className="text-2xl">
        Your one-stop solution for all event management needs.
        <br />
        <span className="font-semibold text-amber-400 font-serif uppercase">
          Where creativity meets technology.
        </span>
      </p>
    </div>
  )
}
