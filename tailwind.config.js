/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/.vite/deps/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules//.vite/deps/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary":"#38A626",
      "secondary": "#1E1E1E"
    },

    fontFamily: {
      "font-primary": ["Poppins", "sans-serif"],
      "astrapi-billing": ["Inter", "sans-serif"]
    },
  },
  plugins: [],
});

