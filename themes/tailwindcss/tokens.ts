/* eslint-disable */
/* prettier-disable */
/* @ts-nocheck */

import { fontFamily } from 'tailwindcss/defaultTheme'

const sds_colors = {
    primary: {
        50: '#e6eaf0',
        100: '#ccd5e0',
        200: '#99abc1',
        300: '#6681a2',
        400: '#335683',
        500: '#003366', // Dark Blue
        600: '#002e5c',
        700: '#00294f',
        800: '#002342',
        900: '#001c36',
        950: '#001627',
        DEFAULT: '#003366',
    },
    secondary: {
        50: '#e0f7ff',
        100: '#b3e8ff',
        200: '#80d8ff',
        300: '#4dc7ff',
        400: '#1ab6ff',
        500: '#00a3ff', // Light Blue
        600: '#008fe3',
        700: '#0076c6',
        800: '#005eaa',
        900: '#00478e',
        950: '#003673',
        DEFAULT: '#00a3ff',
    },
    tertiary: {
        50: '#ffece0',
        100: '#ffd0b3',
        200: '#ffb380',
        300: '#ff944d',
        400: '#ff751a',
        500: '#f28500', // Tangerine
        600: '#d97700',
        700: '#bf6800',
        800: '#a65a00',
        900: '#8c4b00',
        950: '#733d00',
        DEFAULT: '#f28500',
    },
    accent: {
        50: '#ffeaea',
        100: '#ffcbc3',
        200: '#ff9d94',
        300: '#ff6e64',
        400: '#ff3f34',
        500: '#ff2400', // Scarlet
        600: '#e31e00',
        700: '#c61800',
        800: '#aa1300',
        900: '#8e0e00',
        950: '#720900',
        DEFAULT: '#ff2400',
    },
}

const sds_font_families = {
    sans: ['DM Sans', ...fontFamily.sans],
    titillium: ['Titillium Web', ...fontFamily.sans],
}

const sds_backgrounds = {
    'design-image':
        "url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxkb2d8ZW58MHx8fHwxNjgzMjc1MDI1&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=1200&fit=crop')",
    'design-image-large':
        "url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxkb2d8ZW58MHx8fHwxNjgzMjc1MDI1&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=crop')",
}

const sds_background_urls = {
    'design-image':
        'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxkb2d8ZW58MHx8fHwxNjgzMjc1MDI1&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=1200&fit=crop',
    'design-image-large':
        'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxkb2d8ZW58MHx8fHwxNjgzMjc1MDI1&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=crop',
}

export {
    sds_colors,
    sds_font_families,
    sds_backgrounds,
    sds_background_urls,
}

