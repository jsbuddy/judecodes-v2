import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: "system",
};

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.900', 'white')(props),
      bg: mode('#f6ffff', '#111')(props),
    }
  })
};

const theme = extendTheme({
  config,
  fonts: {
    body: 'Satoshi',
    heading: 'Satoshi',
  },
  styles
});

export default theme;
