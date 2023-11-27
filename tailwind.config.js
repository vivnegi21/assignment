/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'highlight':'#02DB02',
      'white':'#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'navbar':'#800080',     //#db02db
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      "primary-500": "#877EFF",
      "secondary-500": "#FFB620",
      blue: "#0095F6",
      "logout-btn": "#FF5A5A",
      "navbar-menu": "rgba(16, 16, 18, 0.6)",
      "dark-1": "#000000",
      "dark-2": "#121417",
      "dark-3": "#101012",
      "dark-4": "#1F1F22",
      "light-1": "#FFFFFF",
      "light-2": "#EFEFEF",
      "light-3": "#7878A3",
      "light-4": "#5C5C7B",
      "gray-1": "#697C89",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}