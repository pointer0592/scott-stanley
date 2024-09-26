import { sds_colors } from '~/themes/tailwindcss/tokens'

const primary = sds_colors.primary?.DEFAULT || sds_colors.primary?.[500]
const secondary = sds_colors.secondary?.DEFAULT || sds_colors.secondary?.[500]
const tertiary = sds_colors.tertiary?.DEFAULT || sds_colors.tertiary?.[500]
const accent = sds_colors.accent?.DEFAULT || sds_colors.accent?.[500]


export { primary, secondary, tertiary, accent }
