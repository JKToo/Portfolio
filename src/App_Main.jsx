import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./section/Home_Section";
import AboutSection from "./section/About_Section";
import ProjectsSection from "./section/Project_Section";
import SkillSection from "./section/Skill_Section";
import FeaturedProject from "./Featured Project/FeaturedProject_Section";
import NavBar from "./components/NavBar";
import CertificatesSection from "./section/Certificate_Section";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import $ from 'jquery';
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Footer from "./Footer"
const { Octokit } = require("@octokit/core");

function App_Main() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    var lZone = $('.left-zone');
    $(window).on('scroll', function () {
        lZone.css('margin-top', $(document).scrollTop() + 100);
    });

    return (
        <Router >
            <div className="App main-section">
                <AnimatePresence>
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
                            <NavBar />
                            <div data-aos="fade-up" id="home">
                                <Home />
                            </div>

                            <div data-aos="fade-up" style={{ paddingBottom: 0 }} id="skills">
                                <SkillSection />
                            </div>

                            <div data-aos="fade-up" style={{ paddingBottom: 0 }} id="about">
                                <AboutSection />
                            </div>
                            
                            <div data-aos="fade-up" >
                                <CertificatesSection />
                            </div>

                            <div data-aos="fade-up" style={{ paddingBottom: 0 }}>
                                <FeaturedProject />
                            </div>

                            <div style={{ paddingBottom: 50 }} data-aos="fade-up" id="projects">
                                <ProjectsSection />
                            </div>

                        </div>
                    </div>
                </AnimatePresence>
                <Footer />
            </div>
        </Router>
    )
}

export default App_Main;
