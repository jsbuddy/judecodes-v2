import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../lib/theme";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/assets/css/global.css"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet"/>
        </Head>
        <body>
        <ColorModeScript initialColorMode={ theme.config.initialColorMode }/>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
