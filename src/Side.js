import $ from 'jquery';
import React from 'react';
 import "react-vertical-timeline-component/style.min.css"

function Side() {
  var lZone = $('.left-zone');
  $(window).on('scroll', function() {
      lZone.css('margin-top', $(document).scrollTop() + 100);
  });
  
  return (
    <div className="left-zone col-sm-2">
        <div className='sidenav'>
        <h1>Justin Too</h1>
        <div className='link'>LinkedIn</div> <br></br>
        <div className='link'>Github</div>
        </div>
    </div>
  );
}

export default Side;
