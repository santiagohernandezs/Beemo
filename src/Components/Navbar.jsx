import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <navbar >
            <ul className='navlinks'>
                <Link className='link' to='/'>
                    <motion.li
                        initial={{ color: '#2E2B28' }}
                        whileHover={{
                            color: '#FFBE0B',
                            transition: { duration: 0.1 }
                        }}
                    >Home</motion.li>
                </Link>
                <Link className='link' to='/Nosotros'>
                    <motion.li
                        initial={{ color: '#2E2B28' }}
                        whileHover={{
                            color: '#FFBE0B',
                            transition: { duration: 0.1 }
                        }}
                    >Nosotros</motion.li>
                </Link>
                <Link className='link' to="/Precios">
                    <motion.li
                        initial={{ color: '#2E2B28' }}
                        whileHover={{
                            color: '#FFBE0B',
                            transition: { duration: 0.1 }
                        }}
                    >Precios</motion.li>
                </Link>
                <Link className='link' to='/Contacto'>
                    <motion.li
                        initial={{ color: '#2E2B28' }}
                        whileHover={{
                            color: '#FFBE0B',
                            transition: { duration: 0.1 }
                        }}
                    >Contacto</motion.li>
                </Link>
                <Link className='link' to='/Registrate'>
                    <motion.li
                        initial={{ color: '#2E2B28' }}
                        whileHover={{
                            color: '#FFBE0B',
                            transition: { duration: 0.1 }
                        }}
                    >Registrate</motion.li>
                </Link>
                <Link className='link navbar-logIn' to='/Entrar'>
                    <motion.li
                        className='navbar-logIn'
                        initial={{ color: '#F8F5F2' }}
                        whileHover={{
                            color: '#FFBE0B',
                            scale: 1.07,
                            transition: { duration: 0.5 }
                        }}
                    >Entrar</motion.li>
                </Link>
            </ul>
        </navbar>
    )
}

export default Navbar
