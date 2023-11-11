import React, { useState } from "react";
import projects from "../lib/projects";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails.jsx";
import { useMixpanel } from "../hooks/use-mixpanel.js";
import { useDisclosure } from "@nextui-org/react";
import { LayoutGroup } from "framer-motion";

const Projects = () => {
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();
  const [current, setCurrent] = useState(null);
  const { track } = useMixpanel();

  const handleOpen = (project) => {
    track(`Viewed project - ${ project.title }`);
    setCurrent(project);
    onDetailsOpen();
  }

  return (
    <LayoutGroup>
      <div className="container !max-w-[1600px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {
            projects.map((project) => (
              <Project key={ project.id } project={ project } onClick={ () => handleOpen(project) }/>
            ))
          }
        </div>
      </div>

      <ProjectDetails
        project={ current }
        isOpen={ isDetailsOpen }
        onClose={ onDetailsClose }
      />
    </LayoutGroup>
  );
};

export default Projects;
