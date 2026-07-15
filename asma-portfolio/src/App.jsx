import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgressBar from './components/ScrollProgressBar'
import ScrollToTopButton from './components/ScrollToTopButton'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader visible={loading} />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
