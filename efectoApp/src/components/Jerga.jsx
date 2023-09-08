import Row from './Row';

function Jerga(props) {
  const hiloB = props.hilo.split('').map(char => char.charCodeAt().toString(2).padStart(8,0));

  return(           
    hiloB.map((bString, index) => <Row key={index} className={index} value={bString}/>)    
  );     
}

export default Jerga;