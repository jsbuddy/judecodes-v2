import { Box, Button, Container, Flex, Grid, IconButton, Text, useColorMode, } from "@chakra-ui/react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { MotionBox, MotionImage } from "./motion";
import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useKey } from "react-use";
import { useMixpanel } from "../hooks/use-mixpanel.js";

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
        background: isDark ? "rgba(13, 16, 21, 0.98)" : "rgba(255, 255, 255, .98)",
      },
      out: {
        background: isDark ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)",
      },
    },
    animate: "in",
    exit: "out",
    initial: "out",
  };

  const handleVisit = () => {
    window.open(project.link, '_blank');
    track(`Visited project - ${ project.title }`);
  }

  return (
    <>
      <AnimatePresence>
        {
          (isOpen && !!project) && (
            <MotionBox
              ref={ rootRef } position="fixed" top="0" left="0" width="100%" height="100vh" zIndex="10"
              overflowY="auto"{ ...animations }
            >
              <Container h="full" display="flex" flexDirection="column" py="10" maxW="7xl">
                <Flex flexGrow="1" alignItems="center" w="full">
                  <Grid w="full" alignItems="center" gridTemplateColumns={ { base: "1fr", md: "2fr 1.5fr" } }>
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
                      <Flex direction="column" align="flex-start" py={ { base: 10, md: 5 } } px={ { base: 8, md: 10 } }>
                        <Flex align="center" justify="space-between" w="full">
                          <Box>
                            <Text fontSize="sm" fontWeight="medium" color="GrayText" textTransform="uppercase"
                                  lineHeight="1">
                              { project.category }
                            </Text>
                            <Text fontSize="2xl" fontWeight="semibold" mt="2">
                              { project.title }
                            </Text>
                          </Box>
                          <IconButton
                            variant="ghost" colorScheme="red" icon={ <FiX size="24"/> } rounded="full"
                            onClick={ onClose } aria-label="close" ml="4"
                          />
                        </Flex>
                        <Text fontSize="1.1rem" mt="6">
                          { project.description }
                        </Text>
                        <Flex mt="8">
                          {
                            !!project.github && (
                              <IconButton
                                as={ "a" } icon={ <FiGithub/> } href={ project.github } rounded="30" target="_blank"
                                mr="5" aria-label="github"
                              />
                            )
                          }
                          <Button
                            onClick={ handleVisit } rightIcon={ <FiExternalLink/> } rounded="30"
                            px="5" backgroundColor="gray.800" color="#fff" _hover={ { background: "gray.900" } }
                            _active={ { background: "gray.900" } }
                          >
                            Visit
                          </Button>
                        </Flex>
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
