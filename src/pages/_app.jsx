import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import { Chakra } from "../components/Chakra";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={ pageProps.cookies }>
      <div className="bg">
        <AnimateSharedLayout type="crossfade">
          <Component { ...pageProps } />
        </AnimateSharedLayout>
      </div>
    </Chakra>
  );
}

export { getServerSideProps } from "../components/Chakra";

export default MyApp;
