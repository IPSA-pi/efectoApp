import React, { useState } from 'react';
import './App.css';
import CreateJerga from './components/CreateJerga';
import JergaRelok from './components/JergaRelok';
import Home from './components/Home';
import Button from './components/Button';


function App() {

  const [activeComponent, setActiveComponent] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="App">
        <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      <div className="menu-container" >
        {isMenuOpen && (
          <ul className='menu-items'>
            <Button onClick={() => {setActiveComponent('Home'); setIsMenuOpen(false);}}>
              {/* <img src="../public/efectotv.jpg" className="nav-icon" alt="" /> */}
            </Button>
            <Button text='create_jerga' onClick={() => {setActiveComponent('Jerga'); setIsMenuOpen(false);}}/>
            <Button text='relok_binario' onClick={() => {setActiveComponent('JergaRelok'); setIsMenuOpen(false);}}/>
          </ul>
        )}
      </div>

      <div className="componentsContainer">
        {activeComponent === 'Home' && <Home /> }
        {activeComponent === 'Jerga' && <CreateJerga /> }
        {activeComponent === 'JergaRelok' && <JergaRelok /> }
      </div>

    </div>
  );
}

export default App;
