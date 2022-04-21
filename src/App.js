import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Side from "./Side"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";



function App() {
    const location = useLocation();
    return (
    <Router>
    <div className = "App">
        <AnimatePresence>
        <NavBar />
        <div className="splitScreen">
        <div className="leftPane"><Side/></div>  
        <div className="rightPane">
            <div className="topPane"><Home/></div>
            <div className="bottomPane"><About/></div>
        </div>
        </div>
        </AnimatePresence>
    </div>
    </Router>
    )
}

export default App;

      {/* <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route> 
        </Switch> */}