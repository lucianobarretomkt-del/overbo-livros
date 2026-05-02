/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        "primary-bg": "var(--primary-bg)",
        bg: "var(--bg)",
        "bg-card": "var(--bg-card)",
        "bg-dark": "var(--bg-dark)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-on-primary": "var(--text-on-primary)",
        "text-on-dark": "var(--text-on-dark)",
        border: "var(--border)",
        "border-light": "var(--border-light)",
        surface: "var(--bg-card)",
        "surface-elevated": "var(--bg)",
        "background-hover": "var(--border-light)",
        secondary: "var(--accent-blue)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Mantendo Playfair para dar o ar de Estudo Bíblico
      }
    },
  },
  plugins: [],
}
