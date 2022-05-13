import './App.css';
import Navbar from './Components/Navbar';
import Banner from './assets/banner.png';
import Row from './assets/row.png';
import { FaGooglePlay , FaApple } from 'react-icons/fa'



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='banner' >
        <img src={Banner} alt="logo" />
      </div>
      <div className='buttonContainer'>
        <button
        onClick={() => {
          console.log('Gplay-clicked')
        }} 
        className='button'>
          <FaGooglePlay className='icon'/>
        </button>

        <button
        onClick={() => {
          console.log('Apple-clicked')
        }} 
        className='button'>
          <FaApple className='icon'/>
        </button>
      </div>
      
      <div className='row'>
        <img src={Row} alt="logo" />
      </div>
    </div>
  );
}

export default App;



