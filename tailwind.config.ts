import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
      screens: {
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      height: {
        mscreen: "100svh",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          muted: "var(--background-muted)",
          "more-muted": "var(--background-more-muted)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--foreground-muted)",
          "more-muted": "var(--foreground-more-muted)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          muted: "var(--primary-muted)",
          "more-muted": "var(--primary-more-muted)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          muted: "var(--secondary-muted)",
          "more-muted": "var(--secondary-more-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          muted: "var(--accent-muted)",
          "more-muted": "var(--accent-more-muted)",
        },
        gold: "#D4AF37",
      },
      fontFamily: {
        sans: ["Bebas Neue", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "gap-xxl": "var(--gap-xxl)",
        "gap-xl": "var(--gap-xl)",
        "gap-lg": "var(--gap-lg)",
        "gap-md": "var(--gap-md)",
        "gap-sm": "var(--gap-sm)",
        "gap-xs": "var(--gap-xs)",
        "gap-xxs": "var(--gap-xxs)",
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideDown: "slideDown 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
