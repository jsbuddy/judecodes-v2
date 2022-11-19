import React from 'react';
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import {
  RiCodepenLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMailSendLine,
  RiTelegramLine,
  RiTwitterFill
} from "react-icons/ri";
import { useMixpanel } from "../hooks/use-mixpanel.js";

const ContactModal = ({ isOpen, onClose }) => {
  const { track } = useMixpanel();

  const handleClick = (name, link) => {
    track(`Clicked contact - ${ name }`);
    window.open(link, '_blank');
  };

  return (
    <Modal onClose={ onClose } isOpen={ isOpen } isCentered size="lg">
      <ModalOverlay/>
      <ModalContent bg={ useColorModeValue('white', '#26262f') } rounded="2xl">
        <Flex align="center" justify="space-between" pt="10" pb="0" px={ { base: 8, md: 10 } }>
          <ModalHeader p="0" whiteSpace="nowrap" fontSize="2xl">Get in touch</ModalHeader>
          <ModalCloseButton position="relative" inset="initial"/>
        </Flex>
        <ModalBody py="12" px={ { base: 8, md: 10 } }>
          <SimpleGrid columns={ { base: 3, md: 3 } } spacing={ { base: 3, md: 4 } }>
            <Flex
              onClick={ () => handleClick('Email', 'mailto:judecodes@gmail.com') }
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiMailSendLine size="36"/>
              <Text mt="3">Email</Text>
            </Flex>
            <Flex
              onClick={ () => handleClick('Github', 'https://github.com/jsbuddy') }
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiGithubLine size="36"/>
              <Text mt="3">Github</Text>
            </Flex>
            <Flex
              onClick={ () => handleClick('Codepen', 'https://codepen.io/judecodes') }
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiCodepenLine size="36"/>
              <Text mt="3">Codepen</Text>
            </Flex>
            <Flex
              onClick={ () => handleClick('Telegram', 'https://t.me/judecodes') }
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiTelegramLine size="36"/>
              <Text mt="3">Telegram</Text>
            </Flex>
            <Flex
              onClick={ () => handleClick('Linkedin', 'https://www.linkedin.com/in/judecodes/') }
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiLinkedinLine size="36"/>
              <Text mt="3">Linkedin</Text>
            </Flex>
            <Flex
              onClick={ () => handleClick('Twitter', 'https://twitter.com/judecodes') }
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiTwitterFill size="36"/>
              <Text mt="3">Twitter</Text>
            </Flex>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
