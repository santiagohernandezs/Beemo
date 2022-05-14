import React from 'react';
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <navbar >
        <ul className='navlinks'>
            <motion.li 
            className='link'
            whileHover={{
              color : '#FFBE0B',
              transition : { duration : .1 }
            }}
            >Nosotros</motion.li>
            <motion.li 
            className='link'
            whileHover={{
              color : '#FFBE0B',
              transition : { duration : .1 }
            }}
            >Precios</motion.li>
            <motion.li 
            className='link'
            whileHover={{
              color : '#FFBE0B',
              transition : { duration : .1 }
            }}
            >Contacto</motion.li>
        </ul>
    </navbar>
  )
}

export default Navbar

