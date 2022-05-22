import './App.css'
import Navbar from './Components/Navbar'
import Banner from './assets/banner.png'
import svg1 from '../src/assets/1.svg'
import svg2 from '../src/assets/2.svg'
import svg3 from '../src/assets/3.svg'
import { StartButton } from './Components/StartButton'
import Card from './Components/card'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

function App () {
  return (
    <div className="App">
      {/* navbar component */}
      <Navbar />
      {/* banner */}
      <div className="banner">
        <img src={Banner} alt="logo" />
      </div>
      {/* button container */}
      <div className="buttonContainer">
        <StartButton />
      </div>
      {/* row container */}
      <div className="rowcontainer">
        <motion.div
          className="row"
          animate={{
            y: [0, 25, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: 1
          }}
        >
          <FaChevronDown className="rowIcon" /> {/* row icon */}
        </motion.div>
      </div>
      <div className="about">
        <div className="textcontainer">
          <div className="aboutTitle">
            <h1>Nuestra Oferta</h1>
          </div>
        </div>
        <div className="cards">
          <div className="cardscontainer">
            <Card
            header='Lorem'
            svg = {svg1}
            p = 'Hola soy un parrafo'
            />
            <Card
            header='Lorem 2'
            svg = {svg2}
            p = 'Hola soy un parrafo'
            />
            <Card
            header='Lorem 3'
            svg = {svg3}
            p = 'Hola soy un parrafo'
            />
          </div>
        </div>
        <div className="startButtonContainer">
          <StartButton />
        </div>
      </div>
      <div className="misionContainer">
          <div className="misionTitle">
            <h1>Title</h1>
          </div>
          <div className="misionp">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, magnam!</p>
          </div>
        </div>
    </div>
  )
}

export default App
