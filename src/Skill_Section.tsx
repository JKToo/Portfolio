import { motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import LayersIcon from '@mui/icons-material/Layers';


const Languages = ["Java", "C++", "Python", "HTML", "Javascript", "Ruby", "PHP", "CSS", "Swift", "SQL"];
const Tools = ["Git", "VSCode", "Visual Studio", "Android Studio", "Xcode", "Netlify", "MySQL", "MongoDB", "PhpMyAdmin", "Postgres", "PowerShell", "Linux", "Figma", "Active Directory", "Sharepoint", "RMM", "MDM", "Azure", "Intune"];
const Frameworks = ["React", "Ruby on Rails", "Express", "Material UI"];

const categories = [
  { title: "Languages", icon: CodeIcon, items: Languages, command: "ls ~/skills/languages" },
  { title: "Tools", icon: BuildIcon, items: Tools, command: "ls ~/skills/tools" },
  { title: "Frameworks", icon: LayersIcon, items: Frameworks, command: "ls ~/skills/frameworks" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="corner-tl" />
      <div className="corner-br" />

      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="terminal-prompt">
            <span className="prompt-arrow">➜</span>
            <span className="prompt-tilde">~</span>
            <span>cat skills.md</span>
          </div>
          <h2 className="section-title">
            <span>My </span>
            <span className="text-glow">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="categories-list"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="category-card"
            >
              <div className="card-header">
                <div className="dot red" />
                <div className="dot yellow" />
                <div className="dot green" />
                <span className="card-path">~/skills/{cat.title.toLowerCase()}</span>
              </div>

              <div className="card-body">
                <div className="category-title-row">
                  <cat.icon className="category-icon" />
                  <h3 className="category-title">{cat.title}</h3>
                  <span className="item-count">{cat.items.length} items</span>
                </div>

                <p className="command-line">
                  <span className="prompt-dollar">$</span> {cat.command}
                </p>

                <div className="chips-grid">
                  {cat.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                      className="skill-chip"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <p className="scan-complete">
                  ✓ {cat.items.length} {cat.title.toLowerCase()} loaded
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
