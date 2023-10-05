// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      gray: '#545454', // Customize your primary color
    },
  },

  fonts: {
    body: 'DM Sans, sans-serif', // Customize your font
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700, // Specify the font weight of 700
  },

  fontSizes: {
    small: '20px', // Custom font size
    medium: '40px',
    large: '60px',
  },

});

export default theme;
