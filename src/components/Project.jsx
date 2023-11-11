import { motion, usePresence } from "framer-motion";

const Project = ({ project, onClick }) => {
  const [isPresent, safeToRemove] = usePresence();

  const card = {
    rest: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        layout
        initial="out"
        animate={ isPresent ? "in" : "out" }
        exit="out"
        whileTap="tapped"
        variants={ {
          in: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.5, }, },
          out: { y: 20, opacity: 0 },
          tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
        } }
        style={ { position: isPresent ? "static" : "absolute", } }
        transition={ { type: "spring", stiffness: 500, damping: 50, mass: 1 } }
        onAnimationComplete={ () => !isPresent && safeToRemove() }
        onClick={ () => onClick() }
      >
        <div className="relative rounded-sm md:rounded-lg">
          <div className="w-full aspect-[4.9/3]">
            <motion.img
              layoutId={ `project-image-${ project.id }` } src={ project.image } alt={ project.title }
              className="w-full h-full z-[1] rounded-2xl object-cover"
            />
          </div>
          <motion.div
            className="absolute inset-0 px-2 py-6 w-full h-full flex items-end cursor-pointer z-[2]"
            whileHover="hover" initial="rest" animate="rest" variants={ card }
          >
            <motion.div
              className="absolute left-1/2 bottom-[45px] -translate-x-1/2 backdrop-blur-md rounded-lg flex w-[300px] bg-orange-800 text-white py-3 px-4"
            >
              <div>
                <p className="text-xs font-medium uppercase">
                  { project.category }
                </p>
                <p className="text-md font-medium mt-1">
                  { project.title }
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
