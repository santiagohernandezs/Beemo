import React from 'react';
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <navbar >
        <ul className='navlinks'>
            <motion.li 
            className='link'
            initial={{color:'#2E2B28'}}
            whileHover={{
              color : '#FFBE0B',
              transition : { duration : .1 }
            }}
            >Nosotros</motion.li>
            <motion.li 
            className='link'
            initial={{color:'#2E2B28'}}
            whileHover={{
              color : '#FFBE0B',
              transition : { duration : .1 }
            }}
            >Precios</motion.li>
            <motion.li 
            className='link'
            initial={{color:'#2E2B28'}}
            whileHover={{
              color : '#FFBE0B',
              transition : { duration : .1 }
            }}
            >Contacto</motion.li>
            <motion.li 
            className='link'
            initial={{color:'#2E2B28'}}
            whileHover={{
              color : '#FFBE0B',
              transition : { duration : .1 }
            }}
            >Registro</motion.li>
            <motion.li 
            className='link navbar-logIn'
            initial={{color:'#F8F5F2'}}
            whileHover={{
              color : '#FFBE0B',
              scale: 1.07,
              transition : { duration : .5 }
            }}
            >Entra</motion.li>
        </ul>
    </navbar>
  )
}

export default Navbar

