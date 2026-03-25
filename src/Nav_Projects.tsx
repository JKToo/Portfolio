import { motion } from "framer-motion";


/* ── Floating Shapes ── */
const FloatingShapes = () => (
  <div className="floating-shapes">
    <div className="scan-line" />
    <div className="shape shape-square float-anim" style={{ top: "15%", right: "10%", transform: "rotate(45deg)" }} />
    <div className="shape shape-circle float-reverse" style={{ top: "60%", right: "20%" }} />
    <div className="shape shape-square-sm float-reverse" style={{ top: "30%", left: "5%", transform: "rotate(12deg)" }} />
    <div className="shape shape-dot-accent float-anim" style={{ bottom: "20%", left: "15%" }} />
    <div className="shape shape-dot float-anim" style={{ top: "10%", left: "40%" }} />
    <div className="shape shape-dot-sm float-reverse" style={{ top: "70%", right: "40%" }} />
    <div className="corner-tl" />
    <div className="corner-br" />
  </div>
);
const projects = [
  {
    title: "Campus Cravings",
    date: "December 12, 2024",
    description: "Web application enabling students to utilize a delivery service & earn extra income.",
    tech: ["Rails", "Ruby", "Postgres", "CSS", "HTML"],
  },
  {
    title: "Pluvio",
    date: "December 1, 2022",
    description: "Movie-based social media platform. Incorporated an AI recommendation system.",
    tech: ["MongoDB", "Express", "React", "NodeJS", "Jupyter"],
  },
  {
    title: "First Come First Serve",
    date: "August 25, 2020",
    description: "Lead group for web development. Interviewed client for website expectations.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
  },
  {
    title: "Study Peer",
    date: "September 5, 2021",
    description: "Discord Bot for self studies. Translates languages and tests users.",
    tech: ["Python", "REST API"],
  },
  {
    title: "Portfolio Website",
    date: "April, 2020",
    description: "Source code for this website using React.js.",
    tech: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    title: "Cooking101",
    date: "February, 2022",
    description: "Recipe sharing platform with step-by-step cooking guides.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Omni Tool",
    date: "September 26, 2021",
    description: "Multi-purpose calculator and conversion tool.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Quizlet API",
    date: "May 3, 2022",
    description: "API integration for flashcard-based learning system.",
    tech: ["Python", "REST API"],
  },
  {
    title: "Hexadecimal Calculator",
    date: "October 3, 2022",
    description: "Calculator supporting hexadecimal arithmetic operations.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Tic Tac Toe",
    date: "November 7, 2022",
    description: "Classic game with AI opponent implementation.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden grid-bg">
      <FloatingShapes />
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/10" />

      <div className="relative z-10 w-full px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 space-y-3"
        >
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground" style={{marginLeft:"3%"}}>
            <span className="text-terminal-green">➜</span>
            <span className="text-primary">~</span>
            <span>ls -la ~/projects/</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight" style={{textAlign:"left", marginLeft:"3%"}}>
            <span className="text-foreground">My </span>
            <span className="text-primary text-glow">Work</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-green/70" />
                <span className="ml-2 text-xs font-mono text-muted-foreground truncate">
                  ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>

              <div className="p-5 space-y-4">
                {/* Title & date */}
                <div>
                  <h3 className="text-lg font-bold font-display text-primary group-hover:text-glow transition-all">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-1">{project.date}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Tech stack */}
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-2">
                    <span className="text-terminal-green">$</span> cat stack.txt
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-secondary border border-border text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
