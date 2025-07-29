// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: "iranyekan",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
