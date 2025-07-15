import About from './components/About'
import Feature from './components/Feature'
import { Hero } from './components/Hero'
import NavBar from './components/NavBar'
import './index.css'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Feature />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
