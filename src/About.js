import React, { useEffect } from 'react';
import "react-vertical-timeline-component/style.min.css"
import emoji from './Sources/emoji.gif'
import Card from "@mui/material/Card";
import Side from "./Side"
import axios from "axios"
import Timeline from "./Timeline";
import { AnimatePresence } from "framer-motion";
import Grid from "@mui/material/Grid";


function About() {
  return (
    <div style={{ background: "#F2F2F2", width:"100%"}}>
      {/* className="splitScreenAbout" */}
      <Grid sx={{ flexGrow: 1 }} container spacing={1} style={{width:"100%"}}>

        <Grid item xs={12}>
          <Grid container spacing={3} >
            <Grid key={1} item className="resizer" style={{marginTop:"8%" }}>
              <Side />
            </Grid>
            <Grid key={2} item style={{}}  className="resizer" >
              <p style={{ color: '#007FFF', fontSize: 40 }}>Hey there!
                <img src={emoji} alt="emoji" className='emoji' />
              </p>
              <p style={{ color: '#007FFF', fontSize: 40 }}>Here's what I know</p>


              {/* <div className='leftPaneAbout' style={{paddingTop: 70, marginRight:50, fontFamily: "Poppins"}}>
        I currently attend CUNY Hunter College, pursuing a <br></br>Bachelors in Arts Degree in Computer Science. <br></br>
        I have a love for technology and hope <br></br>to one day make a difference through it.<br></br>
        I'm passionate about what I do, and have knowledge in <br></br>Web Development, iOS / Android Development, and Programming
        </div> */}
              <div data-aos="fade-up" >
                <Card style={{ paddingLeft: "10px", paddingRight: "10px", boxShadow: "3px 3px 3px #888888" }}>
                  <div>
                    <h3 style={{ display: 'flex' }}>Skills:</h3>
                    <div className='bar'>
                      <div className='bar-cpp' >C++
                        <div className='text'>Effective</div>
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
                      <div className='bar-php' >PHP
                        <div className='text'>Effective</div>
                      </div>
                    </div>
                    <div className='bar'>
                      <div className='bar-ruby' >Ruby
                        <div className='text'>Basic/Effective</div>
                      </div>
                    </div>
                    <div className='bar'>
                      <div className='bar-swift' >Swift
                        <div className='text'>Basic</div>
                      </div>
                    </div>
                    <div className='bar'>
                      <div className='bar-java'>Java
                        <div className='text'>Effective</div>
                      </div>
                    </div>
                    <div className='bar'>
                      <div className='bar-sql'>SQL
                        <div className='text'>Basic</div>
                      </div>
                    </div>
                    <div className='bar'>
                      <div className='bar-python'>Python
                        <div className='text'>Basic</div>
                      </div>
                    </div>
                    <div className='bar'>
                      <div className='bar-powershell'>PowerShell
                        <div className='text'>Basic</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Grid>
            <Grid key={3} item style={{ width: "100%", marginTop: "3%" }}  >
              <AnimatePresence>
                <div data-aos="fade-up" style={{ paddingBottom: 200 }}>
                  <Timeline />
                </div>
              </AnimatePresence>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>

  );
}

export default About;
