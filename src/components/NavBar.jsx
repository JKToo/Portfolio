import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import $ from 'jquery';
import { useLocation } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import About from '../Nav_About_Skills'
import styled from "styled-components";


function refresh(){
  var lZone = $('.left-zone');
    $(window).on('scroll', function() {
        lZone.css('margin-top', $(document).scrollTop() + 100);
    });
}

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;    
    margin-block-start: 0;
  
    @media (min-width: 770px) {
      background-color: #fff;
      opacity: 90%;
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: large;
      align-items: center;
      box-shadow: 0 2px 4px 0 rgba(203, 199, 199, 0.2);
      color: black;
      top: 0;
      padding-right: 6px;
      margin-left: -6px;
      position: sticky;
      z-index: 101;
    }


    li {
      padding: 30px;
    }


    @media (max-width: 768px){
      flex-flow: column nowrap;
      opacity: 0.9;
      justify-content: center;
      border: 1px solid rgba(0, 0, 0, 0.52);
      font-size: 20px;
      background-color: white;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
      top: 0;
      left: 0;
      height: 50vh;
      width: 200px;
      padding-top: 3.5res;
      transition: transform 0.8s ease-in-out

      li {
      color: #fff;
      }
    }
`;


const NavBar = ({open}) => {
  
const { pathname, hash, key } = useLocation();
const [opened, setOpen] = useState({open});

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
    // className="nav"
      < >
        {/* <img src = "/code.png" width="60px" height = "60px" alt = "text"/> */}
        <Ul open={open}>
        <li > <ScrollIntoView selector= "#home">Home</ScrollIntoView></li>
        <li > <ScrollIntoView selector= "#skills">Skills</ScrollIntoView></li>

        <li> <ScrollIntoView selector= "#about">About</ScrollIntoView> </li>
        <li><ScrollIntoView selector= "#projects">Projects</ScrollIntoView></li>

        </Ul>
      </>
  )
}

export default NavBar;