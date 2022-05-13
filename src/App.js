import './App.css';
import Navbar from './Components/Navbar';
import Banner from './assets/banner.png';
import Row from './assets/row.png';
import AppleButton from './Components/AppleButton';
import PlaystoreButton from './Components/PlaystoreButton';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={banner}>
        <img src={Banner} alt="logo" />
      </div>
      <div style={playstoreContainer}>
        <PlaystoreButton/>
      </div>
      <div style={appleContainer}>
        <AppleButton/>
      </div>
      <div style={row}>
        <img src={Row} alt="logo" />
      </div>
    </div>
  );
}

export default App;


const banner = {
  display : 'flex',
  justifyContent : 'center',
  alignItems: 'center',
  height : '85%'
}

const row = {
  height : '25px',
  display : 'flex',
  justifyContent : 'center',
  alignContent : 'center',
  position : 'relative',
  bottom : '6rem'
}

const playstoreContainer = {
  height : '50px',
  width : '70px',
  display: 'flex',
  justifyContent : 'center',
  position: 'relative',
  bottom: '18rem',
  left: '60.5%'
}

const appleContainer = {
  height : '50px',
  width : '85px',
  display: 'flex',
  justifyContent : 'center',
  position: 'relative',
  bottom: '21.1rem',
  left: '65%'
}
