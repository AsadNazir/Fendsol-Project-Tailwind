/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./About/index.html"],
    theme: {
        extend: {
            backgroundImage: {
                'home-section': "linear-gradient(to right bottom, #000000bf, #000000bf) , url('./Images/Main_page_Background_image.jpg')",
                'About-us-section': "linear-gradient(to right bottom, #000000bf, #000000bf) , url('./Images/About-us-main-image.jpg')",
            },
        },
    },
    plugins: [],
}