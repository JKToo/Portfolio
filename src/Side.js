import $ from 'jquery';
import React from 'react';
 import "react-vertical-timeline-component/style.min.css"
import profile from './avatar.jpg';

function Side() {
  var lZone = $('.left-zone');
  $(window).on('scroll', function() {
      lZone.css('margin-top', $(document).scrollTop() + 100);
  });
  
  return (
    <div className="left-zone col-sm-2">
        <div className='sidenav'>
          <img className='sidenav-img' src={profile}></img>
        <h1>Justin Too</h1>
        <div className='link-items'>
        <div className='link'>LinkedIn</div> <br></br>
        <div className='link'>Github</div>
        <div className='link'>Resume</div>
        </div>
        <br></br>
          <div>
            <h3>Skills:</h3>
                <div className='bar'>
                    <p className = 'bar-cpp' >C++</p>
                  </div>
                  <div className='bar'>
                    <p className = 'bar-html' >HTML/CSS</p>                    
                </div>
                <div className='bar'>
                    <p className = 'bar-js' >Javascript</p>                    
                </div>
                <div className='bar'>
                    <p className = 'bar-php' >PHP/MySQL</p>
                  </div>
                  <div className='bar'>
                    <p className = 'bar-swift' >Swift</p>                    
                </div>
                <div className='bar'>
                    <p className = 'bar-java'>Java</p>
                  </div>
                  <div className='bar'>
                    <p className = 'bar-react'>React</p>                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Side;
