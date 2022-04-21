import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Side from "./Side"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import $ from 'jquery';


function App() {
    
    var lZone = $('.left-zone');
    $(window).on('scroll', function() {
        lZone.css('margin-top', $(document).scrollTop() + 100);
    });
    return (
    <Router>
    <div className = "App">
    <div id="home"></div>
        <AnimatePresence>
        <NavBar />
        <div className="splitScreen">
        <div className="leftPane"><Side/></div>  
        <div className="rightPane">
       
            <div className="topPane"><Home/></div>
      
       <div id="about">
         <div className="bottomPane">
             <About/></div>
       </div>
        </div>
        </div>
        </AnimatePresence>
    </div>
   
   <div id="div2">

   </div>
    </Router>
    )
}

export default App;

      {/* <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route> 
        </Switch> */}