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
        dark: {
          100: '#003051',
        }
      }
    },
  },
  plugins: [],
}

