import { Box, Button, Container, Flex, Grid, IconButton, Text, useColorMode, } from "@chakra-ui/react";
import { FiGithub, FiX } from "react-icons/fi";
import { MotionBox, MotionImage } from "./motion";
import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useKey } from "react-use";
import { useMixpanel } from "../hooks/use-mixpanel.js";
import { RiExternalLinkLine } from "react-icons/ri";

const ProjectDetails = ({ project, isOpen, onClose }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { track } = useMixpanel();
  const rootRef = useRef(null);
  useKey('Escape', onClose);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [isOpen]);

  const animations = {
    variants: {
      in: {
        background: isDark ? 'rgba(12, 14, 16, 0.992)' : 'rgba(255, 255, 255, .98)',
      },
      out: {
        background: isDark ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)',
      },
    },
    animate: "in",
    exit: "out",
    initial: "out",
  };

  const handleVisit = () => {
    window.open(project.link, '_blank');
    track(`Visited project - ${ project.title }`);
  };

  return (
    <>
      <AnimatePresence>
        {
          (isOpen && !!project) && (
            <MotionBox
              ref={ rootRef } position="fixed" top="0" left="0" width="100%" height="100vh" zIndex="10"
              overflowY="auto"{ ...animations }
            >
              <Container h="full" display="flex" flexDirection="column" py={ { base: 10, md: 10 } } maxW="700px">
                <Flex w="full">
                  <Grid w="full" alignItems="center" gridTemplateColumns={ { base: "1fr", md: "1fr" } }>
                    <MotionBox layoutId={ `project-${ project.id }` } w="full">
                      <MotionImage
                        layoutId={ `project-image-${ project.id }` } src={ project.image } objectFit="cover" rounded="lg"
                        w="full"
                      />
                    </MotionBox>
                    <MotionBox
                      animate={ { opacity: 1, transition: { duration: 0.1 } } }
                      initial={ { opacity: 0 } } exit={ { opacity: 0 } }
                    >
                      <Box
                        position="fixed" px="8"
                        top={ { base: 'initial', md: '2.5rem' } }
                        right={ { base: '0', md: '3rem' } }
                        left={ { base: '0', md: 'initial' } }
                        bottom={ { base: '1.5rem', md: 'initial' } }
                      >
                        <Button
                          variant="solid" leftIcon={ <FiX size="24"/> } rounded="full"
                          onClick={ onClose } aria-label="close" w="full"
                        >
                          Close
                        </Button>
                      </Box>
                      <Flex direction="column" align="flex-start" py={ { base: 8, md: 8 } } px={ { base: 6, md: 20 } }>
                        <Flex align="center" justify="space-between" w="full">
                          <Box>
                            <Text
                              fontSize="xs" fontWeight="medium" color="GrayText" textTransform="uppercase"
                              lineHeight="1"
                            >
                              { project.category }
                            </Text>
                            <Text fontSize="xl" fontWeight="semibold" mt="1">
                              { project.title }
                            </Text>
                          </Box>
                          <Flex align="center" ml="8">
                            {
                              !!project.github && (
                                <IconButton
                                  as={ "a" } icon={ <FiGithub/> } href={ project.github } rounded="30" target="_blank"
                                  mr="5" aria-label="github"
                                />
                              )
                            }
                            <Button
                              onClick={ handleVisit } rightIcon={ <RiExternalLinkLine/> }
                              rounded="30" px="5" variant="outline" size={ { base: 'sm', md: 'md' } }
                              color={ colorMode === 'light' ? '#fff' : 'gray.900' }
                              backgroundColor={ colorMode === 'light' ? 'gray.800' : 'gray.200' }
                              _hover={ { background: colorMode === 'light' ? 'gray.700' : 'gray.50' } }
                              _active={ { background: colorMode === 'light' ? 'gray.600' : 'gray.400' } }
                            >
                              Visit
                            </Button>
                          </Flex>
                        </Flex>
                        <Text fontSize="1.06rem" mt="6" opacity=".8">
                          { project.description }
                        </Text>
                      </Flex>
                    </MotionBox>
                  </Grid>
                </Flex>
              </Container>
            </MotionBox>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default ProjectDetails;
