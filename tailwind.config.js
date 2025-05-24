/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "robert-regular": ["robert-regular", "sans-serif"]
      },
      colors: {
        Primary: "#0F172A",
        Primary2: "#322C41",
        Border: "#4B465C",
        Border2: "#e5e7eb",

        // backgrounds
        Bg1: "#FFFFFF",
        Bg2: "#f5f5f7"
      }
    }
  },
  plugins: []
};
