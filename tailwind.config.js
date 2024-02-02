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
        "circle-logo": "url('/assets/circle.svg')",
        "card-logo": "url('/assets/card.svg')",
        "paypal-logo": "url('/assets/paypal.svg')",
        "alipay-logo": "url('/assets/alipay.svg')",
        "cross-logo": "url('/assets/cross.svg')",
        "cross2-logo": "url('/assets/cross2.svg')",
        "cart-logo": "url('/assets/cart.svg')",
        "mall-img": "url('/assets/mall.jpg')",
        "sky-img": "url('/assets/sky.jpeg')",
        "stars-img": "url('/assets/stars.jpeg')",
        "suit-img": "url('/assets/suit.jpg')",
      },
      screens: {
        test: { max: "500px" },
        ultraWide: "2900px",
        wide: "1875px",
        mobile: { max: "550px" },
        smallmobile: { max: "350px" },
        scale1: { min: "551px", max: "672px" },
      },
    },
  },
  plugins: [],
};
