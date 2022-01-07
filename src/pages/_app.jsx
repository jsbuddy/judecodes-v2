import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import { Chakra } from "../components/Chakra";
import "../styles/global.scss";

function MyApp({ Component, pageProps, router }) {
  const animations = {
    variants: {
      out: { opacity: 0 },
      in: { opacity: 1 },
    },
    animate: "in",
    exit: "out",
    initial: "out",
  };
  return (
    <Chakra cookies={pageProps.cookies}>
      <div className="bg">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            <motion.div key={router.route} {...animations}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </Chakra>
  );
}

export { getServerSideProps } from "../components/Chakra";

export default MyApp;
