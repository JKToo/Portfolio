import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/navbar.css"
import TerminalIcon from '@mui/icons-material/Terminal';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollIntoView from "react-scroll-into-view";


const navItems = [
  { label: "Home", href: "#home", cmd: "~" },
  { label: "Skills", href: "#skills", cmd: "~/skills" },
  { label: "About", href: "#about", cmd: "~/about" },
  { label: "Projects", href: "#projects", cmd: "~/projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (label: string) => {
    setActiveItem(label);
    setMobileOpen(false);
  };

  
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="nav-bar"
      style={{
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "blur(8px)",
        borderBottom: scrolled
          ? "1px solid hsla(175, 80%, 50%, 0.08)"
          : "1px solid transparent",
        background: scrolled
          ? "hsla(220, 20%, 4%, 0.85)"
          : "hsla(220, 20%, 4%, 0.4)",
      }}
    >
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={() => setActiveItem("Home")}>
          <div className="nav-logo-icon">
            <TerminalIcon sx={{ fontSize: 16 }} />
          </div>
          <span className="nav-logo-text">
            <span className="nav-logo-accent">Justinkt</span><span className="c-pink">.</span><span className="c-green">com</span>
          </span>
          <span className="nav-cursor">_</span>
        </a>

        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <ScrollIntoView selector= {item.href} smooth>
            <a
              key={item.label}
              className={`nav-link ${activeItem === item.label ? "nav-link-active" : ""}`}
              onClick={() => handleClick(item.label)}
            >
              <span className="nav-link-cmd">{item.cmd}/</span>
              <span>{item.label.toLowerCase()}</span>
              {activeItem === item.label && (
                <motion.div
                  layoutId="nav-indicator"
                  className="nav-indicator"
                />
              )}
            </a>
            </ScrollIntoView>
          ))}
        </div>

        <div className="nav-status">
          <span className="nav-status-dot" />
          <span className="nav-status-text">online</span>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <ExpandMoreIcon sx={{ fontSize: 20 }} /> : <MenuIcon sx={{ fontSize: 20 }} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-menu"
          >
            
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`nav-mobile-link ${activeItem === item.label ? "nav-mobile-link-active" : ""}`}
                onClick={() => handleClick(item.label)}
              >
                <span className="nav-link-cmd">{item.cmd}/</span>
                {item.label.toLowerCase()}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
