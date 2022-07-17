import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, Nosotros, Precios, Contacto, Registrate, Entrar } from './pages/pages'

function App () {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Nosotros' element={<Nosotros/>}/>
                <Route path='/Precios' element={<Precios/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/Registrate' element={<Registrate/>}/>
                <Route path='/Entrar' element={<Entrar/>}/>
            </Routes>
        </div>
    )
}

export default App
