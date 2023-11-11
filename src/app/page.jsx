"use client"
import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import { useMixpanel } from "../hooks/use-mixpanel";
import { useMount } from "react-use";
import Footer from "../components/Footer";

const HomePage = () => {
  const { track } = useMixpanel();

  useMount(() => {
    track('Visited home page');
  });

  return (
    <div className="bg">
      <Head>
        <title>Jude Francis</title>
      </Head>
      <Navbar/>
      <Header/>
      <Projects/>
      <Technologies/>
      <Footer/>
    </div>

  );
};

export default HomePage;
