import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wallpaper from "../Sources/linuxmint.jpg";
import avatar from "../Sources/avatar.jpg";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface LoginScreenProps {
  onComplete: () => void;
}

const PASSWORD_DOTS = "••••••••••";
const TYPE_DELAY = 1500; // start typing after 1.5s
const TRANSITION_DELAY = 3500; // transition after typing

const LoginScreen = ({ onComplete }: LoginScreenProps) => {
  const [typedPassword, setTypedPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Clock
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-type password
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < PASSWORD_DOTS.length) {
          setTypedPassword(PASSWORD_DOTS.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsAuthenticating(true);
            setTimeout(onComplete, TRANSITION_DELAY);
          }, 400);
        }
      }, 100);
      return () => clearInterval(interval);
    }, TYPE_DELAY);
    return () => clearTimeout(startTimeout);
  }, [onComplete]);

  const timeStr = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateStr = currentTime.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen w-full relative overflow-hidden select-none">
      {/* Wallpaper */}
      <img
        src={wallpaper}
        alt="Desktop wallpaper"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Blur Wallpaper */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />

      {/* Clock - top area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-[12%] inset-x-0 text-center z-10"
      >
        <div className="text-6xl md:text-8xl font-light text-foreground tracking-tight">
          {timeStr}
        </div>
        <div className="text-lg md:text-xl text-muted-foreground mt-2 font-light">
          {dateStr}
        </div>
      </motion.div>

      {/* Login card - centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center gap-4 mt-16"
        >
            <img
              src={avatar}
              alt="User avatar"
              className="w-24 h-24 rounded-full bg-muted/60 border-2 border-border/50 overflow-hidden flex items-center justify-center"
              width={512}
              height={512}
            />

          {/* Username */}
          <h2 className="text-2xl font-light text-foreground">Justin</h2>

          {/* Password field */}
          <div className="relative w-72 login-theme">
            <div
              className="w-full h-10 rounded-full px-5 flex items-center text-sm text-foreground"
              style={{
                background: "hsl(var(--login-glass) / 0.7)",
                border: "1px solid hsl(var(--login-glass-border) / 0.5)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="tracking-widest">
                {typedPassword || (
                  <span className="text-muted-foreground">Password</span>
                )}
              </span>
              <button
                className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: typedPassword
                    ? "hsl(var(--primary))"
                    : "hsl(var(--muted) / 0.5)",
                }}
              >
                <ChevronRightIcon className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Auth status */}
          {isAuthenticating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <div className="w-4 h-4 border-2 border-muted-foreground/40 border-t-primary rounded-full animate-spin" />
              Authenticating…
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4"
      >
        <div className="text-xs text-muted-foreground font-light">
          Linux Mint 22 Cinnamon
        </div>
        <div className="flex items-center gap-4">
          <AccessibleIcon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
          <NetworkWifiIcon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
          <VolumeUpIcon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
          <PowerSettingsNewIcon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
        </div>
      </motion.div>
    </div>
  );
};

export default LoginScreen;
