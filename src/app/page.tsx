import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BuildingSection from '@/components/BuildingSection'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { buildings } from '@/data'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero />
        {buildings.map((building, i) => (
          <div key={building.id} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
            <BuildingSection building={building} />
          </div>
        ))}
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
