import { Box, Container, HStack, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "./Logo.jsx";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box width="full" as="nav">
      <Container maxW="6xl" height="120px" display="flex" alignItems="center">
        <Logo/>
        <Spacer/>
        <HStack spacing="6">
          {
            isDark ? (
              <IconButton
                rounded="12"
                onClick={ toggleColorMode }
                aria-label="Enable light mode"
                icon={ <FiSun size="20"/> }
              />
            ) : (
              <IconButton
                rounded="12"
                onClick={ toggleColorMode }
                aria-label="Enable dark mode"
                icon={ <FiMoon size="20"/> }
                bg="gray.200"
              />
            )
          }
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
