/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'af-black':   '#07090A',
        'af-surface': '#0E1512',
        'af-card':    '#131C18',
        'af-border':  '#1E2D26',
        'af-muted':   '#3D5248',
        'af-gray':    '#6B8C7E',
        'af-silver':  '#A8C2B8',
        'af-white':   '#E8F5EE',
        'af-green':   '#4ADE80',
        'af-green-dim':'#22C55E',
        'af-teal':    '#2DD4BF',
        'af-blue':    '#60A5FA',
        'af-blue-dim':'#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(74, 222, 128, 0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(74, 222, 128, 0.04) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
