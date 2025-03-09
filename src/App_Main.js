import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Nav_Home";
import About from "./Nav_About_Skills";
import Projects from "./Nav_Projects"
import Skills from "./Nav_Skills"
import Featured_Project from "./Freatured Project/Featured_Project"
import Certificates from "./Certificates"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { AnimatePresence } from "framer-motion";
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer"
import Burger from "./components/Burger";
const { Octokit } = require("@octokit/core");

function AppSecond() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    var lZone = $('.left-zone');
    $(window).on('scroll', function () {
        lZone.css('margin-top', $(document).scrollTop() + 100);
    });
    return (
        <Router>
            <div className="App">
                <div id="home"></div>
                <AnimatePresence>
                    <Burger/>
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

                        <div style={{ width: "100%" }} >
                            <Home />

                            <div data-aos="fade-up" id="skills">

                                <Skills />
                                <div data-aos="fade-up" style={{ paddingBottom: 0 }}>
                                </div>
                            </div>
                            <div data-aos="fade-up" id="about">
                                <About />
                                <div data-aos="fade-up" style={{ paddingBottom: 0 }}>
                                </div>
                            </div>
                            <div data-aos="fade-up" id="about">
                                <Featured_Project />
                                <div data-aos="fade-up" style={{ paddingBottom: 0 }}>
                                </div>
                            </div>

                            <div style={{ paddingTop: 200, paddingBottom: 50 }} data-aos="fade-up" id="projects">
                                <Projects />
                            </div>

                        </div>
                    </div>
                </AnimatePresence>
                <Footer />
            </div>
        </Router>
    )
}

export default AppSecond;

{/* <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route> 
        </Switch> */}