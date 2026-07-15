import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./section/Home_Section";
import AboutSection from "./section/About_Section";
import ProjectsSection from "./section/Project_Section";
import SkillSection from "./section/Skill_Section";
import FeaturedProject from "./Featured Project/FeaturedProject_Section";
import NavBar from "./components/NavBar";
import CertificatesSection from "./section/Certificate_Section";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Footer from "./Footer";
import { createPortal } from "react-dom";

function App_Main() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });

        const handleScroll = () => {
            const home = document.getElementById("home");

            if (!home) return;

            const rect = home.getBoundingClientRect();

            // Show once the Home section has completely scrolled off screen
            setShowScrollTop(rect.bottom < 0);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    window.dispatchEvent(
        new CustomEvent("navbar-select", {
            detail: "Home",
        })
    );
};

    return (
        <Router>
            <div className="App main-section">
                <AnimatePresence>
                    <div style={{ width: "100%" }}>
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

                        <div data-aos="fade-up" style={{ paddingBottom: 0 }} id="certs">
                            <CertificatesSection />
                        </div>

                        <div data-aos="fade-up" style={{ paddingBottom: 0 }}>
                            <FeaturedProject />
                        </div>

                        <div data-aos="fade-up" style={{ paddingBottom: 50 }} id="projects">
                            <ProjectsSection />
                        </div>
                    </div>
                </AnimatePresence>

               {showScrollTop &&
    createPortal(
        <button
            type="button"
            onClick={scrollToHome}
            aria-label="Back to top"
            title="Back to top"
            className="scroll-top-button"
        >
            <KeyboardArrowUpIcon fontSize="large" />
        </button>,
        document.body
    )}

                <Footer />
            </div>
        </Router>
    );
}

export default App_Main;