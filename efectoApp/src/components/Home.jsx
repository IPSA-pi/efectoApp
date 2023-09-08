import React, {useState, useEffect} from 'react';
import './Home.css';

function Home() {
  const headerStyle = {
    color: 'white'
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    function updateTime() {
      setTime(new Date());
    }
    const interval = setInterval(updateTime, 1);
    return () => clearInterval(interval);
  }, []);

  return(
    <div className="home-container"style={headerStyle}>
      <h1>efectotv</h1>
      <p>{time.getTime()}</p>
    </div >
  )
}

export default Home;