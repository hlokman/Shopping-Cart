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
        "circle-logo": "url('./src/assets/circle.svg')",
        "card-logo": "url('./src/assets/card.svg')",
        "paypal-logo": "url('./src/assets/paypal.svg')",
        "alipay-logo": "url('./src/assets/alipay.svg')",
        "cross-logo": "url('./src/assets/cross.svg')",
        "cross2-logo": "url('./src/assets/cross2.svg')",
        "cart-logo": "url('./src/assets/cart.svg')",
        "mall-img": "url('./src/assets/mall.jpg')",
        "sky-img": "url('./src/assets/sky.jpeg')",
        "stars-img": "url('./src/assets/stars.jpeg')",
        "suit-img": "url('./src/assets/suit.jpg')",
      },
      screens: {
        test: { max: "500px" },
        ultraWide: "2900px",
        wide: "1875px",
        mobile: { max: "550px" },
        scale1: { min: "551px", max: "672px" },
      },
      /*wordSpacing: {
        tight: "-20px",
      },*/
    },
  },
  plugins: [],
};

//scale1:mt-[-100px] scale1:mb-[-100px]
//mobile:mt-[-250px] mobile:mb-[-250px]
//scale1:scale-[0.80] mobile:scale-[0.55]
