import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },

        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },

        // Button color mappings
        "eco-button": {
          "primary-bg-base-light": "var(--button-primary-bg-base-light)",
          "primary-bg-base-dark": "var(--button-primary-bg-base-dark)",
          "primary-bg-hover-light": "var(--button-primary-bg-hover-light)",
          "primary-bg-hover-dark": "var(--button-primary-bg-hover-dark)",
          "primary-bg-active": "var(--button-primary-bg-active)",
          "primary-bg-disabled": "var(--button-primary-bg-disabled)",
          "primary-text-base": "var(--button-primary-text-base)",
          "primary-text-disabled": "var(--button-primary-text-disabled)",

          "secondary-bg-base-light": "var(--button-secondary-bg-base-light)",
          "secondary-bg-base-dark": "var(--button-secondary-bg-base-dark)",
          "secondary-bg-hover-light": "var(--button-secondary-bg-hover-light)",
          "secondary-bg-hover-dark": "var(--button-secondary-bg-hover-dark)",
          "secondary-bg-active": "var(--button-secondary-bg-active)",
          "secondary-bg-disabled": "var(--button-secondary-bg-disabled)",
          "secondary-text-base": "var(--button-secondary-text-base)",
          "secondary-text-disabled": "var(--button-secondary-text-disabled)",
          "secondary-border-base": "var(--button-secondary-border-base)",
          "secondary-border-disabled": "var(--button-secondary-border-disabled)",
          "secondary-border-active": "var(--button-secondary-border-active)",

          "ghost-bg-hover": "var(--button-ghost-bg-hover)",
          "ghost-bg-active": "var(--button-ghost-bg-active)",
          "ghost-text": "var(--button-ghost-text)",
          "ghost-text-disabled": "var(--button-ghost-disabled-text)",

          "destructive-solid-bg-normal": "var(--button-destructive-solid-bg-normal)",
          "destructive-solid-bg-hover": "var(--button-destructive-solid-bg-hover)",
          "destructive-solid-bg-active": "var(--button-destructive-solid-bg-active)",
          "destructive-solid-bg-disabled": "var(--button-destructive-solid-bg-disabled)",
          "destructive-solid-text": "var(--button-destructive-solid-text)",
          "destructive-solid-text-disabled": "var(--button-destructive-solid-text-disabled)",
        },

        // Text color mappings
        "eco-text": {
          primary: "var(--eco-text-primary)",
          secondary: "var(--eco-text-secondary)",
          tertiary: "var(--eco-text-tertiary)",
          "on-dark": "var(--eco-text-on-dark)",
          "link-base": "var(--eco-text-link-base)",
          "link-hover": "var(--eco-text-link-hover)",
        },

        // Custom color ramps
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          950: "var(--gray-950)",
        },
        slate: {
          50: "var(--slate-50)",
          100: "var(--slate-100)",
          200: "var(--slate-200)",
          300: "var(--slate-300)",
          400: "var(--slate-400)",
          500: "var(--slate-500)",
          600: "var(--slate-600)",
          700: "var(--slate-700)",
          800: "var(--slate-800)",
          900: "var(--slate-900)",
          950: "var(--slate-950)",
        },
        blue: {
          50: "var(--blue-50)",
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "var(--blue-400)",
          500: "var(--blue-500)",
          600: "var(--blue-600)",
          700: "var(--blue-700)",
          800: "var(--blue-800)",
          900: "var(--blue-900)",
          950: "var(--blue-950)",
        },
        green: {
          50: "var(--green-50)",
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
          400: "var(--green-400)",
          500: "var(--green-500)",
          600: "var(--green-600)",
          700: "var(--green-700)",
          800: "var(--green-800)",
          900: "var(--green-900)",
          950: "var(--green-950)",
        },
        red: {
          50: "var(--red-50)",
          100: "var(--red-100)",
          200: "var(--red-200)",
          300: "var(--red-300)",
          400: "var(--red-400)",
          500: "var(--red-500)",
          600: "var(--red-600)",
          700: "var(--red-700)",
          800: "var(--red-800)",
          900: "var(--red-900)",
          950: "var(--red-950)",
        },
        orange: {
          50: "var(--orange-50)",
          100: "var(--orange-100)",
          200: "var(--orange-200)",
          300: "var(--orange-300)",
          400: "var(--orange-400)",
          500: "var(--orange-500)",
          600: "var(--orange-600)",
          700: "var(--orange-700)",
          800: "var(--orange-800)",
          900: "var(--orange-900)",
          950: "var(--orange-950)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      fontSize: {
        xs: "var(--text-xs)",     // 11px
        sm: "var(--text-sm)",     // 12px
        base: "var(--text-base)", // 13px
        md: "var(--text-md)",     // 14px
        lg: "var(--text-lg)",     // 16px
        xl: "var(--text-xl)",     // 18px
        "2xl": "var(--text-2xl)", // 20px
        "3xl": "var(--text-3xl)", // 24px
        "4xl": "var(--text-4xl)", // 28px
        "5xl": "var(--text-5xl)", // 32px
      },
      fontFamily: {
        serif: ["var(--font-serif)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-scale": "fade-in-scale 0.3s ease-out",
      },
      height: {
        xs: 'var(--height-xs)',
        sm: 'var(--height-sm)',
        md: 'var(--height-md)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
