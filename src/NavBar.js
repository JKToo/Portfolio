import React from "react"
import {Link} from "react-router-dom"
import $ from 'jquery';


function refresh(){
  var lZone = $('.left-zone');
    $(window).on('scroll', function() {
        lZone.css('margin-top', $(document).scrollTop() + 100);
    });
}

function NavBar() {

  window.onload = refresh;
  return (
      <nav className="nav">
        <img src = "/code.png" width="60px" height = "60px" alt = "text"/>
        <ul className = "nav-items">
        <li> <Link to = "/">Home</Link></li>
        <li><Link to = "/about">About</Link></li>
        <li><Link to = "/projects">Projects</Link></li>

        </ul>
      </nav>
  )
}

export default NavBar;