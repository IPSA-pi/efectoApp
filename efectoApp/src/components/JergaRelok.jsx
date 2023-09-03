import React, {useState, useEffect } from 'react';
import Row from './Row';


function JergaRelok() {
  
  // controls
  const refreshInterval = 1000;
  const [timeFormat, setTimeFormat] = useState('ms');

  // style
  const JergaContainerStyle = {
    width: 'fit-content',
    margin: 'auto',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  }

  const JergaStyle = {
    width: 'fit-content',
    margin: 'auto',
    // margin: '5em',
    marginBottom: '2em',
    border: 'solid white .1em',
  }
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    function updateTime() {
      setTime(new Date());
    }
    const interval = setInterval(updateTime, refreshInterval);
    return () => clearInterval(interval);
  }, []);
  
  const bianryTime = (timeFormat) => {
    let hour, minutes, seconds, milliseconds;
    let hilo, hiloB;
    let timeArray, formatTime;

    [hour, minutes, seconds, milliseconds] = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
    timeArray = [hour,minutes,seconds];
    formatTime = timeArray.map(num => num.toString().padStart(2, '0')).join('').toString();


    switch (timeFormat) {

      case 'ms':
        hilo = time.getTime().toString();
        hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).slice(2));
        // console.log(hilo);
        return hiloB;

      case 'hmsm':      
        hilo = formatTime + (milliseconds.toString().padStart(3, '0'));
        hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).slice(2));
        console.log(hilo);
        return hiloB;

      case 'hms':  
        return formatTime.split('').map(char => char.charCodeAt().toString(2).slice(2));

      default:
        throw new Error('specify time format');
    }
  };  

  const toggleTimeFormat = () => {
    switch (timeFormat) {
      case 'ms':
        setTimeFormat('hmsm');
        break;
      case 'hmsm':
        setTimeFormat('hms');
        break;
      case 'hms':
        setTimeFormat('ms');
        break;
      default:
        throw new Error('Unknown time format');
    }
  };

  return(
    <div className="jergaContainer" style={JergaContainerStyle}>
      {/* <p>hola</p> */}
      <div className="jerga" style={JergaStyle}>
        {
          bianryTime(timeFormat).map((bString, index) => <Row key={index} className={index} value={bString}/>)
        }
      </div>
      <button onClick={toggleTimeFormat}>Toggle Time Format</button>
    </div>
  );
}

export default JergaRelok;