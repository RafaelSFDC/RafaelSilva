import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects';
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
