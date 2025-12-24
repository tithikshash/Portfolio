import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Music from './components/Music'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CrystalCursor from './components/CrystalCursor'

function App() {
  return (
    <>
      <Navbar />
      {/* <CrystalCursor/> */}
      <Hero />
      <About />
      <Education />
      <Achievements />
      <Music />
      <Contact />
      <Footer />
    </>
  )
}

export default App