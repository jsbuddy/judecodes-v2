import React from 'react';
import { Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { SiGit, SiKotlin, SiNodedotjs, SiNuxtdotjs, SiTailwindcss, SiWindows } from "react-icons/si";
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
  <SiGit size="55"/>,
  <SiWindows size="55"/>,
];

const Technologies = () => {
  return (
    <Container maxW="6xl" py="36">
      <Text fontSize={ { base: '1.7rem', md: '2.2rem' } } maxW="550" fontWeight="medium">
        A few technologies I've been working with recently
      </Text>
      <SimpleGrid
        display={ { base: 'grid', md: 'none' } } columns={ { base: 3, md: 6 } }
        spacing="10" mt="20" textAlign="center"
      >
        {
          icons.map((icon, index) => {
            return (
              <Flex key={ index } align="center" opacity=".9" transform="scale(.9)">
                { icon }
              </Flex>
            );
          })
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
