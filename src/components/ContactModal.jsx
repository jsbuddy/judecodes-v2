import React from 'react';
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react"
import {
  RiCodepenLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMailSendLine,
  RiTelegramLine,
  RiTwitterFill
} from "react-icons/ri";
import { useMixpanel } from "../hooks/use-mixpanel.js";

const ContactModal = ({ isOpen, onClose }) => {
  const { track } = useMixpanel();

  const handleClick = (name, link) => {
    track(`Clicked contact - ${ name }`);
    window.open(link, '_blank');
  };

  return (
    <Modal
      isOpen={ isOpen } onClose={ onClose } backdrop="blur" placement="bottom-center"
      classNames={ { closeButton: 'top-9 right-10' } }
    >
      <ModalContent className="py-10 rounded-3xl">
        <ModalHeader className="px-8 md:px-10 py-0 mb-10 text-xl">Get in touch</ModalHeader>
        <ModalBody className="px-8 md:px-10">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-4">
            <div
              className="flex flex-col items-center justify-center rounded-3xl px-8 py-6 md:py-8 cursor-pointer bg-black/[.04] hover:bg-black/[.06] dark:bg-white/[.03] dark:hover:bg-white/[.04]"
              onClick={ () => handleClick('Email', 'mailto:judecodes@gmail.com') }
            >
              <RiMailSendLine className="opacity-100" size="32"/>
              <p className="text-md opacity-75 mt-3">Email</p>
            </div>
            <div
              onClick={ () => handleClick('Github', 'https://github.com/jsbuddy') }
              className="flex flex-col items-center justify-center rounded-3xl px-8 py-6 md:py-8 cursor-pointer bg-black/[.04] hover:bg-black/[.06] dark:bg-white/[.03] dark:hover:bg-white/[.04]"
            >
              <RiGithubLine className="opacity-100" size="32"/>
              <p className="text-md opacity-75 mt-3">Github</p>
            </div>
            <div
              onClick={ () => handleClick('Codepen', 'https://codepen.io/judecodes') }
              className="flex flex-col items-center justify-center rounded-3xl px-8 py-6 md:py-8 cursor-pointer bg-black/[.04] hover:bg-black/[.06] dark:bg-white/[.03] dark:hover:bg-white/[.04]"
            >
              <RiCodepenLine className="opacity-100" size="32"/>
              <p className="text-md opacity-75 mt-3">Codepen</p>
            </div>
            <div
              onClick={ () => handleClick('Telegram', 'https://t.me/judecodes') }
              className="flex flex-col items-center justify-center rounded-3xl px-8 py-6 md:py-8 cursor-pointer bg-black/[.04] hover:bg-black/[.06] dark:bg-white/[.03] dark:hover:bg-white/[.04]"
            >
              <RiTelegramLine className="opacity-100" size="32"/>
              <p className="text-md opacity-75 mt-3">Telegram</p>
            </div>
            <div
              onClick={ () => handleClick('Linkedin', 'https://www.linkedin.com/in/judecodes/') }
              className="flex flex-col items-center justify-center rounded-3xl px-8 py-6 md:py-8 cursor-pointer bg-black/[.04] hover:bg-black/[.06] dark:bg-white/[.03] dark:hover:bg-white/[.04]"
            >
              <RiLinkedinLine className="opacity-100" size="32"/>
              <p className="text-md opacity-75 mt-3">Linkedin</p>
            </div>
            <div
              onClick={ () => handleClick('Twitter', 'https://twitter.com/judecodes') }
              className="flex flex-col items-center justify-center rounded-3xl px-8 py-6 md:py-8 cursor-pointer bg-black/[.04] hover:bg-black/[.06] dark:bg-white/[.03] dark:hover:bg-white/[.04]"
            >
              <RiTwitterFill className="opacity-100" size="32"/>
              <p className="text-md opacity-75 mt-3">Twitter</p>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
