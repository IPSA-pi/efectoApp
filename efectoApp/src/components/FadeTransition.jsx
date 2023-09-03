import { CSSTransition } from 'react-transition-group';

function FadeTransition({ children, condition }) {
  return (
    <CSSTransition 
      in={condition} 
      timeout={300} 
      classNames="slide"  // Updated to "slide"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
}


export default FadeTransition;