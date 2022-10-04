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
  RiProfileLine,
  RiTelegramLine,
  RiTwitterFill
} from "react-icons/ri";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal onClose={ onClose } isOpen={ isOpen } isCentered size="lg">
      <ModalOverlay/>
      <ModalContent bg={ useColorModeValue('white', '#26262f') } rounded="2xl">
        <Flex align="center" justify="space-between" pt="10" pb="0" px={ { base: 6, md: 10 } }>
          <ModalHeader p="0" whiteSpace="nowrap" fontSize="2xl">Get in touch</ModalHeader>
          <ModalCloseButton position="relative" inset="initial"/>
        </Flex>
        <ModalBody py="12" px={ { base: 6, md: 10 } }>
          <SimpleGrid columns={ { base: 3, md: 3 } } spacing={ { base: 3, md: 4 } }>
            <Flex
              as="a" href="mailto:judecodes@gmail.com" target="_blank"
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiMailSendLine size="36"/>
              <Text mt="3">Email</Text>
            </Flex>
            <Flex
              as="a" href="https://github.com/jsbuddy" target="_blank"
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiGithubLine size="36"/>
              <Text mt="3">Github</Text>
            </Flex>
            <Flex
              as="a" href="https://codepen.io/judecodes" target="_blank"
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiCodepenLine size="36"/>
              <Text mt="3">Codepen</Text>
            </Flex>
            <Flex
              as="a" href="https://t.me/judecodes" target="_blank"
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiTelegramLine size="36"/>
              <Text mt="3">Telegram</Text>
            </Flex>
            <Flex
              as="a" href="https://www.linkedin.com/in/judecodes/" target="_blank"
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiLinkedinLine size="36"/>
              <Text mt="3">Linkedin</Text>
            </Flex>
            <Flex
              as="a" href="https://twitter.com/judecodes" target="_blank"
              direction="column" align="center" border="1px solid" cursor="pointer"
              borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") } rounded="2xl" px="8"
              py={ { base: 6, md: 8 } }
              _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
            >
              <RiTwitterFill size="36"/>
              <Text mt="3">Twitter</Text>
            </Flex>
          </SimpleGrid>
          <Flex
            as="a" target="_blank"
            href="https://docs.google.com/document/d/1_Zg9FNjpGtmJQv7Q0fKfVscEFsmhRpLX8RqiIrqz7v8/edit?usp=sharing"
            align="center" border="1px solid" px="6" py="4" rounded="xl" mt="6" cursor="pointer"
            borderColor={ useColorModeValue("blackAlpha.200", "whiteAlpha.200") }
            _hover={ { bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') } }
          >
            <RiProfileLine size="24"/>
            <Text ml="4">View Resume</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
