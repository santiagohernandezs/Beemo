import React from 'react';
import Play from '../assets/playstore.png'

export const PlaystoreButton = () => {
  return (
    <div style={buttonBox}>
      <img style={icon} src={Play} alt="logo" />
    </div>
  )
}

export default PlaystoreButton

const icon = {
  height : '45px',
  width : '45px',
  position: 'absolute',
  top : '12px',
  left : '12px'
}

const buttonBox = {
  backgroundColor: '#FFFFFE',
  height : '50px',
  width : '50px',
  borderRadius : '16px',
  boxShadow: '4px 4px 3px rgba(0, 0, 0, 0.2)',
  padding : '0.5rem'
}