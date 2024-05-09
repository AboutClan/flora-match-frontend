import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideInFromRight: "slideInFromRight 0.5s ease-out forwards",
      },
      fontFamily: {
        apple: ['"Pretendard",sans-serif'],
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        main: "#FFBB42",
        "sub-green": "#D5E14F",
        "sub-pink": "#F49291",
        "gray-1": "#FAFAFA",
        "gray-2": "#E3E3E3",
        "gray-3": "#BBBBBB",
        "gray-4": "#818181",
        "gray-5": "#545454",
        "gray-6": "#1D1D1D",
      },
    },
  },
  plugins: [],
};
export default config;
