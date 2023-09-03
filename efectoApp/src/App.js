import './App.css';
import Jerga from './components/Jerga';
import JergaRelok from './components/JergaRelok';
import Header from './components/Header';

const appStyle = {
  backgroundColor: 'black',
  height: '100vh',
  display: 'flex',
  flexDirections: 'column',
  flex: 'wrap'
}

function App() {
  return (
    <div className="App" style={appStyle}>
      {/* <img className="bg-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TV_noise.jpg/1024px-TV_noise.jpg" alt="tv static" /> */}
      {/* <Header /> */}
      {/* <Jerga /> */}
      <JergaRelok className='relokCont' />
    </div>
  );
}

export default App;
