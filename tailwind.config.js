export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1600px",
        "margin": "auto" , // 👈 your global width
      },
    },
  },
  plugins: [],
}