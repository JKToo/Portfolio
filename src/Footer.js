import React, { useEffect }   from 'react';
import Typed from 'typed.js';
import './CSS/styles.css';
import Card from "@mui/material/Card";
import Side from "./Side"
import axios from "axios"

const { Octokit } = require("@octokit/core");


const Footer = ( ) => {
    return(
    <div style={{backgroundColor:"black", width:'100%', fontSize:'15px'}}>
        <div style={{paddingTop:'30px', paddingBottom:'20px'}}>
        <img src="footer_git.png" height="50px" widght="50px"/>
        <img src="linkedin.png" height="50px" widght="50px"/>

            <p style={{color:"white"}}>Made with</p>
            <div style={{display:'flex', justifyContent:'center', marginTop:"-10px"}}>
            <p style={{color:"white", backgroundColor:"#1976d2",  padding:'5px', borderRadius:'6px'}}>React.js</p>
            <p style={{color:"white", backgroundColor:"#1976d2", marginLeft:"15px", padding:'5px', borderRadius:'6px'}}>Material UI</p>
            <p style={{color:"white", backgroundColor:"#1976d2", marginLeft:"15px", padding:'5px', borderRadius:'6px'}}>Typed.js</p>
            </div>
        </div>
    </div>
);
}

  export default Footer;