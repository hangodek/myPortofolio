/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animationDuration: {
                "2s": "2s",
                "3s": "3s",
                "4s": "4s",
                "5s": "5s",
            },
            fontFamily: {
                bebas: ["Bebas Neue", "sans-sherif"],
                edu: ["Edu AU VIC WA NT Guides", "cursive"],
            },
            boxShadow: {
                box1: "2px 2px 1px 4px",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
