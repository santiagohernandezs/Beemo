import { Link } from 'react-router-dom'
import { beemoIcon, instagram, facebook, twitter } from '../assets/home'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footerContainer'>
                    <div className='iconContainer'>
                        <img src={beemoIcon} alt="icon" />
                    </div>
                    <div className="footerNavbarContainer">
                        <ul className='footerNavbar'>
                            <Link className='footerNavbarItem' to='/Nosotros'>
                                <li >Nosotros</li>
                            </Link>
                            <Link className='footerNavbarItem' to='/Precios'>
                                <li >Precios</li>
                            </Link>
                            <Link className='footerNavbarItem' to='/Contacto'>
                                <li >Contacto</li>
                            </Link>
                            <Link className='footerNavbarItem' to='/Registrate'>
                                <li >Registrate</li>
                            </Link>
                            <Link className='footerNavbarItem' to='/Entrar'>
                                <li >Entrar</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='socialContainer'>
                        <a href='#'>
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href='#'>
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href='#'>
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </div>
                    <div className="DMCA">
                        <p>Santiago Hernandez 2022. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
