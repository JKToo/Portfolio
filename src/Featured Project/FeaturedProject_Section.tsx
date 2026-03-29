import { motion } from "framer-motion";
import TerminalCard from "./TerminalCard";
import PhoneMockup from "./PhoneMockup";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import LayersIcon from '@mui/icons-material/Layers';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import BoltIcon from '@mui/icons-material/Bolt';
import iPhone_Video from "../Sources/iphone_video.mp4"

const features = [
  { icon: BoltIcon, label: "Fast & Efficient", desc: "Built for speed and simplicity. Optimized to deliver instant results with minimal input" },
  { icon: LayersIcon, label: "All-in-One", desc: "Multiple tools in a single app. Designed to simplify common tasks and eliminate the need for multiple apps" },
  { icon: SmartphoneIcon, label: "Usage Insights", desc: "Built-in tracking & identify your most valuable utilities" },
];

const techStack = ["Java", "XML", "Android Studio", "Android SDK", "Gradle", "Jetbpack Compose"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedProject = () => {
  return (
    <section className="relative py-24 overflow-hidden grid-bg min-h-screen">
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/10" />

      <div className="max-w-6xl mx-auto relative z-10 px-6">
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
            <span>cat featured_project.md</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
            <span className="text-foreground">Featured </span>
            <span className="text-primary text-glow">Project</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <TerminalCard path="~/projects/omni-tool">
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-2">
                      <span className="text-terminal-green">$</span> cat README.md
                    </p>
                    <h2 className="text-3xl font-bold font-display text-foreground mb-2">
                      Omni Tool
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      A <span className="text-primary font-semibold">versatile</span> all-in-one
                      app designed to simplify your life. Combining multiple utilities into a
                      single, beautifully crafted interface that works across all your devices.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {features.map((f) => (
                      <div
                        key={f.label}
                        className="bg-secondary/50 border border-border/50 rounded-md p-3 space-y-1"
                      >
                        <f.icon className="w-4 h-4 text-primary" />
                        <p className="font-mono text-sm text-foreground font-medium">{f.label}</p>
                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <LinkIcon className="w-4 h-4" /> Store Page
                    </a>
                    {/* <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border font-mono text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <GitHubIcon className="w-4 h-4" /> Source Code
                    </a> */}
                  </div>
                </div>
              </TerminalCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TerminalCard path="~/projects/omni-tool/stack.json">
                <div className="space-y-3">
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-terminal-green">$</span> jq '.technologies' stack.json
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-md bg-secondary border border-border font-mono text-xs text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono text-xs text-terminal-green">
                    ✓ {techStack.length} technologies loaded
                  </p>
                </div>
              </TerminalCard>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col items-center gap-6"
          >
            <TerminalCard path="~/preview/mobile-demo.mp4" className="w-full">
              <div className="flex justify-center py-4">
                <PhoneMockup videoSrc={iPhone_Video}/>
              </div>
              <p className="font-mono text-xs text-center text-muted-foreground mt-2">
                <span className="text-terminal-green">▶</span> Mobile app showcase
              </p>
            </TerminalCard>

            <div className="font-mono text-xs text-muted-foreground text-center space-y-1">
              <div className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                <span>Project Status: <span className="text-terminal-green">Active</span></span>
              </div>
              <p>Last updated: March 2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
