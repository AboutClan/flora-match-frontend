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
      fontFamily: {
        apple: ['"Pretendard",sans-serif'],
      },
      fontSize: {
        xxs: "0.714rem",
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
