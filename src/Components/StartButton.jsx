import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'

export const StartButton = () => {
  return (
      <motion.button
        initial={{ color: '#2E2B28' }}
        whileHover={{
          scale: 1.07,
          color: '#FFBE0B',
          transition: { duration: 0.5 }
        }}
        className='StartButton'
        onClick={() => {
          console.log('Comenzar ahora')
        }}

        ><p>Comenzar Ahora</p>
        <FaChevronRight/>
      </motion.button>
  )
}
