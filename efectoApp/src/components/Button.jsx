import React from 'react';



function Button(props) {
  const buttonStyle = {
    backgroundColor: 'black',
    margin: '.5em .5em 0 .5em',
    height: '2em',
    width: 'fit-content',
    borderStyle: 'none',
    border: '1px solid white',
    color: 'white',
    // display: 'block'
  };

  return(
    <button style={buttonStyle} onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;