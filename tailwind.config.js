const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        screens: {
            'xl': '1440px',
        },
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: {
                    100: "#F1F5F8",
                    400: "#3A9EAA",
                    500: "#0276FF"
                },
                violet: {
                    500: "#56326E",
                },
                gray: {
                    600: "#636D73",
                    800: "#414D55"
                }
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
