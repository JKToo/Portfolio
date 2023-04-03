import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import Skills from "./Skills"
import Landing from "./Landing"
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

function AppSecond() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

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
                <div className="credits">
                    The MIT License (MIT)
                
                Copyright (c) 2018 Matt Boldt
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in
                all copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                THE SOFTWARE.     
                
                </div>

                <div className="credits">
                The MIT License (MIT)
                
                Copyright (c) 2015 Michał Sajnóg
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
                </div>

                <div className="credits">
                The MIT License (MIT)

                Copyright (c) 2014 Call-Em-All

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
                </div>
        <div >
        
        <div style={{width: "100%"}} >
                 <Home/>
                 
                 <div  data-aos="fade-up" id="about">            

                    <Skills/>
                    {/* <div  data-aos="fade-up" style={{paddingBottom: 0}}>
                    </div> */}
            </div>  
            <div  data-aos="fade-up" id="about">            

                    <About/>
                    {/* <div  data-aos="fade-up" style={{paddingBottom: 0}}>
                    </div> */}
            </div>  

            <div style={{paddingTop: 200}} data-aos="fade-up" id="projects">
                <Projects/>
            </div>
            
        </div>
        </div>
        </AnimatePresence>
    </div>
    </Router>
    )
}

export default AppSecond;

      {/* <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route> 
        </Switch> */}