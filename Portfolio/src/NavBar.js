import React, {useEffect} from "react"
import {Link} from "react-router-dom"
import $ from 'jquery';
import { useLocation } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import About from './About'

function refresh(){
  var lZone = $('.left-zone');
    $(window).on('scroll', function() {
        lZone.css('margin-top', $(document).scrollTop() + 100);
    });
}

function NavBar() {
  
const { pathname, hash, key } = useLocation();

useEffect(() => {
  // if not a hash link, scroll to top
  if (hash === '') {
    window.scrollTo(0, 0);
  }
  // else scroll to id
  else {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }
}, [pathname, hash, key]); // do this on route change
  window.onload = refresh;
  return (
      <nav className="nav">
        <img src = "/code.png" width="60px" height = "60px" alt = "text"/>
        <ul className = "nav-items">
        <li> <ScrollIntoView selector= "#home">Home</ScrollIntoView></li>
        <li> <ScrollIntoView selector= "#skills">Skills</ScrollIntoView></li>
        <li> <ScrollIntoView selector= "#about">About</ScrollIntoView> </li>
        <li><ScrollIntoView selector= "#projects">Projects</ScrollIntoView></li>

        </ul>
      </nav>
  )
}

export default NavBar;