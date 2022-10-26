import { Box, Text } from "@chakra-ui/react";
import { motion, usePresence } from "framer-motion";
import { MotionBox, MotionImage } from "./motion";

const Project = ({ project, onClick }) => {
  const [isPresent, safeToRemove] = usePresence();

  const props = {
    layout: true,
    style: {
      position: isPresent ? "static" : "absolute",
    },
    initial: "out",
    whileTap: "tapped",
    animate: isPresent ? "in" : "out",
    exit: "out",
    variants: {
      in: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
        },
      },
      out: { y: 20, opacity: 0 },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { type: "spring", stiffness: 500, damping: 50, mass: 1 },
    onClick: () => onClick(),
  };

  const card = {
    rest: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div { ...props }>
        <Box position="relative" overflow="hidden" rounded={ { base: "sm", md: "lg" } }>
          <MotionBox layoutId={ `project-${ project.id }` } w="full" h={ { base: '270px', md: '310px' } }>
            <MotionImage
              layoutId={ `project-image-${ project.id }` } src={ project.image } w="full" h="full" zIndex="1"
              rounded={ { base: "sm", md: "lg" } } objectFit="cover"
            />
          </MotionBox>
          <MotionBox
            cursor="pointer" px="2" py="6" width="full" height="full" display="flex" alignItems="flex-end"
            whileHover="hover" initial="rest" animate="rest" variants={ card } zIndex="2"
            position="absolute" inset="0"
          >
            <MotionBox
              display="flex" width="300px" backgroundColor="orange.800" color="white" py="3" px="4"
              position="absolute" bottom="45px" left="50%" transform="translateX(-50%)" rounded="lg"
              style={ { backdropFilter: "blur(3px)" } }
            >
              <Box alignItems="start">
                <Text fontSize="xs" fontWeight="medium" textTransform="uppercase" lineHeight="1">
                  { project.category }
                </Text>
                <Text fontSize="md" lineHeight="1" fontWeight="medium" mt="1">
                  { project.title }
                </Text>
              </Box>
            </MotionBox>
          </MotionBox>
        </Box>
      </motion.div>
    </>
  );
};

export default Project;
