import PropTypes from 'prop-types'

export const cardStatic = props => {
    const title = props.title
    const img = props.img
    const content = props.content
    return (
        <div
            className="card"
            style={cardStyle}
        >
            <div className="cardTitleContainer"
                style={cardTitleContainer}
            >
                <h1>{title}</h1>
            </div>
            <div className="cardImageContainer"
                style={cardImageContainer}
            >
                <img src={img} alt='svg'/>
            </div>
            <div className="cardParagraphContainer"
                style={cardParagraphContainer}
            >
                <p>{content}</p>
            </div>
        </div>
    )
}

export default cardStatic

cardStatic.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    content: PropTypes.string
}

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
