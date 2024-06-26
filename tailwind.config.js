/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        hero: ['16px', '1.5rem']
      },
      fontFamily: {
        'monaspace-krypton': ['MonaspaceKrypton', 'monospace'],
        'monaspace-argon': ['MonaspaceArgon', 'monospace'],
        'monaspace-xenon': ['MonaspaceXenon', 'monospace'],
        'monaspace-radon': ['MonaspaceRadon', 'monospace'],
        'monaspace-neon': ['MonaspaceNeon', 'monospace'],
      },
      gridTemplateColumns: {
        'grid-gallery': '1fr 1fr 1fr'
      },
    },
  },
  plugins: [],
}