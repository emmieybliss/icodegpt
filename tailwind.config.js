/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0b11',
          850: '#0e1018',
          800: '#13151f',
          700: '#1c1f2c',
          600: '#2a2e3f',
        },
        accent: {
          blue: '#5b8cff',
          violet: '#8b6cff',
          cyan: '#3fd0e0',
          green: '#4ade9a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      keyframes: {
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        'border-spin': { to: { '--angle': '360deg' } },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.45', transform: 'scale(.8)' },
        },
        gridDrift: { to: { backgroundPosition: '64px 64px' } },
      },
      animation: {
        blink: 'blink 1.05s steps(1) infinite',
        'border-spin': 'border-spin 6s linear infinite',
        'pulse-dot': 'pulseDot 1.8s ease-in-out infinite',
        'grid-drift': 'gridDrift 18s linear infinite',
      },
    },
  },
  plugins: [],
}
