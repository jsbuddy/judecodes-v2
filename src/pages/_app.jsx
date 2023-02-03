import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import { Chakra } from "../components/Chakra";
import "../styles/global.scss";
import { MixpanelProvider } from "../hooks/use-mixpanel.js";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <MixpanelProvider>
      <Chakra cookies={ pageProps.cookies }>
        <div className="bg">
          <AnimateSharedLayout type="crossfade">
            <Component { ...pageProps } />
          </AnimateSharedLayout>
          <Analytics/>
        </div>
      </Chakra>
    </MixpanelProvider>
  );
}

export { getServerSideProps } from "../components/Chakra";

export default MyApp;
