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
            backgroundImage: (theme) => ({
                disabled: `url('../img/disabled.svg')`,
            }),
            fontFamily: {
                sans: ['Rubik', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                block: `0px 1px 8px rgba(20, 46, 110, 0.1)`,
                bb: `0px 1px 8px rgba(0, 0, 0, 0.1)`
            },
            colors: {
                blue: {
                    20: "#99A1A6",
                    50: "#FAFBFD",
                    100: "#F1F5F8",
                    200: "#A2C0D4",
                    400: "#3A9EAA",
                    500: "#0276FF"
                },
                red: {
                    600: "#C24242",
                    700: "#AA3A3A"
                },
                orange: {
                    500: "#F17105",
                },
                violet: {
                    500: "#56326E",
                    600: "#6665DD"
                },
                gray: {
                    100: "#B1B6B9",
                    300: "#828282",
                    400: "#DCE2E8",
                    600: "#636D73",
                    800: "#414D55"
                }
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
