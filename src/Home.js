import React from 'react';
import Typed from 'typed.js';
import background from './bg.jpg'
import About from './About.js'
// import ReactDOM from 'react-dom';
// import ContentAbout from './ContentAbout';
import './styles.css';
import Content from './Content';
function Home() {
// Create reference to store the DOM element containing the animation
const el = React.useRef(null);
// Create reference to store the Typed instance itself
  const typed = React.useRef(null);

React.useEffect(() => {
  const options = {
      strings: [
      'Programmer',
      'Front End Developer ',
      'Back End Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  };
  
  // elRef refers to the <span> rendered below
  typed.current = new Typed(el.current, options);
  
  return () => {
    // Make sure to destroy Typed instance during cleanup
    // to prevent memory leaks
    typed.current.destroy();
  }
}, [])

return (
  <div className="wrap" >
    <div className="centerHeader">
        <p>Justin Too</p>
        </div>
    <div className="center">
    <h1>&lt; <span style={{ whiteSpace: 'pre' }} ref={el} />&gt;</h1>
    </div>
  </div>
);
}

  export default Home;