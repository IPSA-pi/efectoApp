import React, { useState } from 'react';
import './App.css';
import Jerga from './components/Jerga';
import JergaRelok from './components/JergaRelok';
import Header from './components/Header';
import Button from './components/Button';




function App() {

  const [activeComponent, setActiveComponent] = useState('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="App">
      <div className="menu-container">
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>

        {isMenuOpen && (
          <ul className='menu-items'>
            <Button text='Show header' onClick={() => {setActiveComponent('Header'); setIsMenuOpen(false);}}/>
            <Button text='Show jerga' onClick={() => {setActiveComponent('Jerga'); setIsMenuOpen(false);}}/>
            <Button text='Show JergaRelok' onClick={() => {setActiveComponent('JergaRelok'); setIsMenuOpen(false);}}/>
          </ul>
        )}
      </div>
      <div className="componentsContainer">

        {activeComponent === 'Header' && <Header /> }
        {activeComponent === 'Jerga' && <Jerga /> }
        {activeComponent === 'JergaRelok' && <JergaRelok /> }
      </div>
    </div>
  );
}

export default App;
