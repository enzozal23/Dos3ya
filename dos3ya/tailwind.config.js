/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      screens: {
        tablet: { max: '1024px' }, // Aplica para 1024 x 1366
      },
      screens: {
        mobile: { max: '640px' }, // Dispositivos con ancho máximo de 640px
      },
      // Agregar estilos personalizados aquí

      fontFamily: {
        corporates: ["corporate-s", 'sans-serif'],
        ivyora: ["ivyora-display", 'sans-serif'], // Incluye la fuente personalizada.
      },
      fontWeight: {
        light: 400, // Agrega el peso 300 si no está definido.
      },
      fontStyle: {
        italic: 'italic', // Asegúrate de que `italic` esté configurado.
      },

      maskImage: {
        gradient: "linear-gradient(to bottom, black 80%, transparent 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        },
      });
    },
  ],
};
