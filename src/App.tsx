import './App.css'
import { Business } from './components/Business/Business'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { InfoBlock } from './components/InfoBlock/InfoBlock'
import { News } from './components/News/News'
import { Slider } from './components/Slider/Slider'
import { SuccessStory } from './components/SuccessStory/SuccessStory'
import { Training } from './components/Training/Training'

function App() {

  const isMobile = window.innerWidth < 464

  return (
    <>
      <Header isMobile={isMobile}/>
      <main>
        <Slider />
        <InfoBlock />
        <SuccessStory />
        <Business isMobile={isMobile}/>
        <Training />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default App
