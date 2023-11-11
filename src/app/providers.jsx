"use client"
import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { MixpanelProvider } from "../hooks/use-mixpanel";

const Providers = ({ children }) => {
  return (
    <MixpanelProvider>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="system">
          { children }
          <Analytics/>
          <Analytics/>
        </ThemeProvider>
      </NextUIProvider>
    </MixpanelProvider>
  );
};

export default Providers;
