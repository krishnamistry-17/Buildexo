/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "#000000",
          blackprimary: "#161616",
          blacksecondary: "#1F1F1F",
          blacktertiary: "#222D39",
          blackquaternary: "#0C0A0A",
          blackquinary: "#161D39",
          blackpara: "#1C1D20",
          blackfaq: "#182022",
        },
        secondary: "#FFFFFF",
        tertiary: "#F7F7F7",
        orange: "#FF6600",
        red: "#FF0000",
        gray: {
          gray: "#494949",
          lightgray: "#F5F5F5",
          graytext: "#666666",
          graynumber: "#EEF3FF",
          graysecondary: "#505050",
          grayborder: "#D3D3D3",
          graybg: "#F2F2F2",
          graytabborder: "#E0DDE5",
        },
        blue: {
          lightblue: "#F1F4FB",
          darkblue: "#0E111A",
          light: "#172234",
        },
        cream: {
          primary: "#F9F4F4",
          secondary:"#FFEFE6"
        },
        purple: {
          primary: "#140626",
          secondary: "#200B3A",
          light: "#301256",
          lightest: "#54357D",
        },
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      "exo-regular": ["exo-regular", "sans-serif"],
      "exo-medium": ["exo-medium", "sans-serif"],
      "exo-bold": ["exo-bold", "sans-serif"],
      "exo-extrabold": ["exo-extrabold", "sans-serif"],
      "exo-semibold": ["exo-semibold", "sans-serif"],
    },
  },
  plugins: [],
};
