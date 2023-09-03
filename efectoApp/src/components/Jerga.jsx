import React, {useState} from 'react';
import Row from './Row';

function Jerga() {
  const textAreaStyle = {
    border: 'red 1px solid',
    backgroundColor: 'black',
    color: 'white',
    height: '1em',
    overflow: 'hidden',
    textWrap: 'none',
    outline: 'none',
    boxShadow: 'none',
    resize: 'none',
    width: '100%'
  };

  const [hilo, setHilo] = useState("EFECTOTV")
  const hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).padStart(8,0));
  const JergaStyle = {
    width: 'fit-content',
    margin: 'auto',
    marginTop: '5em',
    border: 'solid black .1em',
  }

  const handleHiloChange = (event) => {
    setHilo(event.target.value);
  };

  return(
    <div className="jerga" style={JergaStyle}>
      <textarea
        name="userHilo" 
        id="userHilo" 
        cols="16" 
        rows="1" 
        value={hilo}
        onChange={handleHiloChange}
        style={textAreaStyle}
        />
      {
        hiloB.map((bString, index) => <Row key={index} className={index} value={bString}/>)
      }

    </div>
  );
}

export default Jerga;