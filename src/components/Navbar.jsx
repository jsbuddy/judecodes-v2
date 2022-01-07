import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Container, Flex, IconButton, Link, Text, } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import NextLink from "next/link";
import Logo from "./Logo";


const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<Box position="absolute" top="0" left="0" width="full" as="nav">
			<Container
				maxW="6xl"
				height="90px"
				display="flex"
				alignItems="center"
				justifyContent="space-between"
			>
				<Link as={ NextLink } href="/">
					<Box as={ Logo } cursor="pointer"></Box>
				</Link>
				<Flex alignItems="center">
					<Link as={ NextLink } href="/about" mr="5">
						<Text fontSize="md" fontWeight="medium" cursor="pointer">
							About me
						</Text>
					</Link>
					{ isDark ? (
						<IconButton
							rounded="12"
							onClick={ toggleColorMode }
							aria-label="Enable light mode"
							icon={ <FiSun size="20"/> }
							ml={ { base: "5", md: "8" } }
						/>
					) : (
						<IconButton
							rounded="12"
							onClick={ toggleColorMode }
							aria-label="Enable dark mode"
							icon={ <FiMoon size="20"/> }
							bg="gray.200"
							ml={ { base: "5", md: "8" } }
						/>
					) }
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
