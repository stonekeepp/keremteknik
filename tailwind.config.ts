import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary": "#ffffff",
        "inverse-on-surface": "#f3f0ef",
        secondary: "#a63500",
        "on-primary-fixed": "#001b3c",
        "secondary-container": "#d04400",
        "on-background": "#1c1b1b",
        primary: "#001e40",
        "secondary-fixed": "#ffdbcf",
        "on-error-container": "#93000a",
        "on-primary-container": "#799dd6",
        "surface-container-highest": "#e5e2e1",
        "tertiary-container": "#313335",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#dcd9d9",
        "surface-container": "#f0eded",
        "on-secondary-container": "#fffbff",
        "secondary-fixed-dim": "#ffb59c",
        "on-secondary-fixed-variant": "#822700",
        "primary-fixed": "#d5e3ff",
        error: "#ba1a1a",
        outline: "#737780",
        "on-secondary": "#ffffff",
        "on-tertiary-container": "#9a9b9d",
        surface: "#fcf9f8",
        "inverse-primary": "#a7c8ff",
        "error-container": "#ffdad6",
        "primary-container": "#003366",
        "on-error": "#ffffff",
        "on-secondary-fixed": "#390c00",
        "surface-bright": "#fcf9f8",
        "surface-container-high": "#eae7e7",
        "tertiary-fixed-dim": "#c6c6c8",
        "outline-variant": "#c3c6d1",
        "inverse-surface": "#313030",
        "on-tertiary-fixed": "#1a1c1d",
        "surface-variant": "#e5e2e1",
        "surface-container-low": "#f6f3f2",
        background: "#fcf9f8",
        "on-tertiary-fixed-variant": "#454749",
        "surface-tint": "#3a5f94",
        "on-surface": "#1c1b1b",
        "tertiary-fixed": "#e2e2e4",
        "on-primary-fixed-variant": "#1f477b",
        tertiary: "#1c1e20",
        "primary-fixed-dim": "#a7c8ff",
        "on-surface-variant": "#43474f",
        "on-primary": "#ffffff",
        cta: "#FF5500",
        gold: "#C9A227",
        whatsapp: "#25D366",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        "stack-sm": "8px",
        "stack-lg": "32px",
        "container-max": "1280px",
        "margin-desktop": "40px",
        gutter: "24px",
        "margin-mobile": "16px",
        "stack-md": "16px",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-display)", "sans-serif"],
        "label-md": ["var(--font-inter)", "sans-serif"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "headline-lg": ["var(--font-display)", "sans-serif"],
        button: ["var(--font-inter)", "sans-serif"],
        "headline-sm": ["var(--font-display)", "sans-serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "headline-md": ["var(--font-display)", "sans-serif"],
      },
      fontSize: {
        "headline-lg-mobile": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.03em",
            fontWeight: "700",
          },
        ],
        button: ["16px", { lineHeight: "1", fontWeight: "600" }],
        "headline-sm": [
          "24px",
          { lineHeight: "32px", fontWeight: "600" },
        ],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": [
          "32px",
          { lineHeight: "40px", fontWeight: "600" },
        ],
      },
      maxWidth: {
        "container-max": "1280px",
      },
      boxShadow: {
        "premium-sm":
          "0 2px 8px rgba(0, 30, 64, 0.06), 0 1px 2px rgba(0, 30, 64, 0.04)",
        "premium-md":
          "0 8px 24px rgba(0, 30, 64, 0.08), 0 2px 8px rgba(0, 30, 64, 0.04)",
        "premium-lg":
          "0 16px 48px rgba(0, 30, 64, 0.12), 0 4px 16px rgba(0, 30, 64, 0.06)",
        "premium-glow": "0 0 40px rgba(255, 85, 0, 0.15)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #f6f3f2 0%, #e8eef8 50%, #f6f3f2 100%)",
        "gradient-primary":
          "linear-gradient(135deg, #001e40 0%, #003366 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #FF5500 0%, #d04400 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
