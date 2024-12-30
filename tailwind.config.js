/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        drbgclr:'#262a33', 
        drfgclr:'#43ffaf', 
        drwht:'#d9ebe3', 
        drgry:'#4d606f'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

