import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    screens: {
      sm: "375px",
      lg: "768px",
    },
    colors: {
      white: "#ffffff",
      veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
      desaturatedDarkBlue: "hsl(214, 17%, 51%)",
      grayishBlue: "hsl(212, 23%, 69%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
    backgroundImage: {
      mobile: "url('/assets/bg-mobile.svg')",
      desktop: "url('/assets/bg-desktop.svg')",
    },
  },
};

export default config;
