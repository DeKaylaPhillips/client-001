import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';


// tailwind.config.js
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            title: ['"Playfair Display SC"', "serif"],
        },
    },
  },
  plugins: [
    daisyui,
  ],
}

export default config;
