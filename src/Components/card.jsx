import { motion } from 'framer-motion'

const card = (props) => {
  return (
    <motion.div className="card"
    style={cardStyle}
    whileHover={{
      scale: 1.07,
      transition: { duration: 0.5 }
    }}
    >
        <div className="cardTitleContainer"
        style={cardTitleContainer}
        >
            <h1>{props.header}</h1>
        </div>
        <div className="cardImageContainer"
        style={cardImageContainer}
        >
            <img src={props.svg} alt='svg'/>
        </div>
        <div className="cardParagraphContainer"
        style={cardParagraphContainer}
        >
            <p>{props.p}</p>
        </div>
    </motion.div>
  )
}

export default card

const cardStyle = {
  backgroundColor: '#FFFFFE',
  width: '455px',
  height: '406px',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column'
}

const cardTitleContainer = {
  fontFamily: 'Raleway, sans-serif',
  color: '#2E2B28',
  padding: '5%',
  display: 'flex',
  justifyContent: 'center'
}

const cardImageContainer = {
  height: '43%',
  display: 'flex',
  justifyContent: 'center'
}

const cardParagraphContainer = {
  fontFamily: 'Raleway, sans-serif',
  color: '#2E2B28',
  padding: '5%',
  display: 'flex',
  fontWeight: 'bold',
  justifyContent: 'center',
  textAlign: 'justify'
}
