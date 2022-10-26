import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies.jsx";
import { Container, Text } from "@chakra-ui/react";
import { useMount } from "react-use";
import { useMixpanel } from "../hooks/use-mixpanel.js";

export default function Home() {
  const { track } = useMixpanel();

  useMount(() => {
    track('Visited home page');
  });

  return (
    <>
      <Head>
        <title>Jude Francis</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <Header/>
      <Projects/>
      <Technologies/>
      <Container maxW="6xl" as="footer" py="10">
        <Text fontSize="lg">&copy; Jude Francis { (new Date()).getFullYear() }</Text>
      </Container>
    </>
  );
};
