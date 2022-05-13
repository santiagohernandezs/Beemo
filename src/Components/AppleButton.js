import React from 'react'
import Apple from '../assets/apple.png'


export const AppleButton = () => {
    return (
        <div style={buttonBox}>
            <img style={icon} src={Apple} alt="logo" />
        </div>

    )
}

export default AppleButton

const icon = {
    height : '45px',
    width : '40px',
    position: 'absolute',
    top : '10px',
    left : '14px'
  }
  
  const buttonBox = {
    backgroundColor: '#FFFFFE',
      height : '50px',
      width : '50px',
      borderRadius : '16px',
      marginRight : '1rem',
      boxShadow: '4px 4px 3px rgba(0, 0, 0, 0.2)',
      padding : '0.5rem'
  }