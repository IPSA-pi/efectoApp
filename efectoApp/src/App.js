import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Jerga from './components/Jerga';
import JergaRelok from './components/JergaRelok';
import Header from './components/Header';
import Button from './components/Button';
import FadeTransition from './components/FadeTransition';

const appStyle = {
  backgroundColor: 'black',
  // height: '100vh',
  // display: 'flex',
  // flexDirections: 'column',
  // flex: 'wrap'
}

const buttonsContainer = {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-around',
  // alignItems: 'center',
  // height: '100vh'
}

const componentsContainer = {
  padding: '2em',
}

function App() {

  const [activeComponent, setActiveComponent] = useState('Header');
  
  return (
    <div className="App" style={appStyle}>
      <div className="buttonsContainer" style={buttonsContainer}>
        <Button text='Show header' onClick={() => setActiveComponent('Header')}/>
        <Button text='Show jerga' onClick={() => setActiveComponent('Jerga')}/>
        <Button text='Show JergaRelok' onClick={() => setActiveComponent('JergaRelok')}/>
      </div>
      {/* <img className="bg-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TV_noise.jpg/1024px-TV_noise.jpg" alt="tv static" /> */}
      <div className="componentsContainer" style={componentsContainer}>

      {activeComponent === 'Header' && <Header /> }
      {activeComponent === 'Jerga' && <Jerga /> }
      {activeComponent === 'JergaRelok' && <JergaRelok /> }
        {/* <FadeTransition condition={activeComponent === 'Header'}>
          <Header />
        </FadeTransition>         */}
        {/* <FadeTransition condition={activeComponent === 'Jerga'}>
          <Jerga />
        </FadeTransition>        
        <FadeTransition condition={activeComponent === 'JergaRelok'}>
          <JergaRelok />
        </FadeTransition>         */}
      </div>
    </div>
  );
}

export default App;
