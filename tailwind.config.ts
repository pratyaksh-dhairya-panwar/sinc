import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FBFBF3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // fontFamily: {
      //   helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      // },
      fontFamily: {
        objectivity: ["Objectivity", "sans-serif"],
      },
      colors: {
        primary: "#FBFBF3", // Add your bg-primary color here
        secondary: "#E9E5FC",
      },
      boxShadow: {
        primary: "rgba(100, 100, 111, 1) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};

export default config;
