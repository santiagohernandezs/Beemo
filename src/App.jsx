import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Precios from './pages/Precios'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

function App () {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Nosotros' element={<Nosotros/>}/>
                <Route path='/Precios' element={<Precios/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
            </Routes>
        </div>
    )
}

export default App
