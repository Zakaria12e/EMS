/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./resources/views/admin.blade.php",
    "./resources/views/auth/Login.blade.php",
    "./resources/js/app.js",
    "./resources/js/components/Dashboard.vue",
    "./resources/js/components/Create-Emails.vue",
    "./resources/js/components/Emails-History.vue",
    "./resources/js/components/Create-users.vue",
    "./resources/js/components/Users-Accs.vue",
    "./resources/js/components/Profile.vue",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
          },
          typography: ({ theme }) => ({
            DEFAULT: {
              css: {
                '--tw-prose-bullets': theme('colors.pink.500'),
                li: {
                  p: {
                    margin: 0,
                  },
                },
              },
            },
          }),
    },
  },
  plugins: [

    require('flowbite/plugin'),
    require('@tailwindcss/typography'),

  ],
}

