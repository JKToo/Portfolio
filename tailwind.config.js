/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(220, 20%, 4%)",
        foreground: "hsl(210, 20%, 92%)",
        primary: "hsl(175, 80%, 50%)",
        accent: "hsl(280, 70%, 60%)",
        secondary: "hsl(220, 16%, 14%)",
        card: "hsl(220, 18%, 8%)",
        border: "hsl(220, 14%, 16%)",
        muted: "hsl(215, 12%, 50%)",
        destructive: "hsl(0, 70%, 55%)",

        // these two are IMPORTANT (you're using them)
        "muted-foreground": "hsl(215, 12%, 50%)",
        "terminal-green": "hsl(142, 70%, 55%)",
      },
    },
  },
  plugins: [],
};
