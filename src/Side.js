import $ from 'jquery';
import React from 'react';
 import "react-vertical-timeline-component/style.min.css"
import profile from './Sources/avatar.jpg';

function Side() {
  var lZone = $('.left-zone');
  $(window).on('scroll', function() {
      lZone.css('margin-top', $(document).scrollTop() + 100);
  });
  
  return (
    <div className="left-zone col-sm-2">
        <div className='sidenav'>
      <h1 className="playerstat">Get to know me:</h1>
          <img className='sidenav-img' src={profile}></img>
        <h1>Justin Too</h1>
        <div className='link-items'>
        <div className='link' style={{backgroundColor:"rgb(36, 222, 219)"}}><a href="https://www.linkedin.com/in/justin-k-too/">LinkedIn</a></div> <br></br>
        <div className='link' style={{backgroundColor:"rgb(36, 222, 219)"}}><a href="https://github.com/jktoo">Github</a></div>
        {/* <div className='link'>Resume</div> */}
        </div>
        <br></br>
          <div>
            <div className='stats'>
            </div>
            <div className='stats'>
            <h2>Location:</h2>
            <h3 className = 'statanswers'>The Big Apple</h3>
            </div>
            <div className='stats'>
            <h2>Degree:</h2>
            <h3 className = 'statanswers'>Associates In Computer Science<br></br>Bachelors (Pursuing)</h3>
            </div>
            <div className='stats'>
            <h2>Hobbies:</h2>
            <h3 className = 'statanswers'>Programming | Gaming</h3>
            </div>
            
            </div>
        </div>
    </div>
  );
}

export default Side;
