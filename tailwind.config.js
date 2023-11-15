/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors :{
        'dark-blue' : '#000842',
        'primary-blue' : '#0C21C1',
        'light-blue' : '#3D37F1',
        'placeholder-blue' : '#000842',
        'grey-custom': '#ABABAB'
      },
      boxShadow: {
        'auth-button-shadow': '0 0px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      }
      
    },
    
  },
  plugins: [],
}
