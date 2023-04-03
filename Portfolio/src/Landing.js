import $ from 'jquery';
import React, { useState } from 'react';
import "react-vertical-timeline-component/style.min.css"
import profile from './Sources/avatar.jpg';
import Card from "@mui/material/Card";
import axios from "axios"
import { useEffect } from 'react';
import Github from "./components/github"
import { Octokit } from "@octokit/core"
import { Skeleton } from "@mui/material";
import { format } from "date-fns";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Background from "./Sources/windows.png";
import './CSS/landing.css'
import Typed from 'typed.js';

const Landing = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
    React.useEffect(() => {
        const options = {
            strings: [
                "************"
            ],
            typeSpeed: 120,
            loop: false
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className='background' >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <div >
                    <img src="user.png" className='userLogo'></img>
                    <p style={{ fontSize: "40px", color: "white", marginLeft: "75px", marginRight: "80px" }}>Justin</p>
                    <div style={{ backgroundColor: "white", marginTop: "-40px", paddingLeft: "10px", paddingTop: "5px", paddingBottom: "5px" }}>
                        <span style={{ whiteSpace: 'pre' }} ref={el} />
                    <img src="login.png" className='input' />

                    </div>
                </div>
            </div>

            <div style={{ marginTop: '-70px', color: "white", float: "left", marginLeft: "10px", display: "flex", backgroundColor: "#1976d2", padding: "3px 5px 3px 5px" }}>
                <img src="user.png" className='user'></img> <p style={{ marginLeft: "10px" }}>Justin</p>
            </div>
        </div>
    );
}

export default Landing;
