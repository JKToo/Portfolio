import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./CSS/footer.css";

const socialLinks = [
  { icon: <GitHubIcon sx={{ fontSize: 20 }} />, href: "https://github.com/JKToo", label: "GitHub" },
  { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, href: "https://www.linkedin.com/in/justin-k-too/", label: "LinkedIn" },
  { icon: <EmailIcon sx={{ fontSize: 20 }} />, href: "mailto:justinktoo1998@gmail.com", label: "Email" },
];

const techStack = ["React", "TypeScript", "Material UI", "Framer Motion"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="footer-top"
        >
          <div className="footer-tagline">
            <h3>Let's connect</h3>
            <p>Open to opportunities, collaborations, and interesting conversations.</p>
          </div>

          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer-social-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="footer-divider" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="footer-bottom"
        >
          <div className="footer-tech">
            <CodeIcon sx={{ fontSize: 14 }} className="footer-tech-icon" />
            <span>Built with</span>
            {techStack.map((tech, i) => (
              <span key={tech} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <span className="footer-tech-name">{tech}</span>
                {i < techStack.length - 1 && (
                  <span className="footer-tech-dot">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="footer-copyright">
            © {currentYear} — Made with
            <FavoriteIcon sx={{ fontSize: 12 }} className="footer-heart" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
