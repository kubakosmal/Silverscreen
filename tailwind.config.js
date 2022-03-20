module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      lato: ["Lato", "sans-serif"],
      ibm: ["IBM Plex Sans Thai Looped", "sans-serif"],
      sora: ["Sora", "sans-serif"],
      oxygen: ["Oxygen", "sans-serif"],
      istok: ["Istok Web", "sans-serif"],
      fatface: ["Abril Fatface", "cursive"],
      crete: ["crete", "serif"],
    },

    extend: {
      boxShadow: {
        fadeBackground: "0 -10px 18px 18px #18181b inset",
        logoShadow: "1px 0px 0px 0px white",
      },
      colors: {
        "indigo-dye": "#00487C",
        bittersweet: "#FF6663",
        magnolia: "#FCF7FF",
        charcoal: "#2F4858",
        xiketic: "#020122",
        background: "#2c3440",
        primary: "#F2F2F2",
        secondary: "#34D1BF",
        "red-pigment": "#FF0022",
        "red-salsa": "#F03A47",
        crayola: "#FFE66D",
        "blue-jeans": "#20A4F3",
        "radical-red": "#FF3366",
        "slate-1000": "#141414",
        "slate-1100": "#0A0A0A",
      },
      dropShadow: {
        "3xl": "0 1px 2px rgba(0, 0, 0, .8)",
      },
    },
  },
};
