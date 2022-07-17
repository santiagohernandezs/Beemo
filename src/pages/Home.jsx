import Navbar from '../Components/Navbar'
import { StartButton } from '../Components/StartButton'
import CardStatic from '../Components/cardStatic'

import { svg1, svg2, svg3, banner, beemoIcon, instagram, facebook, twitter } from '../assets/home'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

function Home () {
    return (
        <div className="App">
            {/* navbar component */}
            {/* <Routes>
                <Route path='/' element={}/>
            </Routes> */}
            <Navbar />
            {/* banner */}
            <div className="banner">
                <img src={banner} alt="logo" />
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
                        <img src={beemoIcon} alt="icon" />
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
                        <img src={instagram} alt="Instagram" />
                        <img src={facebook} alt="Facebook" />
                        <img src={twitter} alt="Twitter" />
                    </div>
                    <div className="DMCA">
                        <p>Santiago Hernandez 2022. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
