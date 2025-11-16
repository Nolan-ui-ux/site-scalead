import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F4FE',
          100: '#D1E9FD',
          200: '#A3D3FB',
          300: '#75BCF9',
          400: '#47A6F7',
          500: '#1877F2', // Bleu Facebook principal
          600: '#145EC2',
          700: '#104692',
          800: '#0C2F61',
          900: '#081731',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F5F5F7',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
