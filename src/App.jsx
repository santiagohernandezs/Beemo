import './App.css'
import Navbar from './Components/Navbar'
import Banner from './assets/banner.png'
import svg1 from '../src/assets/1.svg'
import svg2 from '../src/assets/2.svg'
import svg3 from '../src/assets/3.svg'
import BeemoIcon from './assets/BeemoIcon.svg'
import { StartButton } from './Components/StartButton'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Instagram from './assets/instagram.svg'
import Facebook from './assets/facebook.svg'
import Twitter from './assets/twitter.svg'
import CardStatic from './Components/cardStatic'

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
                <StartButton
                    title = 'Comenzar Ahora'
                />
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
                        delay: 1,
                        duration: 4
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
                        <CardStatic
                            title='Lorem'
                            img = {svg1}
                            content = 'Hola soy un parrafo'
                        />
                        <CardStatic
                            title='Lorem 2'
                            img = {svg2}
                            content = 'Hola soy un parrafo'
                        />
                        <CardStatic
                            title='Lorem 3'
                            img = {svg3}
                            content = 'Hola soy un parrafo'
                        />
                    </div>
                </div>
                <div className="startButtonContainer">
                    <StartButton
                        title={'Comenzar Ahora'}
                    />
                </div>
            </div>
            <footer>
                <div className='footerContainer'>
                    <div className='iconContainer'>
                        <img src={BeemoIcon} alt="icon" />
                    </div>
                    <div className="footerNavbarContainer">
                        <ul className='footerNavbar'>
                            <li className='footerNavbarItem'>Nosotros</li>
                            <li className='footerNavbarItem'>Precios</li>
                            <li className='footerNavbarItem'>Contacto</li>
                            <li className='footerNavbarItem'>Registrate</li>
                            <li className='footerNavbarItem'>Entrar</li>
                        </ul>
                    </div>
                    <div className='socialContainer'>
                        <img src={Instagram} alt="Instagram" />
                        <img src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                    </div>
                    <div className="DMCA">
                        <p>Santiago Hernandez 2022. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
