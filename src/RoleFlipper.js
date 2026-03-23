import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = ["Developer", "Software Engineer", "Problem Solver", "Builder"];

const RoleFlipper = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-muted-foreground font-body text-lg md:text-xl">{"<"}</span>
      <span className="relative inline-block h-[1.3em] overflow-hidden min-w-[200px] md:min-w-[280px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-0 text-primary font-display font-bold text-lg md:text-xl"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="text-primary font-mono text-lg md:text-xl"
      >
        |
      </motion.span>
      <span className="text-muted-foreground font-body text-lg md:text-xl">{"/>"}</span>
    </span>
  );
};

export default RoleFlipper;
