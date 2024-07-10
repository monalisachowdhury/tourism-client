/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'nav'      : '#0891b2',
      'nav2'     : '#334155',
      'p-text'   : 'rgb(100, 116, 139)', 
    }
  },
  plugins: [
    require('daisyui'),
  ]
}

