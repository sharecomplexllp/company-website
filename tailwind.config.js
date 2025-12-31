export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#004d71', 
        'brand-green': '#3d8c40',
        'brand-light-blue': '#e6f3f7',
        'brand-light-green': '#eaf5eb',
        'brand-silver': '#f5f7fa',
      },
    },
  },
  plugins: [],
}