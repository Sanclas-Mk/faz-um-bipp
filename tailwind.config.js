import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'principal': ['Inder', 'sans-serif'],
                'secundaria': ['IBM Plex Sans Devanagari', 'sans-serif']
            },
            colors: {
                'verde': '#7EFF08',
                'verde-min': '#61F060',
                'azul': '#212066',
                'azul-min': '#29287F',
            },

            backgroundImage: {
                'logo': "url('/Imagens/logo.png')",
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-bullets': theme('colors.pink[400]'),
                        li: {
                            p: {
                                margin: 0,
                            }
                        },
                    },
                },
            }),

        },
    },

    plugins: [forms, typography],
};
