import Head from "next/head";
import Title from "../title";
import NavBar from "../navBar";
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import seedUp from "../../utilities/seedUp";

export default function Template() {
  useEffect(() => {
    seedUp();
  }, []);

  return (
    <Flex justify="center" align="center" direction="column">
      <Title />
      <NavBar />
      <Head>
        <title>App Name</title>
        <link rel="manifest" href="app.webmanifest" />
        <meta name="theme-color" content="#1A202C" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <meta property="og:title" content="App Name" key="title" />
        <meta name="keywords" content="application key words list here" />
        <meta name="description" content="Application description here." />
      </Head>
    </Flex>
  );
}
