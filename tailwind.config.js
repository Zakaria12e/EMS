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
    "./resources/js/components/Create-reciptients.vue",
    "./resources/js/components/Reciptients-Accs.vue",
    "./resources/js/components/Profile.vue",
    "./resources/js/components/Departments.vue",
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

          spacing: {
            4.5: '1.125rem',
            5.5: '1.375rem',
            6.5: '1.625rem',
            7.5: '1.875rem',
            8.5: '2.125rem',
            9.5: '2.375rem',
            10.5: '2.625rem',
            11: '2.75rem',
            11.5: '2.875rem',
            12.5: '3.125rem',
            13: '3.25rem',
            13.5: '3.375rem',
            14: '3.5rem',
            14.5: '3.625rem',
            15: '3.75rem',
            15.5: '3.875rem',
            16: '4rem',
            16.5: '4.125rem',
            17: '4.25rem',
            17.5: '4.375rem',
            18: '4.5rem',
            18.5: '4.625rem',
            19: '4.75rem',
            19.5: '4.875rem',
            21: '5.25rem',
            21.5: '5.375rem',
            22: '5.5rem',
            22.5: '5.625rem',
            24.5: '6.125rem',
            25: '6.25rem',
            25.5: '6.375rem',
            26: '6.5rem',
            27: '6.75rem',
            27.5: '6.875rem',
            29: '7.25rem',
            29.5: '7.375rem',
            30: '7.5rem',
            31: '7.75rem',
            32.5: '8.125rem',
            33: '8.25rem',
            34: '8.5rem',
            34.5: '8.625rem',
            35: '8.75rem',
            36.5: '9.125rem',
            37.5: '9.375rem',
            39: '9.75rem',
            39.5: '9.875rem',
            40: '10rem',
            42.5: '10.625rem',
            44: '11rem',
            45: '11.25rem',
            46: '11.5rem',
            47.5: '11.875rem',
            49: '12.25rem',
            50: '12.5rem',
            52: '13rem',
            52.5: '13.125rem',
            54: '13.5rem',
            54.5: '13.625rem',
            55: '13.75rem',
            55.5: '13.875rem',
            59: '14.75rem',
            60: '15rem',
            62.5: '15.625rem',
            65: '16.25rem',
            67: '16.75rem',
            67.5: '16.875rem',
            70: '17.5rem',
            72.5: '18.125rem',
            73: '18.25rem',
            75: '18.75rem',
            90: '22.5rem',
            94: '23.5rem',
            95: '23.75rem',
            100: '25rem',
            115: '28.75rem',
            125: '31.25rem',
            132.5: '33.125rem',
            150: '37.5rem',
            171.5: '42.875rem',
            180: '45rem',
            187.5: '46.875rem',
            203: '50.75rem',
            230: '57.5rem',
            242.5: '60.625rem'
          },
          maxWidth: {
            2.5: '0.625rem',
            3: '0.75rem',
            4: '1rem',
            7: '1.75rem',
            9: '2.25rem',
            10: '2.5rem',
            10.5: '2.625rem',
            11: '2.75rem',
            13: '3.25rem',
            14: '3.5rem',
            15: '3.75rem',
            16: '4rem',
            22.5: '5.625rem',
            25: '6.25rem',
            30: '7.5rem',
            34: '8.5rem',
            35: '8.75rem',
            40: '10rem',
            42.5: '10.625rem',
            44: '11rem',
            45: '11.25rem',
            60: '15rem',
            70: '17.5rem',
            90: '22.5rem',
            94: '23.5rem',
            125: '31.25rem',
            132.5: '33.125rem',
            142.5: '35.625rem',
            150: '37.5rem',
            180: '45rem',
            203: '50.75rem',
            230: '57.5rem',
            242.5: '60.625rem',
            270: '67.5rem',
            280: '70rem',
            292.5: '73.125rem'
          },
          maxHeight: {
            35: '8.75rem',
            70: '17.5rem',
            90: '22.5rem',
            550: '34.375rem',
            300: '18.75rem'
          },
          minWidth: {
            22.5: '5.625rem',
            42.5: '10.625rem',
            47.5: '11.875rem',
            75: '18.75rem'
          },
          zIndex: {
            999999: '999999',
            99999: '99999',
            9999: '9999',
            999: '999',
            99: '99',
            9: '9',
            1: '1'
          },
          opacity: {
            65: '.65'
          },
          aspectRatio: {
            '4/3': '4 / 3',
            '21/9': '21 / 9'
          },
    },
  },
  plugins: [

    require('flowbite/plugin'),
    require('@tailwindcss/typography'),

  ],
}

