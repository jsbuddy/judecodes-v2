import { motion } from "framer-motion";
import ContactModal from "./ContactModal.jsx";
import { Avatar, Button, useDisclosure } from '@nextui-org/react'
import { RiArrowRightLine } from "react-icons/ri";

const Header = () => {
  const { isOpen: isContactOpen, onOpen: onContactOpen, onClose: onContactClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="container">
          <div className=" w-full pt-24 pb-32 md:pt-32 md:pb-36">
            <div className="flex justify-between items-center">
              <motion.p
                initial={ { opacity: 0, y: 50 } }
                whileInView={ { opacity: 1, y: 0, transition: { ease: 'backInOut', duration: .5 } } }
                className="text-[1.7rem] md:text-4xl !leading-[1.6] md:!leading-[1.4] max-w-[650px] pr-4 dark:font-light"
              >
                Hey 👋🏽 I'm <span className="font-medium">Jude</span>, a developer committed to creating
                intuitive solutions that meets technical standards. Check out some of my work below and feel free to
                connect for collaboration
              </motion.p>
              <motion.div
                initial={ { opacity: 0, y: 50 } }
                whileInView={ { opacity: 1, y: 0, transition: { ease: 'backInOut', duration: .8, } } }
              >
                <Avatar
                  src="https://gravatar.com/avatar/274b47a5cf3030011b4110e61792d44c?s=400" alt="Jude Francis"
                  className="hidden md:block w-[200px] h-[200px]"
                />
              </motion.div>
            </div>
            <motion.div
              initial={ { opacity: 0, y: 50 } }
              whileInView={ { opacity: 1, y: 0, transition: { ease: 'backInOut', duration: .8, } } }
            >
              <Button
                onClick={ onContactOpen } className="mt-12" endContent={ <RiArrowRightLine size="20"/> }
                variant="solid" color="primary" size="lg" radius="full"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={ isContactOpen }
        onClose={ onContactClose }
      />
    </>
  );
};

export default Header;
