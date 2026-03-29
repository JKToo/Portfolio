import { forwardRef, ReactNode } from "react";

interface TerminalCardProps {
  path: string;
  children: ReactNode;
  className?: string;
}

const TerminalCard = forwardRef<HTMLDivElement, TerminalCardProps>(
  ({ path, children, className = "" }, ref) => (
    <div ref={ref} className={`bg-card border border-border rounded-lg overflow-hidden border-glow ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-terminal-green/70" />
        <span className="ml-2 text-xs font-mono text-muted-foreground">{path}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
);

TerminalCard.displayName = "TerminalCard";

export default TerminalCard;
