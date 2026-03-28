import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CSS/home.css";
// import "./index.css"

const roles = ["Software Engineer", "Cyber Security Specialist", "Developer", "Systems Administrator"];

const TypingAnimation = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="cursor-blink">|</span>
    </span>
  );
};

/* ── Floating Shapes ── */
// const FloatingShapes = () => (
//   <div className="floating-shapes">
//     <div className="scan-line" />
//     <div className="shape shape-square float-anim" style={{ top: "15%", right: "10%", transform: "rotate(45deg)" }} />
//     <div className="shape shape-circle float-reverse" style={{ top: "60%", right: "20%" }} />
//     <div className="shape shape-square-sm float-reverse" style={{ top: "30%", left: "5%", transform: "rotate(12deg)" }} />
//     <div className="shape shape-dot-accent float-anim" style={{ bottom: "20%", left: "15%" }} />
//     <div className="shape shape-dot float-anim" style={{ top: "10%", left: "40%" }} />
//     <div className="shape shape-dot-sm float-reverse" style={{ top: "70%", right: "40%" }} />
//     <div className="corner-tl" />
//     <div className="corner-br" />
//   </div>
// );

const CodeSnippet = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="code-card"
  >
    <div className="code-header">
      <span className="dot dot-red" />
      <span className="dot dot-yellow" />
      <span className="dot dot-green" />
      <span className="code-title">~/justin-too</span>
    </div>
    <div className="code-body">
      <div style={{float:"left"}} ><span className="c-accent">Developer developer</span> <span className="c-primary">= new</span> <span className="c-accent">Developer</span><span className="c-muted">{" {"}</span></div> <br/>
      <div style={{float:"left"}} className="indent"><span className="c-green">"Justin Too"</span><span className="c-muted">,</span><span className="c-muted indent" > // name</span></div><br/>
      <div style={{float:"left"}} className="indent"><span className="c-green">"Building Things"</span><span className="c-muted">,</span><span className="c-muted indent">// passion</span></div><br/>
      <div style={{float:"left"}} className="indent"><span className="c-green">true</span><span className="c-muted">,</span><span className="c-muted indent">// coffee</span></div><br/>
      <div style={{float:"left"}} ><span className="c-muted">{"}"}</span><span className="c-muted">;</span></div>
    </div>
  </motion.div>
);

const statItems = [
  { label: "STATUS", value: "AVAILABLE", colorClass: "c-green" },
  { label: "LOCATION", value: "NYC", colorClass: "c-primary" },
  { label: "FOCUS", value: "FULL-STACK", colorClass: "c-accent" },
];

const StatusBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4, duration: 0.6 }}
    className="status-bar"
  >
    {statItems.map((item) => (
      <div key={item.label} className="status-item">
        <span className="c-muted">[</span>
        <span className="c-muted">{item.label}:</span>
        <span className={item.colorClass}>{item.value}</span>
        <span className="c-muted">]</span>
      </div>
    ))}
  </motion.div>
);


const Nav_Home = () => {
  return (
    <section className="home-section">
      {/* <FloatingShapes /> */}

      <div className="home-container">
        {/* Left: Text */}
        <div className="home-text">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="terminal-prompt"
          >
            <span className="c-green">➜</span>
            <span className="c-primary">~</span>
            <span>whoami</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="home-name">
              <span>Justin Too</span>
              <br />
              <span className="home-name-glow">Driven</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="home-role"
          >
            <span className="c-muted">{"// "}</span>
            <TypingAnimation />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="home-tagline"
          >
            Exploring emerging technologies to build intuitive, impactful software solutions.
          </motion.p>

          <StatusBar />
        </div>

        {/* Right: Code card */}
        <div className="home-visual">
          <CodeSnippet />
        </div>
        {/*    
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
THE SOFTWARE. */}
      </div>
    </section>
    
  );
};

export default Nav_Home;
