/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
			poppins: ['Poppins', 'sans-serif']
		},
    extend: {
      colors: {
        primary: {
          100: '#07E3D0',
          200: '#00CEBB',
          300: '#00847E',
        },
        dark: {
          100: '#363636',
          200: '#2E2E2E',
          300: '#202020',
          400: '#1F1F1F',
          500: '#141414',
          600: '#060606',
          900: '#0B0B0F',
        }
      }
    },
  },
  plugins: [],
}

