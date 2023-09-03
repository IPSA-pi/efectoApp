import React from 'react';

function Header() {
  const time = new Date();
  const headerStyle = {
    color: 'white'
  };

  return(
    <div style={headerStyle}>
    <h1>efectotv</h1>
    <p>{time.getTime()}</p>
    </div >
  )
}

export default Header;