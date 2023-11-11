import React from 'react';
import { Inter } from "next/font/google";
import Providers from "./providers";
import './global.scss'

const font = Inter({ subsets: ["latin"], weight: ["300", "400", '500', '600'] })

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={ font.className }>
    <head>
      <title>Jude Francis</title>
      <link rel="icon" type="image/svg+xml" href="/icons/logo-white.svg" media="(prefers-color-scheme: dark)"/>
      <link rel="icon" type="image/svg+xml" href="/icons/logo-black.svg" media="(prefers-color-scheme: light)"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </head>
    <body>
    <Providers>
      <main className="relative z-20">
        { children }
      </main>
      <div
        aria-hidden="true"
        className="fixed block dark:opacity-50 -bottom-[0%] -left-[60%] md:-bottom-[40%] md:-left-[20%] z-0"
      >
        <img
          src="/images/docs-left.png"
          className="relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs left background"
        />
      </div>
      <div
        aria-hidden="true"
        className="fixed block opacity-50 dark:opacity-50 -top-[20%] -right-[200%] md:-top-[80%] md:-right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
      >
        <img
          src="/images/docs-right.png"
          className="relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs right background"
        />
      </div>
    </Providers>
    </body>
    </html>
  );
};

export default RootLayout;
