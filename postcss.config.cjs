const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss({
      content: ['src-frontend/**/*.{ts,tsx,js,jsx,vue}']
    })
  ]
};