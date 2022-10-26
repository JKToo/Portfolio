import React, { useEffect } from 'react';
import "react-vertical-timeline-component/style.min.css"
import emoji from './Sources/emoji.gif'
import Card from "@mui/material/Card";
import Side from "./Side"
import axios from "axios"
import Timeline from "./Timeline";
import { AnimatePresence } from "framer-motion";


function About() {
  return (
    <div style={{background:"#F0F7FF"}}>
      <div className="splitScreenAbout">
        <div style={{ width: "50%", paddingTop: "110px" }}>
          <Side />
        </div>
        <div style={{ width: "50%" }}>
          <div>
            <h1 style={{ color: '#007FFF', fontSize: 50 }}>Hey there!
              <img src={emoji} alt="test" className='emoji' />
            </h1>
            <h2 style={{ color: '#007FFF', fontSize: 40 }}>Here's what I know</h2>

            <div >
              {/* <div className='leftPaneAbout' style={{paddingTop: 70, marginRight:50, fontFamily: "Poppins"}}>
        I currently attend CUNY Hunter College, pursuing a <br></br>Bachelors in Arts Degree in Computer Science. <br></br>
        I have a love for technology and hope <br></br>to one day make a difference through it.<br></br>
        I'm passionate about what I do, and have knowledge in <br></br>Web Development, iOS / Android Development, and Programming
        </div> */}
            <div data-aos="fade-up" >
        <Card style={{paddingLeft:"10px", paddingRight:"10px", boxShadow: "3px 3px 3px #888888"}}>
              <div>
                <h3 style={{ display: 'flex' }}>Skills:</h3>
                <div className='bar'>
                  <div className='bar-cpp' >C++
                    <div className='text'>Super Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-html' >HTML/CSS
                    <div className='text'>Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-js' >Javascript
                    <div className='text'>Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-php' >PHP/MySQL
                    <div className='text'>Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-swift' >Swift
                    <div className='text'>Not Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-java'>Java
                    <div className='text'>Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-react'>React
                    <div className='text'>Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-python'>Python
                    <div className='text'>Not Effective</div>
                  </div>
                </div>
                <div className='bar'>
                  <div className='bar-powershell'>PowerShell
                    <div className='text'>Not Effective</div>
                  </div>
                </div>
              </div>
              </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        <div data-aos="fade-up" style={{ paddingBottom: 200}}>
          <Timeline />
        </div>
      </AnimatePresence>
    </div>

  );
}

export default About;
