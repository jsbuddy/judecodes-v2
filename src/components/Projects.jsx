import { Container, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import projects from "../lib/projects";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails.jsx";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
  const [current, setCurrent] = useState(null);

  const handleOpen = (project) => {
    setCurrent(project);
    onDetailsOpen();
  }

  return (
    <>
      <Container maxW="full" overflow="hidden" px={ { base: 0, md: 4 } }>
        <SimpleGrid columns={ { base: 1, md: 2, lg: 2 } } spacing={ { base: 4, lg: 4 } } overflow="hidden">
          {
            projects.map((project) => (
              <Project key={ project.id } project={ project } onClick={ () => handleOpen(project) }/>
            ))
          }
        </SimpleGrid>
      </Container>

      <AnimatePresence>
        {
          isDetailsOpen && (
            <ProjectDetails
              project={ current }
              onClose={ () => {
                onDetailsClose()
              } }
            />
          )
        }
      </AnimatePresence>
    </>
  );
};

export default Projects;
