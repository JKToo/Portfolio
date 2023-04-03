import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import Skills from "./Skills"
import Landing from "./Landing"
import AppSecond from "./App2"
import Certificates from "./Certificates"
import Side from "./Side"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import $ from 'jquery';
import Timeline from "./Timeline";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageSlider from "./ImageSlider";
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
            <div  data-aos="fade-up" id="about"> 
            {showComponent && <AppSecond/>}
            </div>
            </AnimatePresence>
        </div>
   </>
    )
}

export default App;

      {/* <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route> 
        </Switch> */}