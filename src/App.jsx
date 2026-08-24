import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import PlanetSection from './components/PlanetSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <VideoSection />
        <PlanetSection />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App