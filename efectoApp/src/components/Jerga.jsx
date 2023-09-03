import React from 'react';
import Row from './Row';

function Jerga() {
  const hilo = "EFECTOTV";
  const hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).padStart(8,0));
  const JergaStyle = {
    width: 'fit-content',
    margin: 'auto',
    marginTop: '5em',
    border: 'solid black .1em',
  }
  return(
    <div className="jerga" style={JergaStyle}>
      {
        hiloB.map((bString, index) => <Row key={index} className={index} value={bString}/>)
      }
    </div>
  );
}

export default Jerga;