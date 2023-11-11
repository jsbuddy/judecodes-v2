import React from 'react';
import { SiDocker, SiGit, SiKotlin, SiNodedotjs, SiNuxtdotjs, SiPython, SiTailwindcss } from "react-icons/si";
import { RiAngularjsFill, RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import { motion } from "framer-motion";

const items = [
  { name: 'Node JS', link: 'https://nodejs.org', icon: <SiNodedotjs size="50"/>, },
  { name: 'React JS', link: 'https://reactjs.org', icon: <RiReactjsFill size="50"/>, },
  { name: 'Next JS', link: 'https://nextjs.org', icon: <TbBrandNextjs size="50"/>, },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com', icon: <SiTailwindcss size="50"/> },
  { name: 'Vue JS', link: 'https://vuejs.org', icon: <RiVuejsFill size="50"/> },
  { name: 'Nuxt JS', link: 'https://nuxtjs.org', icon: <SiNuxtdotjs size="50"/> },
  { name: 'Angular JS', link: 'https://angular.io', icon: <RiAngularjsFill size="50"/> },
  { name: 'Kotlin', link: 'https://kotlinlang.org', icon: <SiKotlin size="40"/> },
  { name: 'Python', link: 'https://www.python.com/', icon: <SiPython size="45"/> },
  { name: 'Docker', link: 'https://docker.com', icon: <SiDocker size="50"/> },
  { name: 'Figma', link: 'https://figma.com', icon: <CgFigma size="50"/> },
  { name: 'Git', link: 'https://git-scm.com', icon: <SiGit size="50"/> },
];

const Technologies = () => {
  return (
    <div className="container py-20 md:py-36 grid md:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col space-y-4">
        <motion.p
          initial={ { opacity: 0, y: 50 } }
          whileInView={ { opacity: 1, y: 0, transition: { ease: 'backInOut', duration: .5, } } }
          className="text-[1.7rem] md:text-4xl !leading-snug md:max-w-[450px] dark:font-light"
        >
          A few technologies that have been central to my recent work and projects including AI orchestration tools like
          Langchain
        </motion.p>
      </div>
      <motion.div
        initial={ { opacity: 0, y: 50 } }
        whileInView={ { opacity: 1, y: 0, transition: { ease: 'backInOut', duration: .6, } } }
        className="bg-black/[.03] dark:bg-white/[.03] py-16 px-12 rounded-3xl order-1"
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-12">
          {
            items.map((item, index) => {
              return (
                <a
                  href={ item.link } target="_blank" key={ index } title={ item.name }
                  className="flex items-center justify-center opacity-90"
                >
                  { item.icon }
                </a>
              );
            })
          }
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
