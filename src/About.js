import React,{ useEffect }  from 'react';
 import "react-vertical-timeline-component/style.min.css"
import emoji from './Sources/emoji.gif'



function About() {
  return (
    <div style={{height: 1000}}>
      <h1  className='header' style={{ outlineColor:'#FFF', fontSize:50}}>Hello! I'm 
      <img src={emoji} alt="test" className='emoji'/>
      </h1>
      <h2 style={{ color:'white', fontSize:40, paddingLeft: 200}}>Justin Too</h2>
      <div className='splitScreenAbout font bg' style={{paddingLeft: 200}}>
        <div className='leftPaneAbout' style={{paddingTop: 70}}>
        I currently attend CUNY Hunter College, pursuing a <br></br>Bachelors in Arts Degree in Computer Science. <br></br>
        I have a love for technology and hope <br></br>to one day make a difference through it.<br></br>
        I'm passionate about what I do, and have knowledge in <br></br>Web Development, iOS / Android Development, and Programming
        </div>
      <div style={{paddingLeft:100, paddingRight: 50}} className="rightPaneAbout">
            <h3 style={{display:'flex'}}>Skills:</h3>
                <div className='bar'>
                    <div className = 'bar-cpp' >C++
                    <div className='text'>Super Effective</div>
                    </div>                    
                  </div>
                  <div className='bar'>
                    <div className = 'bar-html' >HTML/CSS 
                    <div className='text'>Super Effective</div>   
                    </div>                
                </div>
                <div className='bar'>
                    <div className = 'bar-js' >Javascript  
                    <div className='text'>Effective</div>                 
                   </div>
                </div> 
                <div className='bar'>
                    <div className = 'bar-php' >PHP/MySQL
                    <div className='text'>Effective</div>
                    </div>
                  </div>
                  <div className='bar'>
                    <div className = 'bar-swift' >Swift  
                    <div className='text'>Not Effective</div>     
                    </div>             
                </div>
                <div className='bar'>
                    <div className = 'bar-java'>Java
                    <div className='text'>Effective</div>
                    </div>
                  </div>
                  <div className='bar'>
                    <div className = 'bar-react'>React
                    <div className='text'>Effective</div>  
                    </div>                  
                </div>
            </div>
      </div>
  </div>
  );
}

export default About;
