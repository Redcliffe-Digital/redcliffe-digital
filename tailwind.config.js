/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f1f4f9",
          100: "#dde4ee",
          200: "#bccadc",
          300: "#92a7c3",
          400: "#6884a7",
          500: "#4a678c",
          600: "#3a5273",
          700: "#2f435d",
          800: "#1f2f44",
          900: "#0f1d30",
          950: "#08111e",
        },
        brand: {
          navy: "#0A2342",
          "navy-deep": "#061629",
          red: "#A8201A",
          "red-deep": "#7A1612",
          cyan: "#2EC4B6",
          "cyan-soft": "#7CDDD3",
          cream: "#F8F7F4",
          stone: "#E8E5DD",
          ink: "#0E0F12",
          slate: "#5A6373",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1200px",
        prose: "68ch",
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.18em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10, 35, 66, 0.04), 0 4px 16px rgba(10, 35, 66, 0.06)",
        ring: "0 0 0 1px rgba(10, 35, 66, 0.08)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(10,35,66,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,35,66,0.06) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
