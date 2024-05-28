import { config, fonts } from '@tamagui/config/v3'

import { createFont, createTamagui } from 'tamagui'


const poppinsFace = {
    normal: {normal: 'Poppins-Regular', italic: 'Poppins-Italic'},
    bold: {normal: 'Poppins-Bold', italic: 'Poppins-BoldItalic'},
    300: {normal: 'Poppins-Light', italic: 'Poppins-LightItalic'},
    500: {normal: 'Poppins-Regular', italic: 'Poppins-Italic'},
    600: {normal: 'Poppins-Medium', italic: 'Poppins-MediumItalic'},
    700: {normal: 'Poppins-Bold', italic: 'Poppins-BoldItalic'},
    800: {normal: 'Poppins-Bold', italic: 'Poppins-BoldItalic'},
    900: {normal: 'Poppins-Bold', italic: 'Poppins-BoldItalic'},
  };
  

const headingFont = createFont({
    size: config.fonts.heading.size,
    lineHeight: config.fonts.heading.lineHeight,
    weight: config.fonts.heading.weight,
    letterSpacing: config.fonts.heading.letterSpacing,
    face: poppinsFace,
});

const bodyFont = createFont({
    size: config.fonts.body.size,
    lineHeight: config.fonts.body.lineHeight,
    weight: config.fonts.body.weight,
    letterSpacing: config.fonts.body.letterSpacing,
    face: poppinsFace,
});



export const tamaguiConfig = createTamagui({
    ...config,
    fonts: {
        heading: headingFont,
        body: bodyFont
    }
})
export default tamaguiConfig
export type Conf = typeof tamaguiConfig


declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}
  