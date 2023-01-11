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

          <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"/>
          <link rel="manifest" href="icons/site.webmanifest"/>
          <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
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
