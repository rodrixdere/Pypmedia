import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import HorizontalCards from './components/sections/HorizontalCards'
import Features from './components/sections/Features'
import Contact from './components/sections/Contact'
import MisionVision from './components/sections/MisionVision'

export default function App() {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-primary)' }}>
      <Navbar />
      <main>
        <Hero />
        <HorizontalCards />
        <Features />
        <MisionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
