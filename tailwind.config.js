/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#e7e7e7",
        black: "#000",
        slateblue: {
          "100": "#603ebe",
          "200": "#5e3db3",
        },
        silver: "#c2c2c2",
        ghostwhite: "#f5f4f9",
        mediumslateblue: "#8f6be8",
        gray: "#090c35",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "10xs-5": "2.5px",
      },
    },
    fontSize: {
      "71xl": "90px",
      "31xl": "50px",
      "17xl": "36px",
      "9xl": "28px",
      xl: "20px",
      lg: "18px",
      sm: "14px",
      mini: "15px",

      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
