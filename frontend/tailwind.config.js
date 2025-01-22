export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'], // Add Poppins font
                roboto: ['Roboto', 'sans-serif'],// Add Roboto font
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                // You can add custom colors here if needed
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
