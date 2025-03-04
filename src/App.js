import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Nav_Home";
import About from "./Nav_About_Skills";
import Projects from "./Nav_Projects"
import Skills from "./Nav_Skills"
import Landing from "./components/Landing"
import App_Home from "./App_Main"
import Certificates from "./Certificates"
import Side from "./About_InfoCards"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import $ from 'jquery';
import Timeline from "./components/Timeline";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios"
const { Octokit } = require("@octokit/core");

function App() {
    const [showComponent, setShowComponent] = useState(false);
    const [showLanding, setShowLanding] = useState(true);

    useEffect(()=>{
        setInterval(() => {
            setShowComponent(!showComponent);
        }, 3000);
    }, []);
    useEffect(()=>{
        setInterval(() => {
            setShowLanding(!showLanding);
        }, 3000);
    }, []);
    return (
        <>
        <div>
        {/* <Landing/> */}

            <AnimatePresence>
            {showLanding && <Landing/>}
            <div  data-aos="fade-up" > 
            {showComponent && <App_Home/>}
            </div>
            </AnimatePresence>
        </div>
   </>
    )
}

export default App;
