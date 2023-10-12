import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-color-grey": "#EEEEEE",
        "primary-color": "#5F24A0",
        "secondary-color": "#FFC269",
      },
      colors: {
        "primary-color": "#5F24A0",
        "secondary-color": "#FFC269",
      },
    },
  },
  plugins: [],
};
export default config;
