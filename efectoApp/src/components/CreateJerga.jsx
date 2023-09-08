import React, {useState} from 'react';
import Jerga from './Jerga';
import './CreateJerga.css';

function CreateJerga() {

  const [hilo, setHilo] = useState("EFECTOTV")

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
      <div className="jerga-container">
        <Jerga hilo={hilo}/>
      </div>
    </div>
  );
}

export default CreateJerga;