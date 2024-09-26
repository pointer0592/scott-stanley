/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

import {
    sds_backgrounds,
    sds_colors,
} from './themes/tailwindcss/tokens'

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

export default <Partial<Config>> {
    content: [
        '{.,app,*-layer}/components/**/*.{js,vue,ts}',
        '{.,app,*-layer}/layouts/**/*.vue',
        '{.,app,*-layer}/pages/**/*.vue',
        '{.,app,*-layer}/plugins/**/*.{js,ts}',
        '{.,app,*-layer}/app.vue',
        '{.,app,*-layer}/*.{mjs,js,ts}',
        '{.,*-layer}/nuxt.config.{js,ts}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: sds_colors,
            fontFamily: {
                sans: ['DM Sans', ...fontFamily.sans],
                titillium: ['Titillium Web', ...fontFamily.sans],
            },
            backgrounds: sds_backgrounds,
        }
    },
    plugins: [
        tailwindTypography,
        tailwindForms,
    ],
}
