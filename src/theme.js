import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    primary: '#050816',
    secondary: '#aaa6c3',
    tertiary: '#151030',
    'black-100': '#100d25',
    'black-200': '#090325',
    'white-100': '#f3f3f3',
  },
  variants: {
    card: {
      boxShadow: '0px 35px 120px -15px #211e35',
    },
    'hero-pattern': {
      backgroundImage: "url('./src/assets/herobg.png')",
    },
    red: { bg: 'red' },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        background: '#111',
        color: '#eee',
      },
    },
  },
});

export default theme;
