import { motion } from "framer-motion";
// import FloatingShapes from "./FloatingShapes";
import './index.css'; 
import './CSS/projects.css'


const projects = [
  {
    title: "Campus Cravings",
    date: "December 12, 2024",
    description:
      "Full-stack delivery web-based platform connecting students with local food options, allowing users to place orders while enabling others to earn income as campus-based drivers.",
    tech: ["Rails", "Ruby", "Postgres", "CSS", "HTML"],
    link: "https://github.com/JKToo/Campus-Cravings",
  },
  {
    title: "Pluvio",
    date: "December 1, 2022",
    description:
      "Social media platform centered around movies, featuring user profiles, reviews, and an AI-powered recommendation system to personalize content discovery.",
    tech: ["MongoDB", "Express", "React", "NodeJS", "Jupyter"],
    link: "https://github.com/JKToo/pluvio",
  },
  {
    title: "First Come First Serve",
    date: "August 25, 2020",
    description:
      "Client-focused web development project where I led a team, gathered requirements through direct interviews, and delivered a tailored website solution based on business needs.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    link: "https://github.com/JKToo/Laundry-Reservation",
  },
  {
    title: "Study Peer",
    date: "September 5, 2021",
    description:
      "Interactive Discord bot designed to assist with studying, offering language translation, quizzes, and automated learning tools through API integrations.",
    tech: ["Python", "REST API"],
    link: "https://github.com/JKToo/Study-Peer-Discord-Bot",
  },
  {
    title: "Portfolio Website",
    date: "April, 2020",
    description:
      "Personal portfolio website built with React, showcasing projects, skills, and experience with a focus on responsive design and modern UI/UX.",
    tech: ["HTML", "CSS", "Javascript", "React", "Tailwind"],
    link: "https://github.com/JKToo/Portfolio",
  },
  {
    title: "Cooking101",
    date: "February, 2022",
    description:
      "Recipe-sharing platform where users can browse, upload, and follow step-by-step cooking guides, with a focus on user-friendly navigation and content organization.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/JKToo/Cooking101",
  },
  {
    title: "ZuKit",
    date: "September 26, 2021",
    description:
      "Multi-functional utility tool offering various calculators and unit conversions within a single, streamlined interface for everyday problem solving.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "",
  },
  {
    title: "Quizlet API",
    date: "May 3, 2022",
    description:
      "Integrated Quizlet’s API to build a flashcard-based learning system, enabling users to access, create, and study sets programmatically.",
    tech: ["Python", "REST API"],
    link: "https://github.com/JKToo/Quizlet_API",
  },
  {
    title: "Hexadecimal Calculator",
    date: "October 3, 2022",
    description:
      "Web-based calculator supporting hexadecimal arithmetic, designed to simplify base-16 operations for developers and students.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/JKToo/Hexadecimal_Calculator",
  },
  {
    title: "Tic Tac Toe",
    date: "November 7, 2022",
    description:
      "Classic Tic Tac Toe game featuring an AI opponent with basic decision-making logic, providing an interactive and responsive gameplay experience.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/JKToo/Tic-Tac-Toe",
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
    <section className="relative py-24 overflow-hidden grid-bg projects-section">
      {/* <FloatingShapes /> */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/10" />

      <div className="container relative z-10 px-6 projects-container">
        {/* Header */}
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
            <span>ls -la ~/projects/</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 projects-grid"
        >
          {projects.map((project) => (
            <a key={project.title}
               href={project.link}
               target="_blank" 
               
            >
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="h-full project-card group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
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
                <p className="text-sm text-muted-foreground leading-relaxed text-left">{project.description}</p>

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
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
