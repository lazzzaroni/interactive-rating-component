import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          "light-grey": "hsl(217, 12%, 63%)",
          "medium-grey": "hsl(216, 12%, 54%)",
          "dark-blue": "hsl(213, 19%, 18%)",
          "very-dark-blue": "hsl(216, 12%, 8%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
