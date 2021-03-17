import React from "react";
import Head from "next/head";
import { Avatar, Button, Container, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jude Francis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex height="100vh" direction="column" justify="center">
        <Container maxW="5xl">
          <Avatar size="xl" src="https://avatars.githubusercontent.com/u/25833088?s=460&u=06dae69ba9d811e6de3daac093d89f5e5e735077&v=4" />
          <Text
            as="h1"
            fontSize="6xl"
            maxW={700}
            lineHeight={1.2}
            fontWeight="bold"
            mt="10"
          >
            Full-stack software developer
          </Text>
          <Button variant="solid" mt={10}>
            Get started
          </Button>
        </Container>
      </Flex>
    </>
  );
}
