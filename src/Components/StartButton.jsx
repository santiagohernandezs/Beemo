import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

export const StartButton = (props) => {
    const title = props.title
    return (
        <motion.button
            initial = {{ color: '#2E2B28' }}
            whileHover = {{
                scale: 1.07,
                color: '#FFBE0B',
                transition: { duration: 0.5 }
            }}
            style={startButton}
        ><p>{title}</p>
            <FaChevronRight/>
        </motion.button>
    )
}

StartButton.propTypes = {
    title: PropTypes.string
}

const startButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    border: 'none',
    width: '200px',
    height: '52px',
    fontSize: 'large',
    fontFamily: 'Raleway',
    fontWeight: 'bolder',
    borderRadius: '15px',
    boxShadow: '4px 4px 3px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#FFFFFE',
    color: '#2E2B28',
    gap: '5%',
    cursor: 'pointer'
}
