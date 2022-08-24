import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const config = {
	initialColorMode: "light",
};

const styles = {
	global: (props) => ({
		body: {
			color: mode('gray.900', 'white')(props),
			bg: mode('gray.100', '#111')(props),
		}
	})
};

const theme = extendTheme({
	config,
	fonts: {
		body: 'DM Sans',
		heading: 'DM Sans',
	},
	styles
});

export default theme;
