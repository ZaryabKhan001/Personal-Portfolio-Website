/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#f4f6fb",
        surface: "#ffffff",
        ink: {
          DEFAULT: "#0b1630",
          body: "#34405a",
          muted: "#56637c",
        },
        line: {
          DEFAULT: "#e2e7f0",
          strong: "#c9d2e1",
        },
        accent: {
          DEFAULT: "#2447e6",
          hover: "#1a37c2",
          soft: "#eaefff",
        },
        teal: {
          DEFAULT: "#0891b2",
          deep: "#0a6f88",
          soft: "#e3f6fb",
          light: "#7fdcf0",
        },
        navy: {
          DEFAULT: "#0a1433",
          2: "#13235a",
          muted: "#b8c3dd",
        },
        success: {
          DEFAULT: "#0f8a5f",
          soft: "#e3f5ed",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      backgroundImage: {
        brand: "linear-gradient(120deg, #2447e6 0%, #3b6cf6 45%, #06b6d4 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 22, 48, .06), 0 2px 8px rgba(11, 22, 48, .04)",
        "card-lg": "0 2px 4px rgba(11, 22, 48, .04), 0 12px 32px rgba(11, 22, 48, .08)",
        glow: "0 24px 60px rgba(36, 71, 230, .18)",
        button: "0 8px 20px rgba(36, 71, 230, .28)",
        form: "0 30px 70px rgba(0, 0, 0, .35)",
      },
      maxWidth: {
        page: "1244px",
      },
    },
  },
  plugins: [],
};
