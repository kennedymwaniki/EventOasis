import { createFileRoute } from '@tanstack/react-router'
// import logo from '../logo.svg'
import HeroSection from '@/components/HeroSection'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center items-center">
      <HeroSection />
    </div>
  )
}
