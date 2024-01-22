/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgba(200,200,200,0.54)",
      },
      fontFamily: {
        primary: "Courier",
        courierbold: ["courierbold", "sans-serif"],
      },
      backgroundImage: {
        "cart-logo": "url('./src/assets/cart.svg')",
        "mall-img": "url('./src/assets/mall.jpg')",
        "sky-img": "url('./src/assets/sky.jpeg')",
        "stars-img": "url('./src/assets/stars.jpeg')",
      },
    },
  },
  plugins: [],
};
