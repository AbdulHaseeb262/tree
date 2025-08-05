/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Updated color palette to match design
        primary: '#0d5e3f', // Dark green
        secondary: '#f5d675', // Yellow
        accent: '#2a7c5e', // Medium green
        highlight: '#e6a635', // Orange-yellow
        beige: '#faf5e9', // Light beige background
        cream: '#f7f2e7', // Cream background
        darkGreen: '#0a4632', // Very dark green
        forest: {
          50: '#f3faf4',
          100: '#e4f5e6',
          200: '#cae9ce',
          300: '#9fd7a8',
          400: '#6dbd78',
          500: '#48a054',
          600: '#388442',
          700: '#2f6836',
          800: '#28532e',
          900: '#234527',
        },
        moss: {
          50: '#f5f7f3',
          100: '#e8ede1',
          200: '#d1dbc3',
          300: '#afc09c',
          400: '#8ca274',
          500: '#6d8456',
          600: '#556a43',
          700: '#445337',
          800: '#37432d',
          900: '#2f3827',
        },
        sand: {
          50: '#fdfcfa',
          100: '#faf8f1',
          200: '#f3eedf',
          300: '#ebe1c6',
          400: '#dfcca4',
          500: '#d4b185',
          600: '#c3956a',
          700: '#a37856',
          800: '#866349',
          900: '#70533e',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'leaf-pattern': "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234d7c0f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
