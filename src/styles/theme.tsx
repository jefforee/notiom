// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#545454', // Customize your primary color
    },
  },
  fonts: {
    body: 'DM Sans, sans-serif', // Customize your font
  },
});

export default theme;
