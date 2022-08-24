import { Avatar, Box, Button, Container, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex direction="column" justify="center">
        <Container maxW="5xl">
          <motion.div
            initial={ { opacity: 0, y: 50 } }
            animate={ {
              opacity: 1, y: 0,
              transition: { type: "spring", delay: 0.1, duration: 0.5 },
            } }
          >
            <Flex
              width="full"
              direction={ { base: "column-reverse", md: "row" } }
              align={ { base: "flex-start", md: "center" } }
              justify="space-between"
              pt={ { base: "48", md: "52" } }
              pb="28"
            >
              <Box mr={ { base: 0, lg: 5 } } mt={ { base: 10, lg: 0 } }>
                <Heading
                  as="h1" fontSize={ { base: "3.4rem", md: "5rem" } } lineHeight={ { base: 1.2, md: 1 } }
                  fontWeight="700"
                  flexGrow="1"
                >
                  Hi, I'm<br/>Jude Francis
                </Heading>
                <Text
                  fontSize={ { md: 'lg' } } maxW="550" pr="10" mt="4" lineHeight="1.8"
                  verticalAlign="middle" opacity=".8"
                >
                  A full-stack developer with a passion for creating beautiful, intuitive, and accessible experiences.
                  Find some of my work below.
                </Text>
                <Flex align="center">
                  <Button
                    rounded="full" mt="10" rightIcon={ <HiArrowRight/> } px="6"
                    backgroundColor={ colorMode === 'light' ? 'gray.800' : 'gray.200' }
                    color={ colorMode === 'light' ? '#fff' : 'gray.900' }
                    _hover={ { background: colorMode === 'light' ? 'gray.700' : 'gray.50' } }
                    _active={ { background: colorMode === 'light' ? 'gray.600' : 'gray.400' } }
                  >
                    Get in touch
                  </Button>
                </Flex>
              </Box>
              <Avatar
                width={ { base: '100px', lg: '180px' } } height={ { base: '100px', lg: '180px' } }
                src="/images/profile.jpg" alt="Jude Francis"
              />
            </Flex>
          </motion.div>
        </Container>
      </Flex>
    </>
  );
};

export default Header;
