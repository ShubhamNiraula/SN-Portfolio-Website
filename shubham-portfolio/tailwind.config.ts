import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#06111f",
          900: "#081827",
          800: "#0d2236"
        },
        electric: "#69baff"
      },
      fontFamily: {
        sans: ["Open Sans", "Arial", "sans-serif"],
        mono: ["DM Mono", "monospace"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" }
        },
        gridShift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-8px, 8px, 0)" }
        }
      },
      animation: {
        "float-slow": "float 5s ease-in-out infinite",
        "float-slow-reverse": "float 6s ease-in-out infinite reverse",
        "grid-shift": "gridShift 12s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
