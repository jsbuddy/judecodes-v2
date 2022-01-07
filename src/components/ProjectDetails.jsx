import { AspectRatio, Button, Container, Flex, IconButton, SimpleGrid, Text, useColorMode, } from "@chakra-ui/react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { MotionBox, MotionImage } from "./motion";

const ProjectDetails = ({ project, onClose }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // useEffect(() => {
  //   document.body.style.overflowY = "hidden";
  //   return () => {
  //     document.body.style.overflowY = "auto";
  //   };
  // });

  const animations = {
    variants: {
      in: {
        background: isDark ? "rgba(0, 0, 0, .9)" : "rgba(255, 255, 255, .95)",
      },
      out: {
        background: isDark ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)",
      },
    },
    animate: "in",
    exit: "out",
    initial: "out",
  };

  return (
    <>
      <MotionBox
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        zIndex="10"
        { ...animations }
      >
        <Container maxW="6xl" h="full" display="flex" flexDirection="column">
          <Flex justifyContent="flex-end" py="5">
            <IconButton
              variant="ghost"
              colorScheme="red"
              icon={ <FiX size="30"/> }
              size="lg"
              onClick={ onClose }
              aria-label="close"/>
          </Flex>
          <Flex flexGrow="1" alignItems="center">
            <SimpleGrid
              columns={ { base: 1, md: 2 } }
              flexGrow="1"
              alignItems="center"
            >
              <AspectRatio ratio={ 1 }>
                <MotionImage
                  layoutId={ project.id }
                  src={ project.image }
                  objectFit="cover"
                  rounded="md"
                  border="1px solid transparent"
                />
              </AspectRatio>
              <MotionBox
                animate={ { opacity: 1, transition: { duration: 0.5 } } }
                initial={ { opacity: 0 } }
                exit={ { opacity: 0 } }
              >
                <Flex
                  direction="column"
                  align="flex-start"
                  py={ { base: 10, md: 5 } }
                  px={ { base: 4, md: 10 } }
                >
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="GrayText"
                    textTransform="uppercase"
                    lineHeight="1"
                  >
                    { project.category }
                  </Text>
                  <Text fontSize="2xl" fontWeight="semibold" mt="2">
                    { project.title }
                  </Text>
                  <Text fontSize="lg" mt="6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt quaerat consectetur odit ea quia magni, non dolores
                    vero error soluta? Distinctio dolore dolorem accusantium
                    sunt nobis pariatur consectetur ex excepturi officia
                    perspiciatis a fugiat, amet molestiae sint iure itaque nisi
                    vel rem.
                  </Text>
                  <Flex mt="8">
                    { project.github ? (
                      <IconButton
                        as={ "a" }
                        icon={ <FiGithub/> }
                        href={ project.github }
                        rounded="30"
                        target="_blank"
                        mr="5"
                        aria-label="github"/>
                    ) : (
                      ""
                    ) }
                    <Button
                      as={ "a" }
                      href={ project.link }
                      target="_blank"
                      colorScheme="blue"
                      rightIcon={ <FiExternalLink/> }
                      rounded="30"
                      px="5"
                    >
                      Visit
                    </Button>
                  </Flex>
                </Flex>
              </MotionBox>
            </SimpleGrid>
          </Flex>
        </Container>
      </MotionBox>
    </>
  );
};

export default ProjectDetails;
