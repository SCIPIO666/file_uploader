// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Warm Color Palette
      colors: {
        warm: colors.stone, // Stone is a perfect warm gray
        accent: colors.amber, // Warm gold/yellow accent
      },

      // 2. Diffused, Layered Shadows
      boxShadow: {
        // Subtle elevation (idle state)
        'warm-sm': '0 2px 4px 0 rgba(120, 113, 108, 0.05)',
        
        // Medium elevation (hover/active state)
        'warm-md': '0 4px 12px -2px rgba(120, 113, 108, 0.1), 0 2px 6px -1px rgba(120, 113, 108, 0.06)',
        
        // Large elevation (popups/modals)
        'warm-lg': '0 20px 25px -5px rgba(120, 113, 108, 0.15), 0 10px 10px -5px rgba(120, 113, 108, 0.08)',
        
        // Inset shadow (for "pressed" or "well" states, like the dropzone)
        'inner-warm': 'inset 0 2px 6px 0 rgba(120, 113, 108, 0.10)',
      },

      // 3. Spacing Scale (Ensuring breathable gaps)
      spacing: {
        '18': '4.5rem', // Handy size between p-16 and p-20
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      // 4. Consistent Border Radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}