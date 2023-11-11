import { FiGithub } from "react-icons/fi";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useKey } from "react-use";
import { useMixpanel } from "../hooks/use-mixpanel.js";
import { RiArrowRightUpLine, RiCloseLine } from "react-icons/ri";
import { Button, Card } from "@nextui-org/react"

const ProjectDetails = ({ project, isOpen, onClose }) => {
  const { track } = useMixpanel();
  useKey('Escape', onClose);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [isOpen]);

  const handleVisit = () => {
    window.open(project.link, '_blank');
    track(`Visited project - ${ project.title }`);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {
          (isOpen && !!project) && (
            <motion.div
              id="overlay"
              animate={ { opacity: 1 } }
              exit={ { opacity: 0 } }
              initial={ { opacity: 0 } }
              className="overlay fixed top-0 left-0 w-full h-screen z-[10] overflow-y-auto bg-white/90 dark:bg-black/90 backdrop-blur-lg"
              onClick={ e => {
                if (e.target.className.match(/overlay|container/gi)) onClose()
              } }
            >
              <Button
                isIconOnly variant="flat" radius="full"
                onClick={ onClose } aria-label="close" className="fixed top-6 right-4 md:top-10 md:right-16"
              >
                <RiCloseLine size="20"/>
              </Button>
              <div className="container !max-w-[700px] pt-20 pb-10 md:pt-10 mb:pb-20 flex flex-col space-y-6">
                <motion.img
                  layoutId={ `project-image-${ project.id }` } src={ project.image } alt={ project.title }
                  className="object-cover rounded-2xl w-full"
                />
                <motion.div
                  animate={ { opacity: 1, transition: { duration: 0.1 } } }
                  initial={ { opacity: 0 } } exit={ { opacity: 0 } }
                >
                  <Card className="py-8 px-9 md:px-10">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <p className="text-xs uppercase opacity-75">
                          { project.category }
                        </p>
                        <p className="text-lg font-semibold">
                          { project.title }
                        </p>
                      </div>
                      <div className="flex items-center ml-8">
                        {
                          !!project.github && (
                            <Button
                              variant="flat" isIconOnly as="a" href={ project.github } target="_blank"
                              className="rounded-full mr-2 md:mr-2" aria-label="github"
                            >
                              <FiGithub size="20"/>
                            </Button>
                          )
                        }
                        <Button
                          onClick={ handleVisit } endContent={ <RiArrowRightUpLine/> }
                          radius="full" px="5" color="primary"
                        >
                          Visit
                        </Button>
                      </div>
                    </div>
                    <p className="text-base mt-6 opacity-80">
                      { project.description }
                    </p>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default ProjectDetails;
