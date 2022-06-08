const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    // safelisting colors in order to render them on tail wind css 
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],
    darkMode:false,
    theme: {
      extend: {
        fontFamily:{
          sans:["Open Sans"]
        },
        gridTemplateColumns:{
          "1/5": "1fr 5fr"
        }
      },
    },
    plugins: [require("@tailwindcss/forms")],
  }