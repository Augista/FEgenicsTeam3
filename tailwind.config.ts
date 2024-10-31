import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["(var(--font-kumbh))"],
      },
      colors: {
      background: {
        DEFAULT: '#CDDDFF',
      },
      button: {
        DEFAULT: '#407BFF',
      },
      light: {
        DEFAULT: '#ecf4fe',
        hover: '#e3eefe',
        active: '#c5dcfc',
      },
      normal: {
        DEFAULT: '#458ff6',
        hover: '#3e81dd',
        active: '#3772c5',
      },
      dark: {
        DEFAULT: '#346bb9',
        hover: '#29569',
        active: '#1f406f',
      },
      darker: '#183256',
    },
    },
  },
  plugins: [],
};
export default config;
