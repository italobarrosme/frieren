/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Certifique-se de que todos os arquivos Astro sejam incluídos
  ],
  theme: {
    extend: {
      screens: {
        sm: "680px",
        tablet: "768px",
        md: "900px",
        lg: "1200px",
        xl: "1440px",
      },
      width: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
      },
      height: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
      },
      colors: {
        primary: {
          regular: "hsl(var(--color-primary-regular))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          regular: "hsl(var(--color-secondary-regular))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        neutral: {
          black: "hsl(var(--color-neutral-black))",
          white: "hsl(var(--color-neutral-white))",
          light: "hsl(var(--color-neutral-light))",
          lightest: "hsl(var(--color-neutral-lightest))",
          dark: "hsl(var(--color-neutral-dark))",
        },
        feedback: {
          error: "hsl(var(--color-feedback-error))",
          warning: "hsl(var(--color-feedback-warning))",
          success: "hsl(var(--color-feedback-success))",
          info: "hsl(var(--color-feedback-info))",
        },
        complementary: {
          highlight: "hsl(var(--color-complementary-highlight))",
        },
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "scaleX(1)",
            opacity: 0.5,
          },
          "25%": {
            transform: "scaleX(2.1)",
          },
          "50%": {
            transform: "scaleX(3.2)",
            opacity: 1,
          },
          "75%": {
            transform: "scaleX(2.1)",
          },
          "100% ": {
            transform: "scaleX(1)",
            opacity: 0.5,
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "bounce-in": {
          "0%": {
            transform: "scale(0.1) translateY(100%)",
            opacity: 0,
          },
          "60%": {
            transform: "scale(1.2)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1) translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        in: {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },

          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        out: {
          "0%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0)",
          },
        },
        "slide-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
        },
        "slide-in-from-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-from-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "slide-out-to-left": {
          "0%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
        },
        "slide-in-from-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "slide-out-to-right": {
          "0%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
        },
        animation: {
          wave: "wave 1.6s ease-in-out infinite",
          shimmer: "shimmer infinite alternate ease-in-out",
          "bounce-in": "bounce-in 0.3s ease-in-out",
          "fade-in": "fade 0.2s ease-in-out",
          "fade-out": "fade 0.2s ease-in-out",
          in: "in 0.2s ease-in",
          out: "out 0.2s ease-out",
          "slide-out": "slide-out 0.2s ease-out",
          "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-in",
          "slide-in-from-left": "slide-in-from-left 0.4s ease-in",
          "slide-out-to-left": "slide-out-to-left 0.4s ease-out",
          "slide-in-from-right": "slide-in-from-right 0.4s ease-in",
          "slide-out-to-right": "slide-out-to-right 0.4s ease-out",
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
  plugins: [],
};
