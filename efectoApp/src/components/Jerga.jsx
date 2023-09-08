import React, {useState} from 'react';
import Row from './Row';
import './Jerga.css';

function Jerga() {

  const [hilo, setHilo] = useState("EFECTOTV")
  const hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).padStart(8,0));

  const handleHiloChange = (event) => {
    setHilo(event.target.value);
  };

  return(
    <div className="jerga">
      <textarea
        name="userHilo" 
        id="userHilo" 
        cols="16" 
        rows="1" 
        value={hilo}
        onChange={handleHiloChange}
        />
      {
        hiloB.map((bString, index) => <Row key={index} className={index} value={bString}/>)
      }

    </div>
  );
}

export default Jerga;