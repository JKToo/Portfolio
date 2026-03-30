import { motion } from "framer-motion";

const commits = [
  {
    hash: "a3f7c2d",
    branch: "main",
    tag: "latest",
    message: "continued: Junior Systems Administrator @ NYC Tourism",
    date: "Present",
    type: "career",
  },
  {
    hash: "e91b4f8",
    branch: "education",
    message: "attained: completed B.A. Computer Science",
    date: "2023",
    type: "education",
  },
  {
    hash: "7d2ca19",
    branch: "career",
    message: "refactor: transitioned to junior systems administration",
    date: "2022",
    type: "career",
  },
  {
    hash: "b8e3f51",
    branch: "education",
    message: "advanced: completed A.S. Computer Science",
    date: "2021",
    type: "education",
  },
  {
    hash: "b8e3f51",
    branch: "career",
    message: "debugged: interned as software engineer @ Waitron",
    date: "2019",
    type: "education",
  },
  {
    hash: "4fc19a2",
    branch: "main",
    tag: "v1.0",
    message: "init: started coding journey",
    date: "2018",
    type: "career",
  },
];

const GitLogTimeline = () => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden border-glow">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-terminal-green/70" />
        <span className="ml-2 text-xs font-mono text-muted-foreground">~/career</span>
      </div>

      <div className="p-6">
        <p className="font-mono text-xs text-muted-foreground mb-6">
          <span className="text-terminal-green">$</span> git log --oneline --graph --decorate
        </p>

        <div className="relative ml-3">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-6">
            {commits.map((commit, i) => (
              <motion.div
                key={commit.hash}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative pl-7"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                    commit.type === "career"
                      ? "bg-primary border-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                      : "bg-accent border-accent shadow-[0_0_8px_hsl(var(--accent)/0.5)]"
                  }`}
                />

                {/* Hash + branch + tag */}
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="font-mono text-sm text-primary">{commit.hash}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    ({commit.branch})
                  </span>
                  {commit.tag && (
                    <span className="font-mono text-xs px-1.5 py-0.5 border border-primary/40 rounded text-primary bg-primary/10">
                      {commit.tag}
                    </span>
                  )}
                </div>

                {/* Message */}
                <p className="font-mono text-sm text-foreground font-medium">
                  {commit.message}
                </p>

                {/* Date */}
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  {commit.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitLogTimeline;
