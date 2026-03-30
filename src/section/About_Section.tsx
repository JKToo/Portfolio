import { motion } from "framer-motion";
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import '../index.css'; 
import emoji from '../Sources/emoji.gif'
import "../CSS/about.css";
import GitLogTimeline from "../components/GitLogTimeline";


const infoItems = [
  { icon: PlaceIcon, label: "LOCATION", value: "New York City" },
  { icon: SchoolIcon, label: "DEGREE", value: "B.A. Computer Science" },
  { icon: SportsEsportsIcon, label: "HOBBIES", value: "Programming | Gaming" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden grid-bg about-section">
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/10" />

      <div className="max-w-6xl mx-auto relative z-10 px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 space-y-3"
        >
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-terminal-green">➜</span>
            <span className="text-primary">~</span>
            <span>cat about.md</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            <span className="text-foreground">About </span>
            <span className="text-primary text-glow">Me</span>
          </h2>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Profile card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg overflow-hidden border-glow"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-terminal-green/70" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">~/about/profile</span>
              </div>

              <div className="p-6 space-y-6 about-container">
                <div className="flex items-center gap-4 ">
                  <div className=" w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <img
                      src={emoji}
                      alt="emoji"
                      className="w-full h-full object-cover"
                      style={{minWidth:"150%", marginBottom:"40%"}}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground profile-name">Justin Too</h3>
                    <p className="font-mono text-sm text-primary profile-role">Junior Systems Administrator</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {infoItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 font-mono text-sm">
                      <item.icon className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-muted-foreground">{item.label}:</span>
                      <span className="text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary/30 rounded-md p-4 border border-border/50">
                  <p className="font-mono text-xs text-muted-foreground mb-2">// education</p>
                  <p className="text-sm text-foreground">Associates in Computer Science</p>
                  <p className="text-sm text-foreground">Bachelors in Computer Science</p>
                </div>

                <div className="flex gap-3">
                  <a href="https://github.com/jktoo" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border font-mono text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors">
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/justintoo" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border font-mono text-sm text-foreground hover:border-accent/50 hover:text-accent transition-colors">
                    <LinkedInIcon className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

                    {/* Right — Skills Card */}
         <GitLogTimeline/>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
