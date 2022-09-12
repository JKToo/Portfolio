import React, { useEffect }   from 'react';
import Typed from 'typed.js';
import './CSS/styles.css';

function Home() {
// Create reference to store the DOM element containing the animation
const el = React.useRef(null);
// Create reference to store the Typed instance itself
  const typed = React.useRef(null);

React.useEffect(() => {
  const options = {
      strings: [
      'Software Engineer',
      'Full Stack Developer',
      'Android | IOS Developer',     
      'Information Technician '
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
{/*    
The MIT License (MIT)

Copyright (c) 2018 Matt Boldt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */}

    <h1>&lt; <span style={{ whiteSpace: 'pre' }} ref={el} />&gt;</h1>
    </div>
  </div>
);
}

  export default Home;