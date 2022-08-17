import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jude Francis</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar/>
      <Header/>
      <Projects/>
      <Technologies/>
    </>
  );
};
