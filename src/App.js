import React, { useEffect, useState } from "react";
import "./App.css";
import Landing from "./components/Landing.tsx"
import App_Home from "./App_Main"
import { AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
const { Octokit } = require("@octokit/core");

function App() {
    const [showComponent, setShowComponent] = useState(false);
    const [showLanding, setShowLanding] = useState(true);

    useEffect(()=>{
        setInterval(() => {
            setShowComponent(!showComponent);
        }, 5000);
    }, []);
    useEffect(()=>{
        setInterval(() => {
            setShowLanding(!showLanding);
        }, 5000);
    }, []);
    return (
        <>
        <div >
        {/* <Landing/> */}

            <AnimatePresence>
            {showLanding && <Landing/>}
            <div  data-aos="fade-up" > 
            {showComponent && <App_Home />}
            </div>
            </AnimatePresence>
        </div>
   </>
    )
}

export default App;
