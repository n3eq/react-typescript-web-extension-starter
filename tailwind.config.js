module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/popup.html"],
  content: [
      "./src/**/*.{html,js,tsx}",
      "./popup/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}