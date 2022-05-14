import './App.css';
import Navbar from './Components/Navbar';
import Banner from './assets/banner.png';
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple, FaChevronDown } from 'react-icons/fa'



function App() {
  return (
    <div className="App">
      {/* navbar component */}
      <Navbar />
      {/* banner */}
      <div className='banner' >
        <img src={Banner} alt="logo" />
      </div>
      {/* button container */}
      <div className='buttonContainer'>
        <motion.button
          whileHover={{
            scale: 1.07,
            transition: { duration: .5 }
          }}
          onClick={() => {
            console.log('Gplay-clicked')
          }}
          className='button'>
          <FaGooglePlay className='icon' />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.07,
            transition: { duration: .5 }
          }}
          onClick={() => {
            console.log('Apple-clicked')
          }}
          className='button'>
          <FaApple className='icon' />
        </motion.button>
      </div>
      {/* row container */}
      <div className="rowcontainer">
        <motion.div
          className='row'
          animate={{
            y : [0, 25, 0]
          }}
          transition={{
            repeat : Infinity,
            duration : 4,
            delay : 1
          }}
        >
          <FaChevronDown className='rowIcon'/> {/*row icon*/}
        </motion.div>
      </div>
    </div>

  );
}

export default App;



