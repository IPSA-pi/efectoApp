import React from 'react';
import './Cell.css';

function Cell(props) {
  return(
    <span className={props.className} ></span>
  );
}

export default Cell;