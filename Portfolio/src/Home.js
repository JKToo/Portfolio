import React, { useEffect }   from 'react';
import Typed from 'typed.js';
import './CSS/styles.css';
import Card from "@mui/material/Card";
import Side from "./Side"
import axios from "axios"

const { Octokit } = require("@octokit/core");


const Home = ( {data} ) => {
// Create reference to store the DOM element containing the animation
const el = React.useRef(null);
// Create reference to store the Typed instance itself
  const typed = React.useRef(null);

React.useEffect(() => {
  const options = {
      strings: [
      'Software Engineer',
      'Cyber Security Specialist',
      'Developer',    
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: false
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
  <div>
  <div style={{justifyContent:"center", textAlign:"center"}}>
    <div className="centerHeader">
        <p>Justin Too</p>
        </div>
        <div style={{fontSize:"20px"}}> <i>Aspiring</i></div>

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

    <h1>&lt; <span style={{ whiteSpace: 'pre' , color:"#0072E5"}} ref={el} />&gt;</h1>
    </div>
  </div>
  {/* <div className="homeCard" style={{color:"black", width: "50%", background:"#F3F6F9"}}> */}
    {/* <div className = "muiCard"> */}
    
    {/* <Side/> */}

    {/* </div> */}
    
  {/* </div> */}

  </div>
);
}

  export default Home;