/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A2540',    // Azul marino profundo (Autoridad)
          gold: '#C9A961',    // Dorado sutil (Exclusividad)
          cream: '#F8F9FA',   // Blanco hueso (Fondo limpio)
          slate: '#1E293B',   // Gris oscuro para textos
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
