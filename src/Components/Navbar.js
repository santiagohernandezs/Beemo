import React from 'react'

const Navbar = () => {
  return (
    <navbar >
        <ul style={navbar}>
            <li style={links}>Nosotros</li>
            <li style={links}>Precios</li>
            <li style={links}>Contacto</li>
        </ul>
    </navbar>
  )
}

export default Navbar

const navbar = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end',
    listStyle : 'none',
    padding : '2rem',
    backgroundColor : '#2E2B28'
}

const links = {
    marginRight : '20px',
    fontFamily: 'Raleway',
    fontSize: '30px',
    color : '#F8F5F2'
}