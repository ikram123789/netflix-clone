import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero-section/hero'
import Cardpage from './components/cards/cardpage'
import More from './components/cards/more'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Cardpage/>
      <More/>
    </>
  )
}

export default App
