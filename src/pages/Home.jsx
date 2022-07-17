import Navbar from '../Components/Navbar'
import { StartButton } from '../Components/StartButton'
import CardStatic from '../Components/cardStatic'
import Footer from '../Components/footer'

import { svg1, svg2, svg3, banner } from '../assets/home'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

function Home () {
    return (
        <div className="App">
            {/* navbar component */}
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
            {/* about section */}
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
            {/* Footer component */}
            <Footer/>
        </div>
    )
}

export default Home
