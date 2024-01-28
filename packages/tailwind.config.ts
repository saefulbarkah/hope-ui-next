import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        "sidebar-mobile": "var(--w-sidebar-mobile)",
        "sidebar-desktop": "var(--w-sidebar-desktop)",
      },
      colors: {
        primary: {
          DEFAULT: "#3A57E8",
          light: "#8095FF", // Lighter version
          dark: "#001C7A", // Darker version
        },
        secondary: {
          DEFAULT: "#6C757D",
          light: "#AEB4B9", // Lighter version
          dark: "#40484F", // Darker version
        },
        success: {
          DEFAULT: "#1AA053",
          light: "#4BD983", // Lighter version
          dark: "#006D2C", // Darker version
        },
        danger: {
          DEFAULT: "#C03221",
          light: "#FF6E5D", // Lighter version
          dark: "#7F1D0F", // Darker version
        },
        info: {
          DEFAULT: "#079AA2",
          light: "#4FCED2", // Lighter version
          dark: "#00656C", // Darker version
        },
        warning: {
          DEFAULT: "#F16A1B",
          light: "#FFA53D", // Lighter version
          dark: "#C34E0F", // Darker version
        },
        light: {
          DEFAULT: "#DEE2E6",
          light: "#F4F6F9", // Lighter version
          dark: "#BCC4CC", // Darker version
        },
        dark: {
          DEFAULT: "#212529",
          light: "#495057", // Lighter version
          dark: "#000000", // Darker version
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
