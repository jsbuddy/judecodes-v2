import React from 'react';
import { Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { SiGithub, SiKotlin, SiNodedotjs, SiNuxtdotjs, SiTailwindcss, SiWindows } from "react-icons/si";
import { RiAngularjsFill, RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineAndroid } from "react-icons/md";
import { CgFigma } from "react-icons/cg";

const icons = [
  <SiNodedotjs size="65"/>,
  <RiReactjsFill size="65"/>,
  <TbBrandNextjs size="65"/>,
  <SiTailwindcss size="65"/>,
  <RiVuejsFill size="65"/>,
  <SiNuxtdotjs size="65"/>,
  <RiAngularjsFill size="65"/>,
  <SiKotlin size="45"/>,
  <MdOutlineAndroid size="65"/>,
  <CgFigma size="65"/>,
  <SiGithub size="55"/>,
  <SiWindows size="55"/>,
];

const Technologies = () => {
  return (
    <Container maxW="5xl" py="36">
      <Heading fontSize={ { base: '4xl', md: '5xl' } } maxW="2xl" lineHeight="1.4">
        My tools
      </Heading>
      <Text fontSize={ { base: 'lg', md: "lg" } } mt="1" opacity=".7">
        A few technologies I'm comfortable working with.
      </Text>
      <SimpleGrid
        display={ { base: 'grid', md: 'none' } } columns={ { base: 3, md: 6 } }
        spacing="10" mt="20" textAlign="center"
      >
        {
          icons.map((icon, index) => (
            <Flex key={ index } justify="center" opacity=".9">
              { icon }
            </Flex>
          ))
        }
      </SimpleGrid>
      <VStack display={ { base: 'none', md: 'flex' } } spacing="10" align="stretch" mt="20">
        <Flex direction="row" justify="space-between" align="center">
          {
            icons.slice(0, 6).map((icon, index) => (
              <Flex key={ index } opacity=".9">
                { icon }
              </Flex>
            ))
          }
        </Flex>
        <Flex direction="row" justify="space-between" align="center">
          {
            icons.slice(6, 12).map((icon, index) => (
              <Flex key={ index } opacity=".9">
                { icon }
              </Flex>
            ))
          }
        </Flex>
      </VStack>
    </Container>
  );
};

export default Technologies;
