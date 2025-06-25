import { AuroraText } from '@/components/magicui/aurora-text'

const HeroSection = () => {
  return (
    <div
      className="image bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop')`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center">
        <h2 className="text-6xl font-serif text-white gap-4">
          Welcome to event
          <span className="ml-2">
            <AuroraText>Event Oasis</AuroraText>
          </span>
        </h2>
        <p className="text-2xl text-white uppercase font-bold font-serif">
          Discover and Book Amazing Events
        </p>
      </div>
    </div>
  )
}

export default HeroSection
