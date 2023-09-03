import React from 'react';


function Cell(props) {
  const cellSize = '1em'

  const CellStyle = {
    width: cellSize,
    height: cellSize,
    backgroundColor: `${props.className.split(' ').includes('cero') ? 'white' : 'black'}`,
  };

  return(
    <span className={props.className} style={CellStyle}></span>
  );
}

export default Cell;