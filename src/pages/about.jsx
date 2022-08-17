import { Box, Container, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <Box height="100vh" py="24">
      <Navbar/>
      <Container maxW="5xl">
        <Text as="h1" fontSize="4xl" fontWeight="medium" py="20">
          About me
        </Text>
      </Container>
    </Box>
  );
};

export default About;
