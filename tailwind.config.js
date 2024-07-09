/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "black-1000": "#101C1E",
        "black-2000": "#243E42",
        "black-3000": "#292D2E",
        "black-4000": "#3E4546",
        "gray-1000": "#ACCDD2",
        "gray-2000": "#63A0AB",
        "gray-3000": "#69c3d3",
        "gray-4000": "#88B6BF",
        "gray-5000": "#3E4546",
        "gray-6000": "#A3A3A3",
        "gray-7000": "#D5D5D5",
        "gray-8000": "#E1E1E1",
        "gray-9000": "#979797",
        "light-1000": "#F5F9FA",
        "green-1000": "#DCEAEC",
        "green-2000": "#CBD8DB",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      boxShadow: {
        "1xl": "2px 7px 10px 0px rgba(36, 62, 66, 0.12)",
        "2xl": "2.937px 10.279px 14.684px 0px rgba(36, 62, 66, 0.12);",
      },
      screens: {
        xss: "375px",
        // => @media (min-width: 375px) { ... }

        xs: "414px",
        // => @media (min-width: 414px) { ... }

        sm: "576px",
        // => @media (min-width: 575px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",

        // => @media (min-width: 1440px) { ... }
        "2xl": "1366px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1600px",
        // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
