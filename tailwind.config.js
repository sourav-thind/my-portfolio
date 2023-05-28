/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {colors:{
      drbgclr:'#262a33', 
      drfgclr:'#43ffaf', 
      drwht:'#d9ebe3', 
      drgry:'#4d606f'
    }},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tailwind-scrollbar"),
  ],
}
