import React, {useState, useEffect } from 'react';
import Row from './Row';


function JergaRelok() {
  
  // controls
  const refreshInterval = 1000;
  const setTimeFormat = 'ms'

  // style
  const JergaStyle = {
    width: 'fit-content',
    margin: 'auto',
    marginTop: '5em',
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
    let timeArray, formatTime;
    
    switch (timeFormat) {

      case 'ms':
        const hilo = time.getTime().toString();
        const hiloB = hilo.split('').map(char => char.charCodeAt().toString(2).slice(2));
        // console.log(hilo);
        return hiloB;

      case 'hmsm':
        [hour, minutes, seconds, milliseconds] = [time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()];
        timeArray = [hour,minutes,seconds];
  
        formatTime = timeArray.map(num => num.toString().padStart(2, '0')).join('').toString();
        const formatTimeMs = formatTime + (milliseconds.toString().padStart(3, '0'));
        const formatTimeMsB = formatTimeMs.split('').map(char => char.charCodeAt().toString(2).slice(2));
        console.log(formatTimeMs);
        return formatTimeMsB;

      case 'hms':
        [hour, minutes, seconds] = [time.getHours(), time.getMinutes(), time.getSeconds()];
        timeArray = [hour, minutes, seconds];
  
        formatTime = timeArray.map(num => num.toString().padStart(2, '0')).join('').toString();
        return formatTime.split('').map(char => char.charCodeAt().toString(2).slice(2));

      default:
        throw new Error('specify time format');
    }
  };  

  return(
    <div className="jerga" style={JergaStyle}>
      {
        bianryTime(setTimeFormat).map((bString, index) => <Row key={index} className={index} value={bString}/>)
      }
    </div>
  );
}

export default JergaRelok;