/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "32px",
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Lora: "Lora",
      },
      colors: {
        primary: "#ed2690ff",
        secondary: "#a30057ff",
        third: "#70003c",
        gelap: "#383536ff",
        bgdua: "#fbd4e9",
        bgsatu: "#fde9f4",
        bgfooter: "#33001b",
      },
    },
  },
  plugins: [],
};
