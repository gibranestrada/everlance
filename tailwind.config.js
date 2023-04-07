/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: { 128: "60rem" },
      maxWidth: { cardMax: "65rem", usersMax: "75rem" },
    },
  },
  plugins: [],
};
